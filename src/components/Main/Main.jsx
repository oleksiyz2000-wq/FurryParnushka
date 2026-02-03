import HeroSection from "./HeroSection/HeroSection";
import CardsSection from "./CardsSection/CardsSection";

import "./Main.css";

export default function Main() {
    return(
        <main className="main">
            <HeroSection></HeroSection>
            <CardsSection></CardsSection>
        </main>
    )
}