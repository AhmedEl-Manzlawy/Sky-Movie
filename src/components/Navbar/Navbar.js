
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import { useSelector } from 'react-redux';
import { languageContext } from '../Context/LanguageContext';
import { modeContext } from '../Context/ModeContext';

const Navbar = () => {
  const fav = useSelector(state => state.favourite)
  const {lang,setLang} = useContext(languageContext)
  const {mode , setMode} = useContext(modeContext)
  
  
  const handelTheme =()=>{
    mode === "light" ? setMode('dark') :setMode("light");
    console.log(mode)
  }
  return (
    <nav className={`navbar navbar-expand-lg ${mode === "light" ? "navbar-dark bg-dark":"navbar-light bg-light"} sticky-top`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">SkyMovie
    <i className="fa-brands fa-skyatlas  fa-2xl px-1"></i>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/movie/popular">Pouplar</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/movie/top-rated">Top Rated</Link>
        </li>
        <li className="nav-item">
          
        <Link className="nav-link active" aria-current="page" to="/movie/now-playing">Now Playing</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/movie/upcoming">Up Coming</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/movie/favourite">Favourites
          <span className='mx-2 fw-bold'>{fav.length < 1 ? "":fav.length }</span>
          </Link>
        </li>
        
       
      </ul>
      <div>
        <button className='btn btn-light  mx-3' onClick={()=>setLang(lang === "en" ? "ar" : "en")}>{lang}</button>
      </div>
      <Search />
      <div>
        <button className='btn btn-light  mx-3' onClick={handelTheme} >
          {
            mode ==="light" ? <i className="fa-regular fa-sun"></i> :<i className="fa-solid fa-moon"></i>
          }
        </button>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar