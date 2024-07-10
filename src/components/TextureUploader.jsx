import React, { useState } from 'react';
import { useCustomization } from '../contexts/Customization';

const TextureUploader = () => {
    const { setUploadedTextureURL } = useCustomization();
    const [selectedTexture, setSelectedTexture] = useState(null);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setUploadedTextureURL(e.target.result);
            };
            reader.readAsDataURL(file);
            setSelectedTexture(file);
        }
    };

    return (
        <div className='upload-image'>
            <input type="file" accept="image/*" onChange={handleFileUpload} />
            {selectedTexture && <p>Selected Texture: {selectedTexture.name}</p>}
        </div>
    );
};

export default TextureUploader;
