
import { toast } from "react-toastify";
import "./Loja.css"
import { useRef, useState } from "react"

export function Loja() {
    
    const fileInputRef = useRef(null);
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [brand, setBrand] = useState("")
    const [gender, setGender] = useState("")
    const [qtd, setQtd] = useState("")
    const [category, setCategory] = useState("")

    const handleButtonClick = ()  => {
      fileInputRef.current.click(); // Dispara o clique no input referenciado
    };

    const handleRegister = () => {

        if(!name) {
            toast("Por favor colocar o nome do produto")
            return false
        }else if(!brand) {
            toast("Por favor colocar a marca do produto")
            return false
        }else if(!price) {
            toast("Por favor colocar o preço do produto")
            return false
        }
        toast("Cadastrado com sucesso")
    }

    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
          // toast(`Arquivo selecionado: ${file.name}`);
          toast(`Inserido com sucesso`);
        }
    };
        return (
            <div className="container">
                <div className="modal">
                    <main className="main-container">
                        <section className="product-image">
                        <button id="addImage" onClick={handleButtonClick} > + </button>
                        <input type="file" ref={fileInputRef} className='input99' onChange={handleFileChange} />
                            <img className="img-first" src="./image/Casaco.png" alt="não carregou first image" />
                            <div className="img-group">
                                <img src="./image/Casaco.png" alt="não carregou" />
                                <img src="./image/Casaco.png" alt="não carregou" />
                                <img src="./image/Casaco.png" alt="não carregou" />
                            </div>
                        </section>

                        <form className="product-form">

                            <h3>Inserir produto ?</h3>

                            <div className="btn-group"> 
                                <input type="text" placeholder="Nome do produto " value={name} onChange={ e => setName( e.target.value )} />
                                <select value={brand} onChange={ e => setBrand(e.target.value)}>
                                    <option value=""> Marca do Produto </option>
                                    <option value="calvin klein"> Calvin Klein </option>
                                    <option value="lacoste"> Lacoste </option>
                                    <option value="tommy hilfiger"> Tommy Hilfiger </option>
                                </select>
                            </div>

                            <input type="text" placeholder="Descrção do produto "  />
                            
                            <div className="btn-group"> 
                                <select value={gender} onChange={ e => setGender(e.target.value)}>
                                    <option value="">Feminino</option>
                                    <option value="">Masculino</option>
                                </select>

                                <input type="text" placeholder=" Qtd: 01" value={qtd} onChange={ e => setQtd(e.target.value)} />
                            </div>

                            <div className="btn-group"> 
                                <select value={category} onChange={ e => setCategory(e.target.value)}>
                                    <option value="">Selecionar categoria</option>
                                    <option value="sobretudo">Sobretudo</option>
                                    <option value="vestido">Vestido</option>
                                    <option value="camisa">Camisa</option>
                                    <option value="calça">Calça</option>
                                </select>

                                <select>
                                    <option value="">Importado</option>
                                    <option value="">Nascional</option>
                                </select>
                            </div>

                            <div className="btn-group"> 
                                <input type="text" placeholder="R$ 700,00" value={price} onChange={ e => setPrice(e.target.value)} />

                                <div className="div-input-check">
                                    <input className="check-input" type="checkbox"  />
                                    <p>Tornar disponivel ?</p>
                                </div>
                            </div>
                            
                            <button id="cadastrar" type="button" onClick={handleRegister}>Cadastrar</button>
                        </form>
                    </main>

                </div>
            </div>
        )
}