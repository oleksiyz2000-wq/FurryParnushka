import "./HeaderButton.css"

export default function HeaderButton({text, href, isPrimary}) {
    let style = "header-btn";
    if (isPrimary) {
        style = "header-btn header-btn-primary";
    }
    return(
         <li>
            <a className={style} href={href}>{text}</a>
        </li>
    )
}