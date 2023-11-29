// import { useState } from 'react'

import { useState } from 'react'
import Perfil from './components/Perfil'
// import Formulario from './components/Formulario'
import ReposList from './components/ReposList'

function App() {
  // const [formVisivel, setFormVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')

  return (
    <>
      <input type="text" onBlur={(e) => {
        setNomeUsuario(e.target.value)
      }} />
      

      {nomeUsuario.length > 4 && (
        <>
          <Perfil
            nomeUsuario={ nomeUsuario }
          />
          <ReposList
            nomeUsuario={ nomeUsuario }
          />
        </>
      )}
      
      {/* <button
        type="button"
        onClick={() => setFormVisivel(!formVisivel)}
      >
        {!formVisivel ? "Abre Formulario" : "Fecha Formulario"}
      </button>

      {formVisivel && <Formulario />} */}
      
    </>
  )
}

export default App