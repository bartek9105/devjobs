import './Header.scss'
import Logo from '../Logo'
import Switch from '../Switch/Switch'

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <Logo />
        <Switch />
      </div>
    </header>
  )
}

export default Header