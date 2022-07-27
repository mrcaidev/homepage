import { GetStaticProps } from "next";
import Head from "next/head";
import { About } from "src/components/about";
import { Cover } from "src/components/cover";
import { Footer } from "src/components/footer";
import { Projects } from "src/components/projects";
import { Skills } from "src/components/skills";
import { StatsProvider } from "src/contexts/stats.context";
import { getStats } from "src/helpers/stats.helper";
import { Stats } from "src/models/stats.model";

interface IProps {
  stats: Stats;
}

export default function Home({ stats }: IProps) {
  return (
    <>
      <Head>
        <title>Home - MrCai</title>
      </Head>
      <StatsProvider value={stats}>
        <main>
          <Cover />
          <About />
          <Skills />
          <Projects />
          <Footer />
        </main>
      </StatsProvider>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const stats = await getStats();
  return { props: { stats }, revalidate: 60 * 60 * 24 };
};
