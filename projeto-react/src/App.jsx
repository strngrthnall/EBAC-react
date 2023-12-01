import { useState } from 'react'

import Perfil from './components/Perfil'
import ReposList from './components/ReposList'
import Header from './components/Header'

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('')

  const capturaNome = (e) => {
    setNomeUsuario(e.target.value)
  }

  return (
    <>
      <Header enviaEvento={capturaNome} />

      {nomeUsuario.length > 4 ? (
        <>
          <Perfil
            nomeUsuario={ nomeUsuario }
          />
          <ReposList
            nomeUsuario={ nomeUsuario }
          />
        </>
      ) : <Perfil
            nomeUsuario={ nomeUsuario }
      />
      }

    </>
  )
}

export default App