import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { languageContext } from './../components/Context/LanguageContext';
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails } from "../redux/Actions/MovieDetails";

const MovieDetails = () => {
  const movieDetails = useSelector(state => state.movieDetails)
  const dispatch = useDispatch()
  const { id } = useParams();
  const {lang} = useContext(languageContext)


  useEffect(() => {
    dispatch(getMovieDetails(id , lang))
  }, [id  ,lang , dispatch]);

  return (
    <div className="position-relative">
      <img
        src={`https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`}
        alt=""
        className=" w-100"
        style={{
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          height: 400,
        }}
      />
      <div
        className="position-absolute z-2"
        style={{
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.8)",
          height: 400,
        }}
      ></div>

      <div className="row g-0 ">
        <div className="col-md-4">
          <img
            src={"https://image.tmdb.org/t/p/w500/" + movieDetails.poster_path}
            className="position-absolute z-3 rounded-top"
            alt={movieDetails.title}
            style={{ height: 350, width: 250, top: 200, left: 100 }}
          />
        </div>

        <div className="col-md-8">
          <div className="card-body mb-5">
            <h1 className="card-title text-center border-bottom py-4 fw-bold mx-5">
              {movieDetails.title}
            </h1>
            <h4 className="fs-4 fw-bold mt-4">Overview :</h4>
            <p className="card-text mx-4 fs-5 ">{movieDetails.overview}</p>
            <p className="card-text">
              <span className="fs-4 fw-bold">Released : </span>{" "}
              {movieDetails.release_date}
            </p>
            <p className="card-text">
              <span className="fs-4 fw-bold">Duration : </span>
              {movieDetails.runtime} m
            </p>
            <p className="card-text">
              <span className="fs-4 fw-bold">Rate : </span>
              {Math.round(movieDetails.vote_average)}⭐
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
