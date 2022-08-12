import Head from "next/head";
import { Link } from "src/components/common/link";

const NotFound = () => (
  <>
    <Head>
      <title>404 - MrCai</title>
    </Head>
    <main className="flex flex-col justify-center items-center gap-y-4 w-full px-8 mt-20">
      <h1 className="font-black text-7xl sm:text-9xl">404</h1>
      <p className="text-lg sm:text-2xl">Page Not Found</p>
      <Link
        href="/"
        className="hover:text-highlight underline underline-offset-4"
      >
        Back to home
      </Link>
    </main>
  </>
);

export default NotFound;
