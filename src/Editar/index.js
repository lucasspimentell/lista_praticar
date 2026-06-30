import { useState } from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";
import './editar.css'
import Home from "../Home";


function Editar() {
const navigate = useNavigate()
const location = useLocation()

const tarefa = location.state?.tarefaAtual
const [input,setInpute] = useState(tarefa.nome)

console.log(tarefa)
    function confirmar(e) {

        e.preventDefault()

        let tarefasSalvas = JSON.parse(localStorage.getItem("@tarefa")) || []

        let atualizadas = tarefasSalvas.map((item)=>{
            if (item.id === tarefa.id) {
                
                return{...item,nome:input}
            }

            return item
        })

        localStorage.setItem("@tarefa",JSON.stringify(atualizadas))
        navigate('/')
    }

    return(
        <div>
            <div className="editarContainer">
                <h1>Editar tarefa</h1>
            <form onSubmit={confirmar}>
                <input type="text" value={input} onChange={(e)=>setInpute(e.target.value)}/>
                <div className="botoes">
                    <button type="submit" className="add">confirmar</button>
                <button className="cancelar"><Link to="/">Cancelar</Link></button>
                </div>
            </form>
            </div>
        </div>
    )
    
}

export default Editar;