import "./Details.css"
import { useSearchParams, useNavigate } from "react-router-dom"

export function Details(){
    const nav = useNavigate()
    const [ searchParams ] = useSearchParams()
    
    const title = searchParams.get("title")
    const description = searchParams.get("description")
    const isCompleted = searchParams.get("isCompleted")
    const image = searchParams.get("image")

    return(
        <div className="details-container">
            <button id="btnVoltar" onClick={ () => nav("/")}>Voltar</button>
            <img src="https://starwalk.space/gallery/images/what-is-space/1920x1080.jpg" alt="não carregou a imagem" />
            <div className="details-item">
                <h1>Detalhes do produto</h1>
                
                <div className="card">
                    <img width={100} src={image} alt="" />
                    <h3> {title} </h3>
                    <p> {description} </p>
                    <p> {isCompleted} </p>
                </div>
                
            </div>
        </div>
    )
}