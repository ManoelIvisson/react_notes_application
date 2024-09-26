import { useState } from 'react'
import Nota from './components/Nota'
import './App.css'
import Indicador from './components/Indicador'

function App() {


  return (
    <>
      <h1>Minhas notas</h1>
      <div id="main">
        <div>
          <form action="" method="post">
            <input type="text" name="titulo" id="titulo" placeholder='Título' required />
            <textarea type="" name="conteudo" id="conteudo" placeholder='Conteúdo' />

            <div>
              <label htmlFor="prioridade">Nível de prioridade: </label>
              <select name="prioridade" id="prioridade">
                <option value="adiavel" selected>Adiável</option>
                <option value="importante">Importante</option>
                <option value="Urgente">Urgente</option>
              </select>
            </div>

            <input type="submit" id="botao-add" value="Adicionar Nota" />
          </form>
        </div>
        <div className='notas'>
          <Nota nivel={'adiavel'} />
          <Nota nivel={'importante'}/>
          <Nota nivel={'urgente'}/>
        </div>  
      </div>
    </>
  )
}

export default App
