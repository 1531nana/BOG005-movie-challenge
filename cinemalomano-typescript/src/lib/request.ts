import axios from "axios";

const baseURL = "https://www.omdbapi.com/";
// const apiKey = "80cad3d3";
const apiKey = "b08101fa";

// https://www.omdbapi.com/?i=tt3896198&apikey=b08101fa //https://omdbapi.com/?s=love&apikey=80cad3d3
//https://omdbapi.com/?s=tom&apikey=b08101fa&type=series&y=1940
// https://omdbapi.com/?s=man&apikey=b08101fa&type=series&y=1951
// https://omdbapi.com/?s=war&apikey=b08101fa&type=movie&y=2021&p=1

export const makeRequestSearch = async (
  search: string,
  pages: number,
  type: string | null,
  year?: number
) => {
  const urlRequest = `${baseURL}?apikey=${apiKey}&s=${search}&page=${pages}&y=${year}&type=${type}`;
  const response = await axios.get(urlRequest);
  if (response.data.Search === undefined) return [];
  console.log("Films Search ", response.data.Search);
  return response.data;
};

export const makeRequestGetFilmId = async (
  id: string | number,
  plot: string = "short"
) => {
  const urlRequest = `${baseURL}?apikey=${apiKey}&i=${id}&plot=${plot}`;
  const response = await axios.get(urlRequest);
  if (response.data === undefined) return [];
  return [response.data];
};
