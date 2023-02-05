import axios from "axios";

const API_KEY = "95b753b6728f826809ac44907e13c581";
const BASE_URL = "https://api.themoviedb.org/3/";
const withBaseURL = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MoviesService {
  static getMovies() {
    return axios(withBaseURL("movie/popular"));
  }
}
