import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFavourite, removeFavourite } from "../redux/Actions/FavouritesA";
import { modeContext } from './../components/Context/ModeContext';

const MovieCard = ({ movie }) => {
  const favourite = useSelector(state => state.favourite)
  const dispatch = useDispatch()
  const {mode} = useContext(modeContext)
  const addFav =()=>{
    dispatch(addFavourite(movie))
  }
  const removeFav =(id)=>{
    dispatch(removeFavourite(id))
  }

  const isFav =(movieId)=>{
    return favourite.find((movie) => movie.id === movieId);
  }
  return (
    <div className="col">
      <div className="card h-100 position-relative movieImg">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          className="card-img-top"
          style={{ height: "300px" }}
          alt="..."
        />
        <div className="card-body">
        <h5 className="card-title text-center">{movie.title.slice(0, 20)}</h5>
          <span className="lol bg-dark text-light">{movie.vote_average.toFixed(1)}⭐</span>
        </div>

        <div className="overlay-left fav-icon">
          {!isFav(movie.id) ? (
            <i
              onClick={addFav}
              className="fa-regular fa-star fa-2xl "
              style={{ color: "#FFD43B" }}
            ></i>
          ) : (
            <i
              onClick={() => removeFav(movie.id)}
              className="fa-solid fa-star fa-2xl "
              style={{ color: "#FFD43B" }}
            ></i>
          )}
        </div>

        {/* info */}
        <div className="overlay-right ">
          <Link to={`/movie/${movie.id}`}>
            <i
              className="fa-solid fa-circle-info fa-2xl"
            ></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
