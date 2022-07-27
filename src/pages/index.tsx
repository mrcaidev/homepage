import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Suspense } from "react";
import { StatsProvider } from "src/contexts/stats.context";
import { getStats } from "src/helpers/stats.helper";
import { Stats } from "src/models/stats.model";

const About = dynamic(() => import("src/components/about"), {
  suspense: true,
});
const Cover = dynamic(() => import("src/components/cover"), {
  suspense: true,
});
const Footer = dynamic(() => import("src/components/footer"), {
  suspense: true,
});
const Projects = dynamic(() => import("src/components/projects"), {
  suspense: true,
});
const Skills = dynamic(() => import("src/components/skills"), {
  suspense: true,
});

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
            <Footer />
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
