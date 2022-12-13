import { Description } from "../../types";

interface Props {
  movies: Array<Description>;
}

export const FilmDescription = ({ movies }: Props) => {
  return (
    <main>
      {movies.map((movie) => {
        return <h1>{movie.Title}</h1>;
      })}
    </main>
  );
};
