import "./CardsSection.css";

import CharacterCard from "./CharacterCard/CharacterCard";

export default function CardsSection() {
    return(
        <section className="cards__section">
            <div>
                <CharacterCard></CharacterCard>
            </div>
        </section>
    )
}