import { Surprise } from "../../Components/Surprise/Surprise";
import { HomePage } from "../Home/HomePage";
import './style.css'
export const SurprisePages = () => {
    return(
        <main>
            {/* <HomePage /> */}
            <section className="surprise--section">
                <h1>RANDOM SURPRISE</h1>
                <h2>What to see this weekend?</h2>
            </section>
            <Surprise />
        </main>
    )
}