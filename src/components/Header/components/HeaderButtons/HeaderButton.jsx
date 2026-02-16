import "./HeaderButton.css"

export default function HeaderButton({text, href, isPrimary, children}) {
    let style = "header-btn";
    if (isPrimary) {
        style = "header-btn header-btn-primary";
    }
    // return(
    //      <li>
    //         <a className={style} href={href}>{text}{children}</a>
    //     </li>
    // )

    return(
        <li>
            <a className="a-style" href={href}>{children}
                <span className={style}>{text}</span>
            </a>
        </li>
     )
}