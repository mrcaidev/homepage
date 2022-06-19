import { GetStaticProps } from "next";
import Head from "next/head";
import { About } from "src/components/about";
import { Cover } from "src/components/cover";
import { Projects } from "src/components/projects";
import { Skills } from "src/components/skills";
import { StatsContext } from "src/contexts/stats.context";
import { getGithubStats } from "src/helpers/get-github-stats";
import { getRepos } from "src/helpers/get-repos";
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
        <Projects />
      </StatsContext.Provider>
    </>
  );
}

export const getStaticProps: GetStaticProps<Stats> = async () => {
  const githubStats = await getGithubStats();
  const topLangs = await getTopLangs();
  const repos = await getRepos();
  return { props: { githubStats, topLangs, repos }, revalidate: 60 * 60 * 24 };
};
