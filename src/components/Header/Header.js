import './Header.scss'
import Logo from '../Logo'
import Switch from '../Switch/Switch'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <Link to="/">
          <Logo />
        </Link>
        <Switch />
      </div>
    </header>
  )
}

export default Header