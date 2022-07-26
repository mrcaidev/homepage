import Head from "next/head";
import { About } from "src/components/about";
import { Cover } from "src/components/cover";
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
      </main>
    </>
  );
}
