import { Button, Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav" bg="blue.400">
        Nav
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
