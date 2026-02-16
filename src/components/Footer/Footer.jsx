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
                {stats.map((item, index) => (
                    <li key={index} className="footer__stats-item">
                        <a href={item.href}>
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