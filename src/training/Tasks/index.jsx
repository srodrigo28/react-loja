import { useState } from "react"
import { List } from "./List"

export function Tasks(){

    const [task, setTask] = useState([
        { id: 1, title: "Html5", isCompleted: true, status: "starting", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png"},
        { id: 2, title: "CSS3",  isCompleted: false, status: "starting",  image: "https://e7.pngegg.com/pngimages/239/228/png-clipart-html-css3-cascading-style-sheets-logo-markup-language-digital-agency-miscellaneous-blue.png" },
        { id: 3, title: "Javascript", isCompleted: true, status: "starting", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Ekr0y50dzU1IBDEKnrOqBaRf-LJf0XG_rRkqEl_i0YSuhaRZiXbmi0tizCor_cSqWCQ&usqp=CAU" },
    ])

    function onTaskClick(taskId) {
        
        const newTasks = task.map( task => {
            // PRECISO ATUALIZAR ESSA TAREFA
            
            if(task.id === taskId){
                return { ...task, isCompleted: !task.isCompleted }
            }

            return task
        });

        setTask(newTasks)
    }
    function onDeleteTaskClick(taskId){
        
        let confirme = window.confirm("Deseja realmente apagar ? ");

        if(confirme){
            const newTasks = task.filter( task => task.id !== taskId )
            setTask(newTasks)
        }
    }
    return(
        <div>
            <h1>Listas</h1>
            <List 
                listar={ task } 
                onTaskClick={ onTaskClick } 
                onDeleteTaskClick={ onDeleteTaskClick }
            />
        </div>
    )
}