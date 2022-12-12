import axios from 'axios'
import { Description } from "../types";

const baseURL = "https://www.omdbapi.com/";
const apiKey = '80cad3d3'
// const apiKey = 'b08101fa'

//?apikey=b08101fa&s=Guardians%20of%20the%20Galaxy%20Vol.%202&type=movie&page=1
// https://www.omdbapi.com/?i=tt3896198&apikey=b08101fa
//https://omdbapi.com/?s=love&apikey=80cad3d3   //s,t o imDb obligatorio
//https://omdbapi.com/?s=love&page=1&apikey=80cad3d3   //s,t o imDb obligatorio

//obtener por título o ID y acceder a todas las propiedades ( t 'o' i)
//obtener por año 

 export const makeRequestGetDataOfLastestReleases = async (title: string, pages: number):  Promise<Description[]> => {
    const urlRequest = `${baseURL}?apikey=${apiKey}&s=${title}&y=${new Date().getFullYear()}&page=${pages}`
    const response = await axios.get(urlRequest)
    if(response.data.Search === undefined) return []
    console.log('All movies ',response.data.Search);
    return response.data.Search
}

export const makeRequestGetAmountWarMovies = async (pages: number) => {
    const urlRequest = `${baseURL}?apikey=${apiKey}&s=woman&type=movie&page=${pages}`
    const response = await axios.get(urlRequest)
    if(response.data.Search === undefined) return []
    console.log('All movies war ',response.data);
    return response.data
}

export const makeRequestGetMovieId = async (id: number) => {
    
    const urlRequest = `${baseURL}?apikey=${apiKey}&i=${id}`
    const response = await axios.get(urlRequest)
    console.log('detaiils ',response.data);
    if(response.data === undefined) return []
    return [response.data]
}

export const makeRequestGetDataSurprise = async (title: string, type: string) => {
    const urlRequest = `${baseURL}?apikey=${apiKey}&s=${title}&type=${type}`
    const response = await axios.get(urlRequest)
    if(response.data.Search === undefined) return []
    console.log('All movies ',response.data.Search[0]);
    return [response.data.Search[0]]
}
