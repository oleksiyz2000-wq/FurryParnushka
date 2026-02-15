import { stats } from "../../constants";

import "./Footer.css";

import { isOnline } from "../../constants";

let statusColorClass = "";

export default function Footer() {

    if (isOnline === true) {
        statusColorClass = "bg-green";
    } else {
        statusColorClass = "bg-red";
    }

    return (
        <footer className="footer">
            <ul className="footer__stats">
                {/* <li className="footer__stats-item">
                    <a href="/">{stats[0].label}: {stats[0].value}</a>
                </li>
                <li className="footer__stats-item">
                    <a href="/">{stats[1].label}: {stats[1].value}</a>
                </li>
                <li className="footer__stats-item">
                    <a href="/">{stats[2].label}: {stats[2].value}</a>
                </li> */}
                {stats.map((item, index) => (
                    <li key={index} className="footer__stats-item">
                        <a href={item.url}>
                            {item.label}: {item.value}
                        </a>
                    </li>
                ))}
            </ul>
            <a className="server-status">
                <span className="server-status__text" >SERVER STATUS</span>
                <span className={"server-status__indicator " + statusColorClass}></span>
            </a>
        </footer>
    )
}