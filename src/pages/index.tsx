import { GetStaticProps } from "next";
import Head from "next/head";
import { About } from "src/components/about";
import { Cover } from "src/components/cover";
import { Skills } from "src/components/skills";
import { StatsContext } from "src/contexts/stats.context";
import { getGithubStats } from "src/helpers/get-github-stats";
import { getTopLangs } from "src/helpers/get-top-langs";
import { Stats } from "src/models/stats.model";

export default function IndexPage(stats: Stats) {
  return (
    <>
      <Head>
        <title>Home - MrCai</title>
      </Head>
      <StatsContext.Provider value={stats}>
        <Cover />
        <About />
        <Skills />
      </StatsContext.Provider>
    </>
  );
}

export const getStaticProps: GetStaticProps<Stats> = async () => {
  const githubStats = await getGithubStats();
  const topLangs = await getTopLangs();
  return { props: { githubStats, topLangs }, revalidate: 60 * 60 * 24 };
};
