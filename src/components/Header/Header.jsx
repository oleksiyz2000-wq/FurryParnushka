// import Rick from '../../assets/rick.png'
// import HeaderButton from '../HeaderButtons/HeaderButton.jsx'
// import HeaderLink from '../HeaderLink/HeaderLink.jsx'

import Rick from '../../assets/rick.png';
import HeaderButton from './components/HeaderButtons/HeaderButton.jsx';
import HeaderLink from './components/HeaderLink/HeaderLink.jsx';

import './header.css'

import { ButtonsContent } from '/src/constants.js'

export default function Header() {
  return (
    <header className="header">
      <HeaderLink src={Rick} alt="Home" />
      <ul className="ulstyle">
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