import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './app.css' 


export default function ToDo() {
  const listaLocalStorage = JSON.parse(localStorage.getItem("Lista"));
   const [nome, setNome] = useState("");
   const [lista, setLista] = useState((listaLocalStorage) || []);
   const [inscricao, setInscricao] = useState(listaLocalStorage [listaLocalStorage.length - 1]?.inscricao + 1 || 1);
   const [poder, setPoder] = useState("");

   useEffect(() => { localStorage.setItem("Lista", JSON.stringify(lista)) },[lista]);

   const salvar = (e) =>{
    e.preventDefault();
    setLista([...lista, { //... serve para adicionar segmentos 
        nome:nome, inscricao:inscricao, poder:poder
    }]);
    setInscricao(inscricao + 1)
    alert("Inscrito no torneio!")
   };

     const remover = (inscricao) =>{
      const auxLista = [];
      lista.map((list) => {
        if (list.inscricao !== inscricao) {
           auxLista.push(list);
      }
      });
      console.log(inscricao)
        setLista(auxLista);
     }


    return (
        <div>
            <header>
            <h1>Inscrição do Torneio</h1>
            </header>
            <div class="container">
            <form onSubmit={salvar}>

                <p>Nome:</p><input type="text" onChange={(e)=>{setNome(e.target.value)}}></input>
                <br/>
                 <p>Poder:</p><input type="text" onChange={(a)=>{setPoder(a.target.value)}}></input>
             <button>Adicionar</button>

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

                <h2>Poder: {ativ.poder}</h2>

                <button class="botao" onClick={() => remover(ativ.inscricao)}>Desclassificar</button>
                </ul>
             </div>
           )}

           <footer>Boa Luta!   <p>Retornar ao<Link to="/">Lobby</Link></p></footer>
        </div>
    );
}