import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './app.css' 
import ''

export default function ToDo() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
   const [nome, setNome] = useState("");
   const [lista, setLista] = useState((listaLocalStorage) || []);
   const [inscricao, setInscricao] = useState(listaLocalStorage [listaLocalStorage.length - 1]?.inscricao + 1 || 1);
   const [tema, setTema] = useState("");

   useEffect(() => { localStorage.setItem("Lista", JSON.stringify(lista)) },[lista]);

   const salvar = (e) =>{
    e.preventDefault();
    setLista([...lista, { //... serve para adicionar segmentos 
        nome:nome, inscricao:inscricao, tema:tema
    }]);
    setInscricao(inscricao + 1)
    alert("Inscrito no torneio!")
   };


    return (
        <div>
            <header>
            <h1>Inscrição do Torneio</h1>
            </header>
            <div class="container">
            <form onSubmit={salvar}>

                <p class="item">Nome:</p><input type="text" onChange={(e)=>{setNome(e.target.value)}}></input>
                <br/>
                 <p>Tema:</p><input type="text" onChange={(a)=>{setTema(a.target.value)}}></input>
             <button class="add">Adicionar</button>

           </form>
            </div>
           
           <br/>
           {lista.map((ativ)=>
             <div>
               <ul key={ativ.inscricao}>

                <Link to = {`/detalhe/${ativ.inscricao}`}>
                  <li>{ativ.nome}</li>
                </Link>

                <h2>Nome: {ativ.nome}</h2>

                <h2>Tema: {ativ.tema}</h2>
                </ul>
             </div>
           )}

           <footer>Boa Luta!   <p>Retornar ao<Link to="/">Lobby</Link></p></footer>
        </div>
    );
}