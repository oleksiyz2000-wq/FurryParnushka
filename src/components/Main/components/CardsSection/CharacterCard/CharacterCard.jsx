import './CharacterCard.css';

const statusMap = {
    Alive: 'bg-green-500',
    Dead: 'bg-red-500',
    unknown: 'bg-gray-400',
};

export default function CharacterCard( {img, name, status, species, LastKnownLocation, FirstSeenIn, links} ) {
    return(
        <>
        <article className="character-card">
            <div className="characterCard__ImgWrapper">
                <img src={img} className='characterCard__Img'></img>
            </div>
            <div className="characterCard__ContentWrapper">
                <div className="section section--top">
                    <a href={links.character}>
                        <h2 className='characterCard__Name'>{name}</h2>
                    </a>
                    <span className='status'>
                        <span className={`status__indicator ${statusMap[status]}`}></span>
                        {status} - {species}
                    </span>
                </div>
                <div className="section">
                    <span>Last known location:</span>
                    <a href={links.location}>{LastKnownLocation}</a>
                </div>
                <div className="section">
                    <span>First seen in:</span>
                    <a href={links.episode}>{FirstSeenIn}</a>
                </div>
            </div>
        </article>
        </>
    )
}