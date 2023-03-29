import { Flex, ImageProps, Text, Image } from "@chakra-ui/react";

import meh from "./../assets/meh.webp";
import bullsEye from "./../assets/bulls-eye.webp";
import thumbsUp from "./../assets/thumbs-up.webp";

interface Props {
  rating: {
    int: number;
    float: number;
  };
}
function Emoji({ rating: { int, float } }: Props) {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
  };

  if (int < 3) return null;
  return (
    <Flex justifyContent="space-between" alignItems="center" marginTop={2}>
      <Image {...emojiMap[int]} />
      <Text colorScheme={"red"} opacity={0.7} fontWeight={"bold"}>
        Rating: {float}
      </Text>
    </Flex>
  );
}

export default Emoji;
