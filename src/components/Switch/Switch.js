import './Switch.scss'
import sunIcon from '../../assets/desktop/icon-sun.svg'
import moonIcon from '../../assets/desktop/icon-moon.svg'

const Switch = () => {
  return (
    <div className="switch-container">
      <img src={sunIcon} alt="sun" />
      <div>
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider round"></span>
        </label>
      </div>
      <img src={moonIcon} alt="moon" />
    </div>
  )
}

export default Switch