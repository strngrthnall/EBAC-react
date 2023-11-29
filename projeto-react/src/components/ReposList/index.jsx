/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"

import {
  list,
  listItem,
  itemName,
  itemLanguage,
  itemLink
} from './ReposList.module.css'

const ReposList = ({ nomeUsuario }) => {
  const [repos, setRepos] = useState([]);
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    setCarregando(true)
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then(res => res.json())
      .then(resJson => {
        setCarregando(false)
        setRepos(resJson)
    })
  }, [nomeUsuario])

  return (
    <div className="container">
      {carregando ? (
        <h1>Carregando...</h1>
      ) : 
        <ul className={ list }>
          {repos.slice(0, 6).map(({name, language, id, html_url}) => (
            <li key={id} className={ listItem }> 
              <div className={ itemName }>
                <b>Nome:</b> {name}
              </div>
              <div className={ itemLanguage }>
                <b>Linguagem:</b> {language}
              </div>
                <a
                  className={ itemLink }
                  target="_blank"
                  rel="noreferrer"
                  href={html_url}
                >
                  Visitar no Github
                </a>
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default ReposList