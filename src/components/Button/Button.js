import './Button.scss'

const Button = ({ btnText, changePage }) => {
  return (
    <button className="btn" onClick={changePage}>{btnText}</button>
  )
}

export default Button