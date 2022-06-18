import { TopLang } from "src/models/stats.model";

const TOP_LANGS_NUM = 10;

interface Response {
  data: {
    user: {
      repositories: {
        nodes: {
          languages: {
            edges: {
              size: number;
              node: {
                color: string;
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
              color
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
    // Query GitHub API.
    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      body: JSON.stringify({ query }),
      headers: { authorization: `token ${process.env.GITHUB_TOKEN}` ?? "" },
    });

    // If status code does not equal 200.
    if (!res.ok) {
      return [] as TopLang[];
    }

    // Calculate top languages into object form.
    const {
      data: {
        user: {
          repositories: { nodes },
        },
      },
    }: Response = await res.json();
    const topLangsMap: {
      [name: string]: {
        color: string;
        size: number;
      };
    } = {};
    nodes.forEach(project => {
      const langs = project.languages.edges;
      langs.forEach(({ size, node: { color, name } }) => {
        if (name in topLangsMap) {
          topLangsMap[name].size += size;
        } else {
          topLangsMap[name] = { color, size };
        }
      });
    });

    // Convert object to array.
    const langs = Object.entries(topLangsMap)
      .map(([name, { color, size }]) => ({
        name,
        color,
        size,
      }))
      .sort((a, b) => b.size - a.size)
      .slice(0, TOP_LANGS_NUM);
    const totalSize = langs
      .map(lang => lang.size)
      .reduce((pre, cur) => pre + cur);
    const topLangs: TopLang[] = langs.map(lang => ({
      name: lang.name,
      color: lang.color,
      percentage: +((100 * lang.size) / totalSize).toFixed(2),
    }));

    return topLangs;
  } catch {
    return [] as TopLang[];
  }
}
