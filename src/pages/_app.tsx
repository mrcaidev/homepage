import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";
import { LazyMotion } from "framer-motion";
import { type AppProps } from "next/app";
import dynamic from "next/dynamic";
import { TopBar } from "src/components/top-bar";
import { ThemeProvider } from "src/contexts/theme.context";
import "src/styles/globals.css";

const Footer = dynamic<{}>(() =>
  import("src/components/footer").then((mod) => mod.Footer)
);
const features = () =>
  import("src/utils/motion.util").then((mod) => mod.domAnimation);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LazyMotion features={features} strict>
        <TopBar />
        <Component {...pageProps} />
        <Footer />
      </LazyMotion>
    </ThemeProvider>
  );
}
