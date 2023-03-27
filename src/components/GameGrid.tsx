import { Text, SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";

function GameGrid() {
  const { games, error } = useGame();

  return (
    <>
      {error ? <Text>{error}</Text> : ""}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        padding={"10px"}
        gap={"10"}
      >
        {games.map((game) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
