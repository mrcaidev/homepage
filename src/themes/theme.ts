import { extendTheme } from "@chakra-ui/react";
import { components } from "./components";
import { config } from "./config";
import { styles } from "./styles";

export const theme = extendTheme({
  config,
  components,
  styles,
});
