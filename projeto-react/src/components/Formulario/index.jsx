import { useState, useEffect } from "react"

/* eslint-disable react/prop-types */
const Formulario = () => {
  let [corte, setCorte] = useState(4)
  let [notaA, setNotaA] = useState(0)
  let [notaB, setNotaB] = useState(0)
  let [notaC, setNotaC] = useState(0)
  let [notaD, setNotaD] = useState(0)

  useEffect(() => {
    console.log("iniciou")

    return () => {
      console.log("Finalizou")
    }

  }, [])



  const notas = [notaA, notaB, notaC, notaD]

  const defineAprovacao = () => {

    const soma = notas.reduce((prev, curr) => {
      return parseInt(prev) + parseInt(curr)
    })

    const media = soma / notas.length
    
    if (media >= parseInt(corte)) {
      return <div>
        <br />
        <span>Média: { media.toFixed(1) }</span>
        <p>O aluno foi aprovado</p>
      </div>
    } else {
      return <div>
        <br />
        <span>Média: { media.toFixed(1) }</span>
        <p>O aluno foi reprovado</p>
      </div>
    }
  }
  
  return (
    <form>
      <ul>
        {[1, 2, 3, 4, 5].map(item => (
          <li key={ item }>{item}</li>
        ))}
      </ul>
      <div>
        <input
        type="number"
        placeholder="4"
        max='8'
        min='4'
        onChange={({ target }) => setCorte(target.value)}
      />
      </div>
      <input
        type="number"
        placeholder="Nota Matéria A"
        max='10'
        min='0'
        onChange={({ target }) => setNotaA(target.value)}
      />
      <input
        type="number"
        placeholder="Nota Matéria B"
        max='10'
        min='0'
        onChange={({ target }) => setNotaB(target.value)}
      />
      <input
        type="number"
        placeholder="Nota Matéria C"
        max='10'
        min='0'
        onChange={({ target }) => setNotaC(target.value)}
      />
      <input
        type="number"
        placeholder="Nota Matéria D"
        max='10'
        min='0'
        onChange={({ target }) => setNotaD(target.value)}
      />
      { defineAprovacao() }
    </form>
  )
}

export default Formulario