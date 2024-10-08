import React, { useContext, useEffect, useState } from "react";
import { languageContext } from "./../Context/LanguageContext";
import { pageContext } from "./../Context/PageContext";
import { useDispatch } from "react-redux";
import { getAllMovie, getAllSearch } from "./../../redux/Actions/MovieAction";

const Search = () => {
  const [query, setQuery] = useState("");
  const { lang } = useContext(languageContext);
  const { pageNum } = useContext(pageContext);
  const dispatch = useDispatch();

  const handelForm = (e) => {
    e.preventDefault();
  };

  const handelSearch = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setQuery(e.target.value);
  };
  useEffect(() => {
    query !== ""? dispatch(getAllSearch(query, pageNum, lang)): dispatch(getAllMovie(pageNum, lang))
  }, [query, pageNum, lang, dispatch]);

  return (
    <nav className="navbar navbar-light   ">
      <div className="container-fluid">
        <form className="d-flex" onSubmit={handelForm}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={query}
            onChange={handelSearch}
          />
        </form>
      </div>
    </nav>
  );
};

export default Search;
