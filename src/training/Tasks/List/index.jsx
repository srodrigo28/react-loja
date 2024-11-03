import "./List.css"
import { ChevronRightIcon, XIcon } from "lucide-react"
export function List(props){
    return(
        <div className="list-container">
            {
                props.listar.map( item => (
                    <div key={item.id} className={`card-container ${ item.isCompleted && "mark"  }` }>
                        <div className={`card-description  `} onClick={ () => props.onTaskClick(item.id) } >
                            <h3> {item.title} </h3>
                            <span>{ item.isCompleted ? "INICIOU" : "AGUARDANDO" } </span>
                            <div className="btn-group">
                                <button> 
                                    <ChevronRightIcon />
                                </button>
                            </div>
                        </div>
                        <button className="btn-delete" onClick={ () => props.onDeleteTaskClick(item.id)} > 
                            <XIcon />
                        </button>
                    </div>
                ))
            }
        </div>
    )
}