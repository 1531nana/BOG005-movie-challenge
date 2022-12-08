import axios from 'axios'
import { Description } from "../types";

const baseURL = "https://www.omdbapi.com/";
const apiKey = 'b08101fa'

//?apikey=b08101fa&s=Guardians%20of%20the%20Galaxy%20Vol.%202&type=movie&page=1
// https://www.omdbapi.com/?i=tt3896198&apikey=b08101fa
//https://omdbapi.com/?s=series&page=1&s=the%20midnight%20club&y=2022&apikey=b08101fa   //s,t o imDb obligatorio

//obtener por título o ID y acceder a todas las propiedades ( t 'o' i)
//obtener por año 

 export const makeRequestGetMoviesWithYear = async (title: string, page: number):  Promise<Description[]> => {
    const urlRequest = `${baseURL}?apikey=${apiKey}&s=${title}&type=movie&y=${new Date().getFullYear()}&page=${page}`
    const response = await axios.get(urlRequest)
    if(response.data.Search === undefined) return []
    
    return response.data.Search
}

export const makeRequestGetMovieId = async (id: number) => {
    
    const urlRequest = `${baseURL}?apikey=${apiKey}&i=${id}`
    const response = await axios.get(urlRequest)
    console.log('detaiils ',response.data);
    if(response.data === undefined) return []
    return [response.data]
}
