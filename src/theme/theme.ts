import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        background: "gray.800",
        color: "gray.100"
      }
    }
  }
});

export default theme;
