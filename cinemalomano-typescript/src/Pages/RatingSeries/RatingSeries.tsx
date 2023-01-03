import "./style.css";
import { Description } from "../../types";
import { useState, useEffect } from "react";
import "./style.css";
import Film from "../FilmTopFive/Film";
import { makeRequestGetFilmId, makeRequestSearch } from "../../lib/request";
import Spinner from "react-bootstrap/Spinner";
import { Header } from "../../Components/Header/Header";
import one from '../../resources/one.png'
import two from '../../resources/two.png'
import three from '../../resources/three.png'
import four from '../../resources/four.png'
import five from '../../resources/five.png'

export const TopFiveRatingsSeries = () => {
  interface RatingSeries {
    Series: Array<Description>;
    SeriesOrder: Array<Array<Description>>;
    pages: number;
  }

  const imagesTopFive = [one, two, three, four, five]
  const [series, setSeries] = useState<RatingSeries["Series"]>([]);
  const [seriesWithDetails, setSeriesWithDetails] =
    useState<RatingSeries["SeriesOrder"]>();
  const [pages, setPages] = useState<RatingSeries["pages"]>(1);

  useEffect(() => {
    if (pages < 6) {
      makeRequestSearch("batman", pages, "series").then((data) => {
        setSeries([...series, data.Search]);
        setPages(pages + 1);
      });
    }
  }, [pages]);

  async function requestASeries(id: number) {
    const ratingSeries = await makeRequestGetFilmId(id).then((request) =>
      request.map((series) => series)
    );
    return ratingSeries;
  }

  useEffect(() => {
    if (series.length === 5) {
      const requestAllSeries = Promise.all(
        series.flat().map(async (aSeries) => {
          return await requestASeries(aSeries.imdbID);
        })
      );
      requestAllSeries.then((request) => {
        const sortByRatingAllSeries = request
          .flat()
          .sort(function (serieA, serieB) {
            return serieB.imdbRating - serieA.imdbRating;
          });
        setSeriesWithDetails(sortByRatingAllSeries);
      });
    }
  }, [series]);

  let acumTopFiveRating: Description[] = [];
  if (seriesWithDetails) {
    seriesWithDetails.flat().map((aSeries) => {
      if (acumTopFiveRating.length < 5) {
        acumTopFiveRating.push(aSeries);
      }
    });
  }

  return (
    <div className="homePage">
      <section className="homePage-sectionHeader">
        <Header />
      </section>
      <div className="homePage--container">
        <h1 className="homePage--titleHome">TOP FIVE BATMAN SERIES RATING</h1>
        <main className="homePage--moviesAwards">
          {acumTopFiveRating.length < 1 ? (
            <Spinner
              animation="border"
              variant="light"
              className="d-flex justify-content-center alig-items-center position-absolute"
            />
          ) : (
             acumTopFiveRating.map((data,i) => <Film key={i - 1} movies={data} i={i}/>) 
            
          )}
        </main>
      </div>
    </div>
  );
};

export default TopFiveRatingsSeries;
