import './CharacterCard.css';

import { cardsContent } from '../../../../constants';

export default function CharacterCard() {
    return(
        <article className="character-card">
            <div className="characterCard__ImgWrapper">
                <img src={cardsContent[0].img} className='characterCard__Img'></img>
            </div>
            <div className="characterCard__ContentWrapper">
                <div className="section">
                    <h2>123</h2>
                </div>
                <div className="section"></div>
                <div className="section"></div>
            </div>
        </article>
    )
}