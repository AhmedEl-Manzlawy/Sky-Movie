import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import TopRate from "./components/Movie/TopRate";
import Nowplaying from "./components/Movie/Nowplaying";
import PopularMovie from "./components/Movie/PopularMovie";
import Upcoming from "./components/Movie/Upcoming";
import { languageContext } from "./components/Context/LanguageContext";
import { pageContext } from "./components/Context/PageContext";
import { useState } from "react";
import MovieDetails from "./Pages/MovieDetails";
import Favourite from "./Pages/Favourite";
import { modeContext } from './components/Context/ModeContext';
import Footer from "./components/Footer/Footer";


function App() {
  const [pageNum, setPageNum] = useState(1);
  const [lang, setLang] = useState("en");
  const [mode , setMode] =useState("light")

 
  return (
    <div className={`bg-${mode} ${mode === "light" ?"text-dark":"text-light" }`}>
      <languageContext.Provider value={{ lang, setLang }}>
        <pageContext.Provider value={{ pageNum, setPageNum }}>
          <modeContext.Provider value={{mode , setMode}}>

            <BrowserRouter>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/popular" element={<PopularMovie />} />
                <Route path="/movie/top-rated" element={<TopRate />} />
                <Route path="/movie/now-playing" element={<Nowplaying />} />
                <Route path="/movie/upcoming" element={<Upcoming />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/movie/favourite" element={<Favourite />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </modeContext.Provider>
        </pageContext.Provider>
      </languageContext.Provider>
    </div>
  );
}

export default App;
