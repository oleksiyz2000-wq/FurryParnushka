import Rick from '../../assets/rick.png'
import HeaderButton from '../HeaderButtons/HeaderButton.jsx'
import HeaderLink from '../HeaderLink/HeaderLink.jsx'

import './header.css'

import { ButtonsContent } from '../../constants.js'

export default function Header() {
  return (
    <header className="header">
      <HeaderLink src={Rick} alt="Home" />
      <ul className="ulstyle">
        {/* <HeaderButton text="Docs" href="/" isPrimary={false} />
        <HeaderButton text="About" href="/" isPrimary={false} />
        <HeaderButton text="Support Us" href="/" isPrimary={true} /> */}
        {ButtonsContent.map((button, index) => (
          <HeaderButton
            key={index}
            text={button.text}
            href={button.href}
            isPrimary={button.isPrimary}
          />
        ))}
      </ul>
    </header>
  )
}