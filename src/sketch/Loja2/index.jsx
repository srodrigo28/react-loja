import React, { useRef, useState } from 'react';

export function Loja2() {
  const fileInputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [fileName, setFileName] = useState(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      
      // Cria uma URL de pré-visualização com o FileReader
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result); // Define o resultado como URL de pré-visualização
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2rem' }}>
      <button
        onClick={handleButtonClick}
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: '#fff',
          fontSize: '16px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          textAlign: 'center',
          marginBottom: '1rem',
        }}
      >
        Selecionar Imagem
      </button>

      {/* Input type file oculto */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*" // Restringe a entrada a arquivos de imagem
        style={{ display: 'none' }}
      />

      {/* Exibe o nome do arquivo */}
      {fileName && <p>Arquivo selecionado: {fileName}</p>}

      {/* Exibe a pré-visualização da imagem */}
      {previewUrl && <img src={previewUrl} alt="Pré-visualização" style={{ width: '300px', marginTop: '1rem' }} />}
    </div>
  );
}