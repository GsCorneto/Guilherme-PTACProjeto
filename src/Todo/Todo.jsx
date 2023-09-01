import { useState } from "react";
import { Link } from "react-router-dom";

export default function ToDo() {
   const [atividade, setAtividade] = useState("");
   const [lista, setLista] = useState([]);
   const [identidade, setIdentidade] = useState(1);

   const salvar = (e) =>{
    e.preventDefault();
    setLista([...lista, { //... serve para adicionar segmentos 
        atividade:atividade, identidade:identidade
    }]);
    setIdentidade(identidade + 1)
    alert("armazenado!")
   };

     const remover = (id) =>{
      const auxLista = [];
      lista.map((lista) => {
        if (lista.id !== id) {
           auxLista.push(lista);
      }
      });
        setLista(auxLista);
     }


    return (
        <div>
            <h1>Lista de Atividades</h1>
            <Link to="/">home</Link>
           <form onSubmit={salvar}>
                <input type="text" onChange={(e)=>{setAtividade(e.target.value)}}></input>
             <button>Adicionar</button>
           </form>

           {lista.map((ativ)=>
             <div key={ativ.identidade}>
                <p>{ativ.atividade}</p>
                <button onClick={() => remover(ativ.id)}>Delete</button>
             </div>
           )}
        </div>
    );
}