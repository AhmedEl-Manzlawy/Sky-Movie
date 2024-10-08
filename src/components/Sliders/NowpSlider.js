import React, { useContext, useEffect, useState } from "react";
import { axiosInstance } from "../../Network/axiosConfig";
import { APi_KEY } from "../../Network/apikey";
import { languageContext } from "../Context/LanguageContext";
import SliderMovieCard from "../../Pages/SliderMovieCard";
import { Link } from "react-router-dom";

const NowpSlider = () => {
  const [movie, setMovie] = useState([]);
  const { lang } = useContext(languageContext);

  useEffect(() => {
    axiosInstance
      .get(`movie/now_playing?api_key=${APi_KEY}&language=${lang}`)
      .then((res) => setMovie(res.data.results.slice(0, 5)))
      .catch((err) => console.log(err));
  }, [lang]);
  return (
    <div className="container row row-cols-1 row-cols-lg-6 row-cols-md-6 row-cols-sm-2 row-cols-xs-2  g-4 m-auto p-3">
      {movie.map((movie) => {
        return <SliderMovieCard movie={movie} key={movie.id} />;
      })}
      <Link
        className="fw-bold d-flex align-self-center text-decoration-none"
        to="/movie/now-playing"
      >
        <span>
          More <i className="fa-solid fa-angles-right fa-2xl"></i>
        </span>
      </Link>
    </div>
  );
};

export default NowpSlider;
