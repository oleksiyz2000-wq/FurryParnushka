import "./HeaderLink.css"

export default function HeaderLink({src, alt}) {
    return(
        <a href="/" className="nav-link">
            <img src={src} alt={alt} className="nav-icon" />
        </a>
    )
}