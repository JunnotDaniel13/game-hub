import { Text } from "@chakra-ui/react";
import useGame from "../hooks/useGame";

function GameGrid() {
  const { games, error } = useGame();

  return (
    <>
      {error ? <Text>{error}</Text> : ""}
      <ul>
        {games.map((game) => {
          return <li key={game.id}>{game.name}</li>;
        })}
      </ul>
    </>
  );
}

export default GameGrid;
