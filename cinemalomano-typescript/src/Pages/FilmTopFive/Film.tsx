import { useState } from "react";
import { Link } from "react-router-dom";
import { makeRequestGetFilmId } from "../../lib/request";
import { Description } from "../../types";
import noImage from "../../resources/no-image.webp";
import one from "../../resources/one.png";
import two from "../../resources/two.png";
import three from "../../resources/three.png";
import four from "../../resources/four.png";
import five from "../../resources/five.png";
import "./style.css";

interface Props {
  movies: Description;
  i: number;
}

const Film = ({ movies, i }: Props) => {
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
                  onClick={() =>
                    makeRequestGetFilmId(movies.imdbID).then((res) => {
                      setMovieDetail(res);
                    })
                  }
                >
                  <img
                    src={`${
                      movies.Poster === "N/A" ? noImage : movies.Poster
                    } `}
                    alt={movies.Title}
                    className="card--movie_poster"
                  />
                  <div className="card--movie_face year">
                    <p
                    data-testid="card--movie_face--front"
                    >{movies.Year}</p>
                  </div>
                  <img
                    src={`${
                      i === 0
                        ? one
                        : i === 1
                        ? two
                        : i === 2
                        ? three
                        : i === 3
                        ? four
                        : five
                    } `}
                    alt={movies.Title}
                    className="card--film__topFive"
                    aria-label={`number ${i + 1}`}
                  />
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
                          key={i * 2}
                          style={{ display: "grid" }}
                        >
                          <p style={{ fontWeight: "500" }}>
                            {res.Title.toUpperCase()}
                          </p>
                          <p>{res.Plot}</p>
                          <p 
                          data-testid="film-genre"
                          >{res.Genre}</p>
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
