import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import './home.css'

function Home() {
   

    const[input,setInput] = useState("")
    const [tarefa,setTarefa] =useState(JSON.parse(localStorage.getItem("@tarefa"))||[])
    const [id,setId] = useState(Date.now())
    const[concluida,setConcluida] = useState(false)

    useEffect(()=>{
        localStorage.setItem("@tarefa",JSON.stringify(tarefa))
        
    },[tarefa])


    function adicionar(e) {
        e.preventDefault()

        if (input === "") {
            return
        }

        const tarefaObj = {
            id:id,
            nome:input,
            concluida:concluida
        }

        setTarefa([...tarefa,tarefaObj])
        setId(Date.now())
        setInput("")
        
    }


    function concluir(item) {

       let tarefaVerificada = tarefa.map((tarefas)=>{
        if (tarefas.id===item) {
            return {...tarefas, concluida: !tarefas.concluida }
        }

        return tarefas
       }) 

       setTarefa(tarefaVerificada)
      
        
    }

    function apagar(item) {
        let filtro = tarefa.filter(tarefaFiltro=> tarefaFiltro.id !== item)

        setTarefa(filtro)
        
    }

console.log(input)
console.log(tarefa)

    return(
        <div>
            <div className="lista-tarefa">
                <h1>Minha lista</h1>
            <div className="formContainer">
                <form onSubmit={adicionar}>
                    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
                    <button type="submit">Adicionar</button>
                </form>
            </div>

            <div className="folha">

             {tarefa.length === 0 ? <img className="vazio" src="/vazio.png" alt="lista vazia" /> : null}

            {tarefa.map((item)=>{
                return(
                    
                    <div className="itemContainer" key={item.id}>

                        <p className={item.concluida ? "concluida":""}>{item.nome}</p>

                        <input type="checkbox" checked={item.concluida} id="verificado" onChange={()=>concluir(item.id)}/>

                        <button className="editar"><Link to='/Editar' state={{tarefaAtual:item}}><img src="/editar.png" alt="icone editar" /></Link></button>

                        <button onClick={()=>apagar(item.id)} className="apagar"><img src="/excluir.png" alt="icone excluir" /></button>
                    </div>
                )
            })}
            </div>
            </div>

            
        </div>
    )
    
}

export default Home;