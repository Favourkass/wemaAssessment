// import React, { useState } from 'react';
import uploadButton from "../../assets/icons/Button.png";

import React, { useState } from 'react';
const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];

    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
      <label htmlFor="imageInput">
        <img src={uploadButton} alt="" />
      </label>
      <input
        type="file"
        id="imageInput"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
      {selectedImage && (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center',flexDirection:'column'}}>
          <p>Selected Image: {selectedImage.name}</p>
          
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
