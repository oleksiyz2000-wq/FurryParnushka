import './CharacterCard.css';

export default function CharacterCard( {img, name, status, species, LastKnownLocation, FirstSeenIn} ) {
    return(
        <>
        <article className="character-card">
            <div className="characterCard__ImgWrapper">
                <img src={img} className='characterCard__Img'></img>
            </div>
            <div className="characterCard__ContentWrapper">
                <div className="section section--top">
                    <a>
                        <h2 className='characterCard__Name'>{name}</h2>
                    </a>
                    <span className='status'>
                        <span className='status__indicator'></span>
                        {status} - {species}
                    </span>
                </div>
                <div className="section">
                    <span>Last known location:</span>
                    <a>{LastKnownLocation}</a>
                </div>
                <div className="section">
                    <span>First seen in:</span>
                    <a>{FirstSeenIn}</a>
                </div>
            </div>
        </article>
        </>
    )
}