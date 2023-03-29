import { Text, SimpleGrid } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGame from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

function GameGrid({ gameQuery }: Props) {
  const { data: games, error, isLoading } = useGame(gameQuery);
  const cardSkeleton = [1, 2, 3, 4, 5, 6, 7, 8];

  if (error) return <Text>{error}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        gap="5"
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
