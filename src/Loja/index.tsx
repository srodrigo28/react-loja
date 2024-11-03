
import "./Loja.css"
import { useRef } from "react"

export function Loja() {
    
    // const fileInputRef = useRef(null); // Usando useRef para referenciar o input
       const fileInputRef = useRef(null);

    // Função que dispara o clique no input file
    const handleButtonClick = (): void => {
      fileInputRef.current.click(); // Dispara o clique no input referenciado
    };

    // Função que lida com a seleção do arquivo
    const handleFileChange = (event) => {
        const file = event.target.files?.[0];
        if (file) {
          alert(`Arquivo selecionado: ${file.name}`);
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
                            <button id="fechar" onClick={() => setOpen(!isOpen)} > X </button>

                            <h3>Inserir produto ?</h3>

                            <div className="btn-group"> 
                                <input type="text" placeholder="Nome do produto " />
                                <select name="" id="">
                                    <option value="">Calvin Klein</option>
                                </select>
                            </div>

                            <input type="text" placeholder="Descrção do produto "  />
                            
                            <div className="btn-group"> 
                                <select name="" id="">
                                    <option value="">Feminino</option>
                                    <option value="">Masculino</option>
                                </select>

                                <input type="text" placeholder=" Qtd: 01" />
                            </div>

                            <div className="btn-group"> 
                                <select name="" id="">
                                    <option value="">Sobretudo</option>
                                    <option value="">Vestido</option>
                                    <option value="">Camisa</option>
                                    <option value="">Calça</option>
                                </select>

                                <select name="" id="">
                                    <option value="">Importado</option>
                                    <option value="">Nascional</option>
                                </select>
                            </div>

                            <div className="btn-group"> 
                                <input type="text" placeholder="R$ 700,00" />

                                <div className="div-input-check">
                                    <input className="check-input" type="checkbox" name="" id="" />
                                    <p>Tornar disponivel ?</p>
                                </div>
                            </div>
                            
                            <button id="cadastrar">Cadastrar</button>
                        </form>
                    </main>

                </div>
            </div>
        )
}