import React, { useRef, useState } from 'react';

export function Loja3() {
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = () => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map((file, index) => {
        const reader = new FileReader();
        const imageUrl = URL.createObjectURL(file);

        return {
          id: index, // Identificador único para cada imagem
          name: file.name,
          url: imageUrl, // URL de visualização rápida
        };
      });

      // Atualiza o estado com as novas imagens
      setImages((prevImages) => [...prevImages, ...newImages]);
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
        Selecionar Imagens
      </button>

      {/* Input file para múltiplas imagens */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        multiple // Permite seleção múltipla
        style={{ display: 'none' }}
      />

      {/* Exibe todas as pré-visualizações das imagens */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
        {images.map((image) => (
          <div key={image.id} style={{ textAlign: 'center' }}>
            <img src={image.url} alt={image.name} style={{ width: '150px', height: 'auto', borderRadius: '5px' }} />
            <p style={{ fontSize: '14px', marginTop: '0.5rem' }}>{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
