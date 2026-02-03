import "./HeaderButton.css"

export default function HeaderButton({text, href, isPrimary}) {
    let style = "btn";
    if (isPrimary) {
        style = "btn btn3";
    }
    return(
         <li>
            <a className={style} href={href}>{text}</a>
        </li>
    )
}