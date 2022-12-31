import axios from "axios";

const baseURL = "https://www.omdbapi.com/";
const apiKey = "80cad3d3";

// const apiKey = 'b08101fa'

// https://www.omdbapi.com/?i=tt3896198&apikey=b08101fa //https://omdbapi.com/?s=love&apikey=80cad3d3
//https://omdbapi.com/?s=tom&apikey=b08101fa&type=series&y=1940
// https://omdbapi.com/?s=man&apikey=b08101fa&type=series&y=1951
// https://omdbapi.com/?s=war&apikey=b08101fa&type=movie&y=2021&p=1

export const makeRequestGetseriesOfOlderReleases = async () => {
  const urlRequest = `${baseURL}?apikey=${apiKey}&s=tom&type=series&y=1940`;
  const response = await axios.get(urlRequest);
  if (response.data.Search === undefined) return [];
  console.log("OlderReleases ", response.data.Search);
  return response.data.Search;
};

export const makeRequestGetDataOfLastestReleases = async (
  title: string,
  pages: number
) => {
  const urlRequest = `${baseURL}?apikey=${apiKey}&s=${title}&y=${new Date().getFullYear()}&page=${pages}`;
  const response = await axios.get(urlRequest);
  if (response.data.Search === undefined) return [];
  console.log("All movies ", response.data);
  return response.data;
};

export const makeRequestGetMovieId = async (id: number) => {
  const urlRequest = `${baseURL}?apikey=${apiKey}&i=${id}`;
  const response = await axios.get(urlRequest);
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
  const urlRequest = `${baseURL}?apikey=${apiKey}&s=war&type=movie&page=${pages}&y=2021`;
  const response = await axios.get(urlRequest);
  if (response.data.Search === undefined) return [];
  console.log("All movies war ", response.data.Search);
  return response.data.Search;
};

export const makeRequestGetDataOfSeries = async (
  pages: number,
  search: string,
  type: string
) => {
  const urlRequest = `${baseURL}?apikey=${apiKey}&s=${search}&page=${pages}&type=${type}`;
  const response = await axios.get(urlRequest);
  if (response.data.Search === undefined) return [];
  console.log("All series ", response.data.Search);
  return response.data;
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
