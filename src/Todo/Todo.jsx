import { useState } from "react";
import { Link } from "react-router-dom";
import './app.css' 

export default function ToDo() {
   const [nome, setAtividade] = useState("");
   const [lista, setLista] = useState([]);
   const [inscricao, setIdentidade] = useState(1);

   const salvar = (e) =>{
    e.preventDefault();
    setLista([...lista, { //... serve para adicionar segmentos 
        nome:nome,inscricao:inscricao
    }]);
    setIdentidade(inscricao + 1)
    alert("Inscrito no torneio!")
   };

     const remover = (id) =>{
      const auxLista = [];
      lista.map((list) => {
        if (list.inscricao !== id) {
           auxLista.push(list);
      }
      });
      console.log(id)
        setLista(auxLista);
     }


    return (
        <div>
            <h1>Inscrição do Torneio</h1>
            
           <form onSubmit={salvar}>
                <input type="text" onChange={(e)=>{setAtividade(e.target.value)}}></input>
                <br/>
               
                {/* <input type="text" onChange={(a)=>{setAtividade(a.target.value)}}></input>  */}
             <button>Adicionar</button>
           </form>
           <Link to="/">Lobby</Link>

           <br/>
           {lista.map((ativ)=>
             <div key={ativ.inscricao}>
                <p>{ativ.nome}</p>
                <button onClick={() => remover(ativ.inscricao)}>Desclassificar</button>
             </div>
           )}
        </div>
    );
}