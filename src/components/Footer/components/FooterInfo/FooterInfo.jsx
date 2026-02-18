import "./FooterInfo.css"

export default function FooterInfo({ label, value, href }) {
    return (
        <li className="footer__stats-item">
            <a href={href}>
                {label}: {value}
            </a>
        </li>
    )
}