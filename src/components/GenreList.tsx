import {
  List,
  ListItem,
  Image,
  HStack,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import getCroppedImage from "../services/image-url";

interface Props {
  setSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

function GenreList({ selectedGenre, setSelectedGenre }: Props) {
  const { data: genres, error, isLoading } = useGenre();
  return (
    <>
      <Heading fontSize="xl" paddingTop={5}>
        Genres
      </Heading>
      <List>
        {isLoading ? <Spinner /> : ""}
        {genres.map((genre) => {
          return (
            <ListItem key={genre.id}>
              <HStack marginY="10px">
                <Image
                  boxSize="32px"
                  objectFit="cover"
                  borderRadius={10}
                  src={getCroppedImage(genre.image_background)}
                />
                <Button
                  fontWeight={
                    selectedGenre?.name === genre.name ? "bold" : "normal"
                  }
                  textAlign="left"
                  whiteSpace="normal"
                  variant="link"
                  onClick={() => setSelectedGenre(genre)}
                >
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}

export default GenreList;
