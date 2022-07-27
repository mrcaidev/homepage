import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";
import { LazyMotion } from "framer-motion";
import { type AppProps } from "next/app";
import { TopBar } from "src/components/top-bar";
import { ThemeProvider } from "src/contexts/theme.context";
import "src/styles/globals.css";

const motionFeatures = () =>
  import("src/utils/motion.util").then((mod) => mod.default);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <LazyMotion features={motionFeatures} strict>
        <TopBar />
        <Component {...pageProps} />
      </LazyMotion>
    </ThemeProvider>
  );
}
