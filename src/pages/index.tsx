import { GetStaticProps } from "next";
import Head from "next/head";
import { About } from "src/components/about";
import { Cover } from "src/components/cover";
import { getGithubStats } from "src/helpers/get-github-stats";
import { GithubStats } from "src/interfaces/github-stats";

interface Props {
  stats: GithubStats;
}

export default function IndexPage({ stats }: Props) {
  return (
    <>
      <Head>
        <title>Home - MrCai</title>
      </Head>
      <Cover />
      <About stats={stats} />
    </>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const stats = await getGithubStats();
  return { props: { stats }, revalidate: 60 * 60 * 24 };
};
