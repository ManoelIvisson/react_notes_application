import './Indicador.css'

function Indicador({nivel}) {
  return (
    <>
      <div className={`indicador ${nivel}`}>
        <div className="pontas"></div>
      </div>
    </>
  )
}
  
  export default Indicador