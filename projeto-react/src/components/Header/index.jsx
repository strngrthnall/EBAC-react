import {
  headerContainer,
  headerInput,
  searchButton,
  searchIcon
} from './Header.module.css'

// eslint-disable-next-line react/prop-types
const Header = ({ enviaEvento }) => {

  return (
    <div className={ headerContainer }>
      <input
        className={ headerInput }
        type="text"
        onBlur={enviaEvento}
        placeholder='Nome do usuario'
      />
      <button className={ searchButton }>
        <img
          className={ searchIcon }
          src="https://raw.githubusercontent.com/strngrthnall/EBAC-react/criacao-componente-header/projeto-react/src/assets/search-svgrepo-com.svg"
          alt=""
        />
      </button>
    </div>
  )
};

export default Header

