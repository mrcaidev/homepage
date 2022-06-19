import { GetStaticProps } from "next";
import Head from "next/head";
import { About } from "src/components/about";
import { Cover } from "src/components/cover";
import { Projects } from "src/components/projects";
import { Skills } from "src/components/skills";
import { StatsContext } from "src/contexts/stats.context";
import { getStats } from "src/helpers/get-stats.helper";
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
  const stats = await getStats();
  return { props: stats, revalidate: 60 * 60 * 24 };
};
