import { Header } from "../../Components/Header/Header";
import { Surprise } from "../../Components/Surprise/Surprise";
import "./style.css";

export const SurprisePages = () => {
  return (
    <main className="container">
      <Header />
      <section className="surprise--section">
        <h1>RANDOM SURPRISE</h1>
        <h2>What to see this weekend?</h2>
      </section>
      <Surprise />
    </main>
  );
};
