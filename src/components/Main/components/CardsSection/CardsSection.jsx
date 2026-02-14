import "./CardsSection.css";

import CharacterCard from "./CharacterCard/CharacterCard.jsx";

import { сardsContent } from "/src/constants.js";

export default function CardsSection() {
    return(
        <section className="cards__section">
            <div className="cards__section__wrapper">
                {
                сardsContent.map((card, index) => (
                    <CharacterCard key={index} card={card}
                        img={card.img}
                        name={card.name}
                        status={card.status}
                        species={card.species}
                        LastKnownLocation={card.LastKnownLocation}
                        FirstSeenIn={card.FirstSeenIn}
                        links={card.links}
                    />
                ))}
            </div>
        </section>
    )
}