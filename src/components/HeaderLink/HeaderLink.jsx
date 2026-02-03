import "./HeaderLink.css"

export default function HeaderLink({src}) {
    return(
        <a href="/" className="nav-link">
            <img src={src} alt="Home" className="nav-icon" />
        </a>
    )
}