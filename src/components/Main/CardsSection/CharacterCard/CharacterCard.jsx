import './CharacterCard.css';

import { cardsContent } from '../../../../constants';

export default function CharacterCard() {
    return(
        <article className="character-card">
            <div className="characterCard__ImgWrapper">
                <img src={cardsContent[0].img} className='characterCard__Img'></img>
            </div>
            <div className="characterCard__ContentWrapper">
                <div className="section section--top">
                    <a>
                        <h2 className='characterCard__Name'>{cardsContent[0].name}</h2>
                    </a>
                    <span className='status'>
                        <span className='status__indicator'></span>
                        {cardsContent[0].status} - {cardsContent[0].species}
                    </span>
                </div>
                <div className="section">
                    <span>Last known location:</span>
                    <a>{cardsContent[0].LastKnownLocation}</a>
                </div>
                <div className="section">
                    <span>First seen in:</span>
                    <a>{cardsContent[0].FirstSeenIn}</a>
                </div>
            </div>
        </article>
    )
}