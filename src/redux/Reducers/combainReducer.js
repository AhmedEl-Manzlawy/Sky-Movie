import { combineReducers } from "redux";
import favouriteReducer from "./FavouriteReducer";
import movieDetailsReducer from "./MovieDetailsReducer";
import movieReducer from './MovieReducer';

export default combineReducers({
  movie : movieReducer,
  favourite: favouriteReducer,
  movieDetails: movieDetailsReducer
});
