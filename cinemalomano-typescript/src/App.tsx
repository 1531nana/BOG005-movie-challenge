import "./App.css";
import { HomePage } from "./Pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TopFiveRatingsSeries } from "./Components/Series/TopFiveRatings/TopFiveRatings";
import { TopFiveRatings } from "./Components/Movies/TopFiveRatings/TopFiveRatings";
import { SurprisePages } from "./Pages/Surprise/SurprisePages";
import { FilmDescriptionPage } from "./Pages/FilmDescription/FilmDescriptionPage";
import { AllSeries } from "./Pages/AllSeries/AllSeries";
import AllMovies from "./Pages/AllMovies/AllMovies";
import OlderSeries from "./Pages/OlderSeries/OlderSeries";
import  AwardsMovies  from "./Pages/AwardsMovies/AwardsMovies";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/:details" element={<FilmDescriptionPage />} />
          <Route path="/all-series" element={<AllSeries />} />
          <Route path="/older-releases" element={<OlderSeries />} />
          <Route path="/top-five-ratings-series" element={<TopFiveRatingsSeries />} />
          <Route path="/all-movies" element={<AllMovies />} />
          <Route path="/top-five-ratings-movies" element={<TopFiveRatings />} />
          <Route path="/top-five-awards-movies" element={<AwardsMovies />} />
          <Route path="/random-surprise" element={<SurprisePages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
