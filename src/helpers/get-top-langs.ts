import { TopLang } from "src/models/stats.model";

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
query userInfo {
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
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      body: JSON.stringify({ query }),
      headers: { authorization: `token ${process.env.GITHUB_TOKEN}` ?? "" },
    });
    if (!res.ok) {
      return [] as TopLang[];
    }
    const {
      data: {
        user: {
          repositories: { nodes },
        },
      },
    }: Response = await res.json();

    // Record every language's size.
    const langsRecord: Record<string, number> = {};
    let totalSize = 0;
    nodes.forEach(({ languages: { edges } }) => {
      edges.forEach(({ size, node: { name } }) => {
        langsRecord[name] = langsRecord[name] ?? 0 + size;
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
  } catch {
    return [] as TopLang[];
  }
}
