import "./List.css"
import { useNavigate } from "react-router-dom"
import { ChevronRightIcon, XIcon } from "lucide-react"


export function List(props){
    const navigate = useNavigate();

    function onSeeDetailsClick(task){
       //  navigate(`/task?title=${task.title}&description=${task.description}`)
       const query = new URLSearchParams();
       query.set("title", task.title);
       query.set("description", task.description);
       query.set("isCompleted", task.isCompleted);
       query.set("image", task.image)
       navigate(`/task?${query.toString()}`);
    }

    return(
        <div className="list-container">
            {
                props.listar.map( task => (
                    <div key={task.id} className={`card-container ${ task.isCompleted && "mark"  }` }>
                        <div className={`card-description  `} onClick={ () => props.onTaskClick(task.id) } >
                            <h3> {task.title} </h3>
                            <span>{ task.isCompleted ? "INICIOU" : "AGUARDANDO" } </span>
                            <button onClick={ () => onSeeDetailsClick(task)} > 
                                <ChevronRightIcon /> 
                            </button>
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