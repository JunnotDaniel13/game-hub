import { Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { Genre } from "./hooks/useGenre";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        md: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        md: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="md">
        <GridItem area="aside" paddingX="10px">
          <GenreList
            selectedGenre={selectedGenre}
            setSelectedGenre={(genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main" padding="10px">
        <Flex marginBottom={4}>
          <PlatformSelector />
        </Flex>
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
