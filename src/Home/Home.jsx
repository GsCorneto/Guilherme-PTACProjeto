import { useState } from "react";
import { Link } from "react-router-dom";
import './home.css' 
export default function Home() {
    
    return (
        <div>
           <header> 
            <h1>Torneio Mundial</h1>
           </header>

           <nav>
       <ul>
          <li>Torneios as 16h</li>
          <li>Sorvete de creme à 20 passos da entrada</li>
          <li>Carnes á direita da saída</li>
          <li>NÃO TEMOS SEGURO CONTRA MORTES ;)</li>      
      </ul>
   </nav>

              <main>
                <Link to="/todo">Adicionar campeão</Link>
              </main>

       <footer></footer>
        </div>

    );
}