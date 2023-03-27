import { Text, SimpleGrid } from "@chakra-ui/react";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

function GameGrid() {
  const { data: games, error, isLoading } = useGame();
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
          ? cardSkeleton.map((id) => (
              <GameCardContainer key={id}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))
          : ""}
        {games.map((game) => {
          return (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          );
        })}
      </SimpleGrid>
    </>
  );
}

export default GameGrid;
