import { DisheDetails } from ".."
import Styles from "./dishe.module.css"

export function Dishe() {
  return (
    <div className={Styles.dishe}>
      <div className={Styles.wrapper}>
        imagem
      </div>
      <div>
        <div>
          <h2>Nome do Produto</h2>
        </div>
        <div>
          <DisheDetails /> 
          <DisheDetails /> 
          <DisheDetails /> 
        </div>
      </div>
    </div>
  )
}