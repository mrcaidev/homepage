import { type GetStaticProps } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Cover } from "src/components/cover";
import { type IStats } from "src/models/stats.model";
import { getStats } from "src/utils/stat";

const About = dynamic(() => import("src/components/about"));
const Projects = dynamic(() => import("src/components/projects"));
const Skills = dynamic(() => import("src/components/skills"));

const Home = ({ profile, topLangs, repos }: IStats) => (
  <>
    <Head>
      <title>Home - MrCai</title>
    </Head>
    <main className="w-full">
      <Cover />
      <About profile={profile} />
      <Skills />
      <Projects topLangs={topLangs} repos={repos} />
    </main>
  </>
);

export default Home;

export const getStaticProps: GetStaticProps<IStats> = async () => {
  const stats = await getStats();
  return { props: stats, revalidate: 60 * 60 * 24 };
};
