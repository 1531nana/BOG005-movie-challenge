import axios from "axios";
import { Description } from "../types";

const baseURL = "https://www.omdbapi.com/";
const apiKey = "80cad3d3";

// const apiKey = 'b08101fa'

// https://www.omdbapi.com/?i=tt3896198&apikey=b08101fa //https://omdbapi.com/?s=love&apikey=80cad3d3

export const makeRequestGetDataOfLastestReleases = async (
  title: string,
  pages: number
): Promise<Description[]> => {
  const urlRequest = `${baseURL}?apikey=${apiKey}&s=${title}&y=${new Date().getFullYear()}&page=${pages}`;
  const response = await axios.get(urlRequest);
  if (response.data.Search === undefined) return [];
  console.log("All movies ", response.data.Search);
  return response.data.Search;
};

export const makeRequestGetMovieId = async (id: number) => {
  const urlRequest = `${baseURL}?apikey=${apiKey}&i=${id}`;
  const response = await axios.get(urlRequest);
  console.log("detaiils ", response.data);
  if (response.data === undefined) return [];
  return [response.data];
};

export const makeRequestGetMovieIdWhitPlotFull = async (id: string) => {
  const urlRequest = `${baseURL}?apikey=${apiKey}&i=${id}&plot=full`;
  const response = await axios.get(urlRequest);
  if (response.data === undefined) return [];
  console.log("detaiils with plot full ", response.data);
  return [response.data];
};

export const makeRequestGetAmountWarMovies = async (pages: number) => {
  const urlRequest = `${baseURL}?apikey=${apiKey}&s=war&type=movie&page=${pages}`;
  const response = await axios.get(urlRequest);
  if (response.data.Search === undefined) return [];
  console.log("All movies war ", response.data.Search);
  return response.data.Search;
};

// const awards = () => {
// //   let acum = [Array<Description>];
// //   // let acum = []
// //   for (let i = 0; i < 18; i++) {
//     // makeRequestGetAmountWarMovies(i).then((res) => {
//     //   res.map((movie: Array<Description>) => {
//     //     makeRequestGetMovieId(movie.imdbID).then((data) =>
//     //         console.log("data of ID >>>>>>>>", data)
//     //       )
//     //     );

//         // movie.map((film) =>
//         //   makeRequestGetMovieId(film.imdbID).then((data) =>
//         //     console.log("data of ID >>>>>>>>", data)
//         //   )
//         // );
//     //   });
//     // });
// //   }
//   // return Promise.all([acum]).then(res => res)
// };
// awards();
// .then(res => console.log(res))

export const makeRequestGetDataOfSeries = async (
  pages: number,
  search: string,
  type: string
): Promise<Description[]> => {
  const urlRequest = `${baseURL}?apikey=${apiKey}&s=${search}&page=${pages}&type=${type}`;
  const response = await axios.get(urlRequest);
  if (response.data.Search === undefined) return [];
  console.log("All series ", response.data.Search);
  return response.data.Search;
};

export const makeRequestGetDataSurprise = async (
  title: string,
  type: string
) => {
  const urlRequest = `${baseURL}?apikey=${apiKey}&s=${title}&type=${type}`;
  const response = await axios.get(urlRequest);
  if (response.data.Search === undefined) return [];
  console.log("All movies ", response.data.Search[0]);
  return [response.data.Search[0]];
};
