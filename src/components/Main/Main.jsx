import HeroSection from "./components/HeroSection/HeroSection.jsx";
import CardsSection from "./components/CardsSection/CardsSection.jsx";

import "./Main.css";

export default function Main() {
    return(
        <main className="main">
            <HeroSection></HeroSection>
            <CardsSection></CardsSection>
        </main>
    )
}