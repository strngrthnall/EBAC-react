/* eslint-disable react/prop-types */
import styles from './Perfil.module.css'

const Perfil = ({ nomeUsuario}) => {
  let avatar = ''
  let nomeCapital = nomeUsuario.charAt(0).toUpperCase() + nomeUsuario.slice(1)

  if (nomeUsuario !== '') {
    avatar = `https://github.com/${nomeUsuario}.png`
    
  } else {
    nomeCapital = 'Informe um usuário acima'
  }

  return (
    <header className={ styles.header }>
      <img
        className={ styles.avatar }
        src={avatar} />
      <h1 className={ styles.name }>
        {nomeCapital}
      </h1>
    </header>
  )
}



export default Perfil