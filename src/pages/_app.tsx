import { type AppProps } from "next/app";
import { ThemeProvider } from "src/contexts/theme.context";
import "src/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
