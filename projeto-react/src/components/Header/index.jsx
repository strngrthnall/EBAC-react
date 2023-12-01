const Header = ({enviaNome}) => {
  return (
    <input type="text" onBlur={enviaNome} />
  )
}

export default Header

