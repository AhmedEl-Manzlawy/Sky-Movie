import { APi_KEY } from "../../Network/apikey";
import { axiosInstance } from "../../Network/axiosConfig";
import { GET_ALL_MOVIE, SEARCH_MOVIE } from "./Types"

export const getAllMovie =(pageNum ,lang)=>dispatch =>{
    axiosInstance
    .get(`movie/popular?api_key=${APi_KEY}&page=${pageNum}&language=${lang}`)
    .then((res) =>dispatch( getAllMoviesSuccess(res.data.results)))
    .catch((err) => console.log(err));
}

 const getAllMoviesSuccess =(payload)=>({
    type : GET_ALL_MOVIE , payload
})

export const getAllSearch = (query, pageNum,lang) => (dispatch) => {
    axiosInstance
      .get(
        `/search/movie?api_key=${APi_KEY}&query=${query}&page=${pageNum}&language=${lang}`
      )
      .then((res) => dispatch(getSearchSucces(res.data.results)))
      .catch((err) => console.log(err));
  }
  const getSearchSucces = (payload) => ({
    type: SEARCH_MOVIE,
    payload,
  });