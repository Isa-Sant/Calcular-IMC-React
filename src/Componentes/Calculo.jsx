import React, { useState } from 'react'

const Calculo = () => {

  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState('')

  function calcularIMC() {
    if (!peso || !altura) {
      setResultado('Preencha todos os campos')
      return
    }

    const imc = peso / (altura * altura)

    let classificacao = ''

    if (imc < 18.5) classificacao = 'Abaixo do peso'
    else if (imc < 25) classificacao = 'Peso normal'
    else if (imc < 30) classificacao = 'Sobrepeso'
    else classificacao = 'Obesidade'

    setResultado(`IMC: ${imc.toFixed(2)} - ${classificacao}`)
  }

  return (
    <div className="container">
      <h1>Calculadora de IMC</h1>

      <div className="form">
        <label>Peso (kg)</label>
        <input
          type="number"
          placeholder="Ex: 75"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />

        <label>Altura (m)</label>
        <input
          type="number"
          step="0.01"
          placeholder="Ex: 1.70"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />

        <button onClick={calcularIMC}>
          Calcular o IMC
        </button>
      </div>

      <div className="resultado">
        {resultado}
      </div>
    </div>
  )
}

export default Calculo