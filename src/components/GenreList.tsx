import { List, ListItem, Image, HStack, Text, Spinner } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCroppedImage from "../services/image-url";

function GenreList() {
  const { data: genres, error, isLoading } = useGenre();
  return (
    <List>
      {isLoading ? <Spinner /> : ""}
      {genres.map((genre) => {
        return (
          <ListItem key={genre.id}>
            <HStack marginY="10px">
              <Image
                boxSize="32px"
                src={getCroppedImage(genre.image_background)}
              />
              <Text>{genre.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
}

export default GenreList;
