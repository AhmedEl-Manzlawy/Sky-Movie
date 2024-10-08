import { GET_MOVIE_DETIALS } from "./Types";
import { APi_KEY } from "../../Network/apikey";
import { axiosInstance } from "../../Network/axiosConfig";

export const getMovieDetails = (id, lang) => (dispatch) => {
  axiosInstance
    .get(`movie/${id}?api_key=${APi_KEY}&language=${lang}`)
    .then((res) => dispatch(getMovieDetailsSuccess(res.data)))
    .catch((err) => console.log(err));
};
const getMovieDetailsSuccess = (payload) => ({
  type: GET_MOVIE_DETIALS,
  payload,
});


