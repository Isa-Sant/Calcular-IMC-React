import { useState } from 'react'
import './App.css'
import Calculo from './Componentes/Calculo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
      <h1></h1>
      <Calculo/>    

        
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
