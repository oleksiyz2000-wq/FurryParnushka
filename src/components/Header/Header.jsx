import Rick from '../../assets/rick.png'
import HeaderButton from '../HeaderButtons/HeaderButton.jsx'
import HeaderLink from '../HeaderLink/HeaderLink.jsx'

import './header.css'

export default function Header() {
  return (
    <header className="header">
      <HeaderLink src={Rick} />
      <ul className="ulstyle">
        <HeaderButton text="Docs" href="/" isPrimary={false} />
        <HeaderButton text="About" href="/" isPrimary={false} />
        <HeaderButton text="Support Us" href="/" isPrimary={true} />
      </ul>
    </header>
  )
}