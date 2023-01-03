import { useState } from "react";
import { Link } from "react-router-dom";
import { makeRequestGetFilmId } from "../../lib/request";
import { Description } from "../../types";
import noImage from '../../resources/no-image.webp'


interface Props {
  movies: Description;
}

const Film = ({ movies }: Props) => {
  interface movieDetailState {
    movieDetail: Array<Description>;
  }

  const [movieDetail, setMovieDetail] = useState<
    movieDetailState["movieDetail"]
  >([]);

  return (
    <>
      {!movies ? null : (
        <div className="card--film">
          <div className="card--movie">
            <section className="card--movie--container">
              <>
                <section
                  key={movies.imdbID}
                  className="card--movie_face --front "
                  data-testid="card--movie_face--front"
                  onClick={() =>
                    makeRequestGetFilmId(movies.imdbID).then((res) => {
                      setMovieDetail(res);
                    })
                  }
                >
                  <img
                    // src={movies.Poster}
                    src={`${movies.Poster === 'N/A' ? noImage : movies.Poster} `}
                    alt={movies.Title}
                    className="card--movie_poster"
                  />
                  <div className="card--movie_face year">
                    <p>{movies.Year}</p>
                  </div>
                </section>
              </>
              <>
                {movieDetail.map(
                  (res, i) =>
                    res.imdbID === movies.imdbID && (
                      <Link
                        to={`/home/${res.imdbID}`}
                        className="card--movie-link"
                      >
                        <section
                          className="card--movie_face --back "
                          data-testid="card--movie_face--back"
                          key={i}
                          style={{ display: "grid" }}
                        >
                          <p style={{ fontWeight: "500" }}>
                            {res.Title.toUpperCase()}
                          </p>
                          <p>{res.Plot}</p>
                          <p>{res.Genre}</p>
                        </section>
                      </Link>
                    )
                )}
              </>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default Film;
