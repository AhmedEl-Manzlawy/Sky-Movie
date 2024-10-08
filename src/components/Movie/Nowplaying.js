import React, { useContext, useEffect } from "react";
import MovieCard from "../../Pages/MovieCard";
import Pagination from "../Pagination/Pagination";
import { pageContext } from "../Context/PageContext";
import { languageContext } from "../Context/LanguageContext";
import { getAllMovie } from "../../redux/Actions/MovieAction";
import { useDispatch, useSelector } from "react-redux";

const Nowplaying = () => {
  // const [movie, setMovie] = useState([]);
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const { pageNum } = useContext(pageContext);
  const { lang } = useContext(languageContext);
  const type = "now_playing";

  useEffect(() => {
    dispatch(getAllMovie(type, pageNum, lang));
  }, [type, pageNum, lang, dispatch]);
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

export default Nowplaying;
