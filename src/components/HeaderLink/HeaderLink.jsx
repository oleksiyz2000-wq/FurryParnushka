import "./HeaderLink.css"

export default function HeaderLink({src}) {
    return(
        <a href="/" className="rick-link">
            <img src={src} alt="Rick" className="rick-img" />
        </a>
    )
}