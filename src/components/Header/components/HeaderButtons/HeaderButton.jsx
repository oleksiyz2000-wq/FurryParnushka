import "./HeaderButton.css"

import { specialIconSrc } from '/src/constants.js'

export default function HeaderButton({text, href, isPrimary, children}) {
    let style = "header-btn";
    if (isPrimary) {
        style = "header-btn header-btn-primary";
    }

    return(
        <li>
            <a className="a-style" href={href}>{children}
                <span className={style}>{text}</span>
                {isPrimary ? <div className="special-div">
                    <img src={specialIconSrc} alt="Special Icon" className="special-svg" />
                </div> : null}
            </a>
        </li>
     )
}