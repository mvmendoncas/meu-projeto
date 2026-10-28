import {projetos} from "../dados.js"
import Cartao from "../componentes/Cartao.js"

export default function Projetos(){
    return(
        <div> 
            {projetos.map((p) => (

            <Cartao key={p.id}

            titulo={p.titulo}

            descricao={p.descricao} 

            tecnologias = {p.tecnologias}
            />

            ))}
        </div>
    );
}