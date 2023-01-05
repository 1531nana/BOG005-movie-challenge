export const axios = jest.fn();

export const makeRequestGetFilmId = () =>
  Promise.resolve([
    {
      Title: "Titanic",
      Plot: "titanic resumary",
      Year: 1985,
      Director: "Alan",
      Genre: "Drama",
      Actors: "Jhonny Deep",
      Awards: "3 wins",
      Type: "movie",
      imdbID: 123456,
      Poster: "http://titanic.png",
    },
  ]);

  export const makeRequestSearch =  () =>
  Promise.resolve(
    {
      Search: [{
        Title: "Women",
        Plot: "women resumary",
        Year: 2005,
        Director: "Stella",
        Genre: "Action",
        Actors: "Emma",
        Awards: "5 wins",
        Type: "series",
        imdbID: 123456,
        Poster: "http://women.png",
      }],
      totalResults: '1',
      Response: true
    },
  );
