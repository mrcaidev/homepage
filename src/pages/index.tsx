import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Suspense } from "react";
import { Cover } from "src/components/cover";
import { StatsProvider } from "src/contexts/stats.context";
import { getStats } from "src/helpers/stats.helper";
import { Stats } from "src/models/stats.model";

const About = dynamic<{}>(() =>
  import("src/components/about").then((mod) => mod.About)
);
const Projects = dynamic<{}>(() =>
  import("src/components/projects").then((mod) => mod.Projects)
);
const Skills = dynamic<{}>(() =>
  import("src/components/skills").then((mod) => mod.Skills)
);

interface IProps {
  stats: Stats;
}

export default function Home({ stats }: IProps) {
  return (
    <>
      <Head>
        <title>Home - MrCai</title>
      </Head>
      <Suspense fallback="Loading...">
        <StatsProvider value={stats}>
          <main>
            <Cover />
            <About />
            <Skills />
            <Projects />
          </main>
        </StatsProvider>
      </Suspense>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const stats = await getStats();
  return { props: { stats }, revalidate: 60 * 60 * 24 };
};
