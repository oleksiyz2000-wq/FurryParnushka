const stats = [
    {label: 'CHARACTERS', value: 0},
    {label: 'LOCATIONS', value: 0},
    {label: 'EPISODES', value: 0},
];

import "./Footer.css";

export default function Footer() {
    return (
    <footer className="footer">
            <ul className="footer__stats">
                <li className="footer__stats-item">
                    <a href="/">{stats[0].label}: {stats[0].value}</a>
                </li>
                <li className="footer__stats-item">
                    <a href="/">{stats[1].label}: {stats[1].value}</a>
                </li>
                <li className="footer__stats-item">
                    <a href="/">{stats[2].label}: {stats[2].value}</a>
                </li>
            </ul>
            <a className="server-status">          
                <span className="server-status__text">SERVER STATUS</span>
                <span className="server-status__indicator"></span>
            </a>
    </footer>
    )
}