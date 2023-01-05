import { makeRequestGetFilmId, makeRequestSearch } from "../request"

jest.mock('../request.ts')

describe('first', () => { 

    test('The function makeRequestSearch must return an object with its properties', () => {  
        const mockMakeRequestSearch = {
            Search: [{
              Title: "Women",
              Plot: "women resumary",
              Year: 2005,
              Director: "Stella",
              Genre: "Action",
              Actors: "Emma",
              Awards: "5 grammys",
              Type: "series",
              imdbID: 123456,
              Poster: "http://women.png",
            }],
            totalResults: '1',
            Response: true
          }

        return makeRequestSearch('Women', 1, 'series', 2005).then((data) => {
            expect(data).toStrictEqual(mockMakeRequestSearch);
          });
    })

    test('The function makeRequestGetFilmId must return an array with its properties', () => {  
        const mockMakeRequestSearch = [
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
          ]

        return makeRequestGetFilmId(123456).then((data) => {
            expect(data).toStrictEqual(mockMakeRequestSearch);
          });
    })

 })
 