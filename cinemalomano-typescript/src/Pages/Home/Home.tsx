import { Header } from "../../Components/Header/Header";
import { Home } from "../../Components/Home/Home";
import './style.css'

export const HomePage = () => {

  return (
    <div className="homePage">
      <Header />
      <div className="homePage--container">
      <h1 className="homePage--titleHome">LATEST RELEASES</h1>
      <Home />
      </div>
    </div>
  );
};
