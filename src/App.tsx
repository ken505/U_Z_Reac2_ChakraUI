import { Button, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

export default function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Button colorScheme="cyan">Fuck off</Button>
        <p>WTF</p>
      </ChakraProvider>
    </div>
  );
}
