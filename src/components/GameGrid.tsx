import { Text, SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { games, error, isLoading } = useGame();
  const cardSkeleton = [1, 2, 3, 4, 5, 6];

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
        {isLoading
          ? cardSkeleton.map((id) => <GameCardSkeleton key={id} />)
          : ""}
        {games.map((game) => {
          return <GameCard key={game.id} game={game} />;
        })}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
