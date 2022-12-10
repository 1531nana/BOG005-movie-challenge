import React from "react";
import "./App.css";
import { HomePage } from "./Pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AllSeries } from "./Components/Series/AllSeries/AllSeries";
import { OlderReleases } from "./Components/Series/OlderReleases/OlderReleases";
import { TopFiveRatingsSeries } from "./Components/Series/TopFiveRatings/TopFiveRatings";
import { AllMovies } from "./Components/Movies/AllMovies/AllMovies";
import { TopFiveAwards } from "./Components/Movies/TopFiveAwards/TopFiveAwards";
import { TopFiveRatings } from "./Components/Movies/TopFiveRatings/TopFiveRatings";
import { Surprise } from "./Components/Surprise/Surprise";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/all-series" element={<AllSeries />} />
          <Route path="/older-releases" element={<OlderReleases/>} /> 
          <Route path="/top-five-ratings-series" element={<TopFiveRatingsSeries />} /> 
          <Route path="/all-movies" element={<AllMovies />} />
          <Route path="/top-five-ratings-movies" element={<TopFiveRatings />} /> 
          <Route path="/top-five-awards-movies" element={<TopFiveAwards />} /> 
          <Route path="/random-surprise" element={<Surprise />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
