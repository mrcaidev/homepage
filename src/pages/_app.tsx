import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/900.css";
import { LazyMotion } from "framer-motion";
import { type AppProps } from "next/app";
import dynamic from "next/dynamic";
import TopBar from "src/components/top-bar";
import { ThemeProvider } from "src/contexts/theme.context";
import "src/styles/globals.css";

const Footer = dynamic(() => import("src/components/footer"));
const features = () => import("framer-motion").then((mod) => mod.domMax);

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider>
    <LazyMotion features={features} strict>
      <TopBar />
      <Component {...pageProps} />
      <Footer />
    </LazyMotion>
  </ThemeProvider>
);

export default App;
