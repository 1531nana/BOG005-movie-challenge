import { useEffect, useState } from "react";
import { makeRequestGetseriesOfOlderReleases } from "../../lib/request";
import { Description } from "../../types";
import { Card } from "../../Components/Card/Card";
import { Link } from "react-router-dom";
import home from "../../resources/home-modal.png";

const OlderSeries = () => {
  interface HomeState {
    series: Array<Description>;
  }

  const [series, setseries] = useState<HomeState["series"]>([]);

  useEffect(() => {
    makeRequestGetseriesOfOlderReleases().then(setseries);
  }, []);

  return (
    <div className="homePage">
      <Link to="/">
        <img src={home} alt="home" className="home--surprise" />
      </Link>
      <div className="homePage--container">
        <h1 className="homePage--titleHome">TOM's OLDER SERIES</h1>
        <Card movies={series} />
      </div>
    </div>
  );
};

export default OlderSeries;
