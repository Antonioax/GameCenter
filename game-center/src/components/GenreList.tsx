import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/imageUrl";

interface Props {
  changeGenre: (newGenre: Genre) => void;
}

const GenreList = ({changeGenre}: Props) => {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;

  return (
    <List>
      {genres.map((g) => (
        <ListItem key={g.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(g.image_background)}
            />
            <Button
              onClick={() => changeGenre(g)}
              fontSize={"lg"}
              variant={"link"}
            >
              {g.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
