import { useParams } from "react-router-dom";
import Card from "../Componentes/Card"
export default function Detalhe(){

    const {id} = useParams();
    const lista = JSON.parse(localStorage.getItem("Lista"))
    const atividade = lista.filter((objeto) => {
         if(ativ.inscricao == inscricao) {
               return ativ;
         }
         return null
    })
  
    return(
      <Card nome={nome[0]}></Card>
    )
}