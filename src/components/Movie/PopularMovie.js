import React, { useContext, useEffect, useState } from "react";
// import { axiosInstance } from "../../Network/axiosConfig";
// import { APi_KEY } from "../../Network/apikey";
import MovieCard from "../../Pages/MovieCard";
import Pagination from "../Pagination/Pagination";
import { pageContext } from "./../Context/PageContext";
import { languageContext } from "../Context/LanguageContext";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovie } from "../../redux/Actions/MovieAction";

const PopularMovie = () => {
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const { pageNum } = useContext(pageContext);
  const { lang } = useContext(languageContext);
  // const type = "popular";
  const [query] = useState("");

  useEffect(() => {
    dispatch(getAllMovie(pageNum, lang));
  }, [pageNum, lang, dispatch, query]);
  return (
    <>
      <Pagination />
      <div className="container row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-xs-2  g-4 m-auto p-3">
        {movie.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </div>
      <Pagination />
    </>
  );
};

export default PopularMovie;
