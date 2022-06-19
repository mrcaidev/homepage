import { TopLang } from "src/models/stats.model";
import { queryGithub } from "src/utils/requests";

interface Response {
  data: {
    user: {
      repositories: {
        nodes: {
          languages: {
            edges: {
              size: number;
              node: {
                name: string;
              };
            }[];
          };
        }[];
      };
    };
  };
}

const query = `
query {
  user(login: "mrcaidev") {
    repositories(ownerAffiliations: OWNER, isFork: false, first: 100) {
      nodes {
        name
        languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
          edges {
            size
            node {
              name
            }
          }
        }
      }
    }
  }
}
`;

export async function getTopLangs() {
  try {
    const {
      data: {
        user: {
          repositories: { nodes },
        },
      },
    } = await queryGithub<Response>(query);

    // Record every language's size.
    const langsRecord: Record<string, number> = {};
    let totalSize = 0;
    nodes.forEach(({ languages: { edges } }) => {
      edges.forEach(({ size, node: { name } }) => {
        langsRecord[name] = (langsRecord[name] ?? 0) + size;
        totalSize += size;
      });
    });

    // Convert record to array and sort it by size.
    const topLangs: TopLang[] = Object.entries(langsRecord)
      .sort((a, b) => b[1] - a[1])
      .map(lang => ({
        name: lang[0],
        percentage: +((100 * lang[1]) / totalSize).toFixed(2),
      }));

    return topLangs;
  } catch (e) {
    console.error(e);
    return [] as TopLang[];
  }
}
