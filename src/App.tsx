import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="md">
        <GridItem area="aside" bg="green.400">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="red.400">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
