import axios from "axios";

const OAUTH_TOKEN = `token ${process.env.GITHUB_TOKEN ?? ""}`;

export async function queryGithub<T extends unknown>(
  query: string,
  variables: object = {}
) {
  const res = await axios.post<T>(
    "https://api.github.com/graphql",
    { query, variables },
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": OAUTH_TOKEN,
      },
    }
  );
  return res.data;
}
