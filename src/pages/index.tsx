import Head from "next/head";
import { Cover } from "src/components/cover";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - MrCai</title>
      </Head>
      <main>
        <Cover />
      </main>
    </>
  );
}
