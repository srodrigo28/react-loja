import "./Loja4.css"
import React, { useRef, useState } from 'react';

export function Loja4() {
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]); //array

  const handleButtonClick = () => {
    if(fileInputRef){
      fileInputRef.current.click();
    }else{
      alert("falha")
    }
  };

  const handleFileChange = () => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files).map((file, index) => {
        const reader = new FileReader();
        const imageUrl = URL.createObjectURL(file);

        return {
          id: index, 
          name: file.name,
          url: imageUrl,
        };
      });
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  return (
    <div className="container">
      <button onClick={handleButtonClick} className="btn-inserir"> + </button>

      <input type="file" ref={fileInputRef} onChange={handleFileChange}
      accept="image/jpg, image/jpeg, image/png" multiple className="input-hidden" />

      <div className="box-container">
        {images.map((image) => (
          <div key={image.id} className="box-image">
            <img src={image.url} alt={image.name} className="image-uploaded"  />
          </div>
        ))}
      </div>
    </div>
  );
}