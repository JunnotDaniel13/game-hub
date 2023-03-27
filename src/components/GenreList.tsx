import useGenre from "../hooks/useGenre";

function GenreList() {
  const { genres, error, isLoading } = useGenre();
  return (
    <ul>
      {genres.map((genre) => {
        return <li>{genre.name}</li>;
      })}
    </ul>
  );
}

export default GenreList;
