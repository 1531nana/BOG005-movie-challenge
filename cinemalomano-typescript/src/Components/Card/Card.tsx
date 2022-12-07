import React, { useState } from "react";
import { getOneMovie } from "../../lib/request";
import { Description} from '../../types'
import './style.css'

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
    <main className="main-card">
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
              <img src={movie.Poster} alt="" className="mainCard---Poster"/>
              {!movieDetail
                ? ""
                : movieDetail.map((res) => {
                    if (res.imdbID === movie.imdbID) return( 
                    <div  key={res.imdbID} className='detailsBacKCard'>
                        <p>{res.Title}</p>
                        <p>{res.Plot}</p>
                        <p>{res.Genre}</p>

                    </div>
                    );
                  })}
            </section>
          ))}
        </div>
      ) : null}
    </main>
  );
};
