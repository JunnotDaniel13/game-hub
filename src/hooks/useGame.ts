import useData from "./useData";
import { Genre } from "./useGenre";

export interface Platform {
  id: string;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGame = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre,
  ]);

export default useGame;
