import { useState } from "react";
import { Link } from "react-router-dom";
import './app.css' 

export default function ToDo() {
   const [nome, setAtividade] = useState("");
   const [lista, setLista] = useState([]);
   const [inscricao, setIdentidade] = useState(1);
   const [poder, setPoder] = useState("");

   const salvar = (e) =>{
    e.preventDefault();
    setLista([...lista, { //... serve para adicionar segmentos 
        nome:nome, inscricao:inscricao, poder:poder
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
            <header>
            <h1>Inscrição do Torneio</h1>
            </header>
            <div class="container">
            <form onSubmit={salvar}>

                <p>Nome:</p><input type="text" onChange={(e)=>{setAtividade(e.target.value)}}></input>
                <br/>
                 <p>Poder:</p><input type="text" onChange={(a)=>{setPoder(a.target.value)}}></input>
             <button>Adicionar</button>

           </form>
            </div>
           
           <Link to="/">Lobby</Link>

           <br/>
           {lista.map((ativ)=>
             <div key={ativ.inscricao} class="card">
                <h2>Nome: {ativ.nome}</h2>
                <h2>Aniversário: {ativ.poder}</h2>

                <button class="botao" onClick={() => remover(ativ.inscricao)}>Desclassificar</button>
             </div>
           )}

           <footer>Boa Luta!</footer>
        </div>
    );
}