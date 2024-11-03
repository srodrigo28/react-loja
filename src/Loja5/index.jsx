import React, { useRef, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { toast } from 'react-toastify';

// Configuração do Supabase
// Substitua pelo seu URL do projeto
const supabaseUrl = 'https://tqvkkwmqtyyzajeqnkwv.supabase.co'; 

// Substitua pela sua chave pública do Supabase
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzQ5OTY4NCwiZXhwIjoxOTU5MDc1Njg0fQ.J1C20mhPGJqoCbhY_oEACEDd7Rdv2gvTVR98j7OBF6Y'; 
const supabase = createClient(supabaseUrl, supabaseAnonKey);


export function Loja5() {
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);
  const [uploadStatus, setUploadStatus] = useState(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = () => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map((file, index) => {
        return {
          id: index,
          name: file.name,
          url: URL.createObjectURL(file),
          file,
        };
      });
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleUpload = async () => {
    setUploadStatus('Fazendo upload...');

    try {
      for (const image of images) {
        const { file, name } = image;

        // Faz o upload da imagem para o Supabase
        const { error } = await supabase.storage
          .from('backet1') // Nome do bucket no Supabase
          .upload(`products/${name}`, file, {
            cacheControl: '3600',
            upsert: false,
          });

        if (error) throw error;
      }

      setUploadStatus('Upload completo!');
      toast("Salvo com sucesso!")
    } catch (error) {
      console.error('Erro ao fazer upload:', error);
      setUploadStatus('Erro no upload');
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

      {/* Input de múltiplas imagens */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        multiple
        style={{ display: 'none' }}
      />

      {/* Botão de upload */}
      <button
        onClick={handleUpload}
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: '#fff',
          fontSize: '16px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          textAlign: 'center',
          marginTop: '1rem',
        }}
      >
        Fazer Upload
      </button>

      {/* Exibe todas as pré-visualizações das imagens */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
        {images.map((image) => (
          <div key={image.id} style={{ textAlign: 'center' }}>
            <img src={image.url} alt={image.name} style={{ width: '150px', height: 'auto', borderRadius: '5px' }} />
            <p style={{ fontSize: '14px', marginTop: '0.5rem' }}>{image.name}</p>
          </div>
        ))}
      </div>

      {/* Exibe o status do upload */}
      {uploadStatus && <p style={{ marginTop: '1rem' }}>{uploadStatus}</p>}
    </div>
  );
}