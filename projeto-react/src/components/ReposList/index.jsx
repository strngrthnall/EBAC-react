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
  const [erro, setErro] = useState(false)

  useEffect(() => {
    console.log("Começou")
    setErro(false)
    setCarregando(true)
    fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
      .then(res => {
        if (res.status !== 200) {
          setErro(true)
        } else {
          return res.json();
        }
      })
      .then(resJson => {
        setTimeout(() => {
          setCarregando(false)
          setRepos(resJson)
        }, 1000)
      })
  }, [nomeUsuario])

  if (erro) {
    return (
      <div className="container">
        <h1>Que pena</h1>
        <h2>O usuário não foi encontrado</h2>
      </div>
    )
  } else {
    return (
    <div className="container">
      { carregando ? (
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
}

export default ReposList