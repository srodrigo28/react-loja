import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import './Loja6.css';

// Configura o cliente Supabase
const supabaseUrl = 'https://tqvkkwmqtyyzajeqnkwv.supabase.co'; 

// Substitua pela sua chave pública do Supabase
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQ5OTY4NCwiZXhwIjoxOTU5MDc1Njg0fQ.J1C20mhPGJqoCbhY_oEACEDd7Rdv2gvTVR98j7OBF6Y'; 
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export function Loja6() {
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [imagens, setImagens] = useState([]);
  const [produtos, setProdutos] = useState([]);

  // Função para carregar produtos ao iniciar
  useEffect(() => {
    carregarProdutos();
  }, []);

  // Função para carregar a lista de produtos
  const carregarProdutos = async () => {
    const { data: produtos, error } = await supabase
      .from('produtos')
      .select('*');
    
    if (error) {
      console.error('Erro ao carregar produtos:', error);
    } else {
      setProdutos(produtos);
    }
  };

  // Função para lidar com o cadastro do produto
  const handleCadastro = async (e) => {
    e.preventDefault();

    const imagemUrls = [];
    for (let imagem of imagens) {
      const { data, error } = await supabase
        .storage
        .from('backet1')
        .upload(`products/${imagem.name}`, imagem);
      
      if (error) {
        console.error('Erro ao fazer upload da imagem:', error);
        return;
      }

      const imagemUrl = `${supabaseUrl}/storage/v1/object/public/backet1/${data.path}`;
      imagemUrls.push(imagemUrl);
    }

    const { error: insertError } = await supabase
      .from('produtos')
      .insert([
        { nome, preco: parseFloat(preco), imagens: imagemUrls }
      ]);

    if (insertError) {
      console.error('Erro ao inserir produto:', insertError);
    } else {
      alert('Produto cadastrado com sucesso!');
      setNome('');
      setPreco('');
      setImagens([]);
      carregarProdutos();  // Atualiza a listagem
    }
  };

  return (
    <div className="App">
      <h1>Cadastro de Produto</h1>

      <form onSubmit={handleCadastro}>
        <label> Nome:
          <input type="text" value={nome}
            onChange={(e) => setNome(e.target.value)} required
          />
        </label>
        <br />

        <label>
          Preço:
          <input type="number" step="0.01" value={preco}
            onChange={(e) => setPreco(e.target.value)} required
          />
        </label>
        <br />

        <label> Imagens:
          <input type="file" multiple accept='image/*'
            onChange={(e) => setImagens(Array.from(e.target.files))}
          />
        </label>
        <br />
        <button type="submit">Cadastrar</button>
      </form>

      <h2>Listagem de Produtos</h2>

      <div className="produtos-lista">
          {produtos.map((produto) => (
            <div key={produto.id} className="produto">
              <h3>{produto.nome}</h3>
              <p>Preço: R$ {produto.preco.toFixed(2)} </p>
              <div className="imagens-container">
                  { produto.imagens && produto.imagens.map( (url, index) => (
                    <img key={index} src={url} alt={`Imagem de ${produto.nome}`} width="100" />
                    ))
                  }
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}