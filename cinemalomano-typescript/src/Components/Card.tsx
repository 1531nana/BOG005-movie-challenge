import { Fragment, useState } from "react";
import { getOneMovie } from "../lib/request";
import { Description } from "../types";

interface Props {
  movies: Array<Description>;
}

export const Card = ({ movies }: Props) => {
  interface movieDetailState {
    movieDetail: Array<Description>;
  }

  const [movieDetail, setMovieDetail] = useState<
    movieDetailState["movieDetail"]
  >([]);

  return (
    <main>
      {movies ? (
        <div className="movies">
          {movies.map((movie) => (
            <section
              key={movie.imdbID}
              className="movie"
              onClick={() =>
                getOneMovie(movie.imdbID).then((res) => setMovieDetail(res))
              }
            >
              <div className="movie-title">
                <p>{movie.Title}</p>
              </div>
              <img src={movie.Poster} alt="" />
              <button>details</button>
              {!movieDetail
                ? ""
                : movieDetail.map((res) => {
                    if (res.imdbID === movie.imdbID) return( 
                    <Fragment  key={res.imdbID}>
                        <p>{res.Title}</p>
                        <p>{res.Plot}</p>
                        <p>{res.Genre}</p>

                    </Fragment>
                    );
                  })}
            </section>
          ))}
        </div>
      ) : null}
    </main>
  );
};
