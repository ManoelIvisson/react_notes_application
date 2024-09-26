import Indicador from "./Indicador"
import {TbCircleLetterX} from 'react-icons/tb'
import './Nota.css'

function Nota({nivel}) {
  return (
    <>
      <div className="nota">
        <div className="topo">
          <Indicador nivel={nivel} />
          <TbCircleLetterX className="botao-del" />
        </div>
        <div className="conteudo">
          <h1>Titulo</h1>
          <p>Data: 24/09/2024</p>
          <p>Almoçar</p>
        </div>
      </div>
    </>
  )
}

export default Nota