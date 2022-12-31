export const axios = jest.fn();

export const makeRequestGetMovieId = () =>
  Promise.resolve(() => [
    {
      Title: "Titanic",
      Plot: "titanic resumary",
      Year: 1985,
      Director: "Alan",
      Genre: "Drama",
      Actors: "Jhonny Deep",
      Awards: "3 grammys",
      Type: "movie",
      imdbID: 123456,
      Poster: "http://titanic.png",
    },
  ]);
