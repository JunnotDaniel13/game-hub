import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

function CriticScore({ score }: Props) {
  const color = score > 70 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge fontSize={"lg"} paddingX={2} colorScheme={color} borderRadius={8}>
      {score}
    </Badge>
  );
}

export default CriticScore;
