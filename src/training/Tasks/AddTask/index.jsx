import "./AddTask.css"
import { useState } from "react"

export function AddTask( props ) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const add = (e) => {
        e.preventDefault()

    }
    return(
        <div className="form-container">
            <form className="form-card">
                <h1>Adicionar</h1>
                <input 
                    type="text" 
                    value={title}
                    placeholder="nome"
                    onChange={ e => setTitle( e.target.value ) }
                />
                <input 
                    type="text" 
                    value={description}
                    placeholder="descrição"
                    onChange={ e => setDescription( e.target.value ) }
                />
                <button onClick={ (e) => {
                    e.preventDefault()
                    // verificar os inputs
                    if( title.trim(), description.trim() ) {
                        props.onAddTaskSubmit( title, description )
                        return false
                    }else{
                        alert("Preencher todos os campos")
                        return false
                    }
                }} 
                className=""> 
                    Adicionar
                </button>
            </form>
        </div>
    )
}