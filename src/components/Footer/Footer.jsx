import "./Footer.css";

import { isOnline } from "../../constants";
import FooterInfo from "./components/FooterInfo/FooterInfo.jsx";
import { stats } from "/src/constants";

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
                {stats.map((stats, index) => (
                    <FooterInfo
                        key={index}
                        label={stats.label}
                        value={stats.value}
                        href={stats.href}
                    />
                ))}
            </ul>
            <a className="server-status">
                <span className="server-status__text" >SERVER STATUS</span>
                <span className={"server-status__indicator " + statusColorClass}></span>
            </a>
        </footer>
    )
}