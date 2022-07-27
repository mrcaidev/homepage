import Head from "next/head";
import { About } from "src/components/about";
import { Cover } from "src/components/cover";
import { Footer } from "src/components/footer";
import { Projects } from "src/components/projects";
import { Skills } from "src/components/skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - MrCai</title>
      </Head>
      <main>
        <Cover />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </>
  );
}
