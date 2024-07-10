import React, { useState, useEffect } from 'react';
import { SketchPicker } from 'react-color'; 
import { useCustomization } from "../contexts/Customization";
import TextureUploader from "./TextureUploader.jsx"; 

const Configurator = () => {
  const { 
    depankananColor, setDepankananColor, 
    depankiriColor, setDepankiriColor,
    kancingColor, setKancingColor,
    tangankananColor, setTangankananColor,
    tangankiriColor, setTangankiriColor,
    kerahColor, setKerahColor,
    bahuColor, setBahuColor,
    belakangColor, setBelakangColor,
    depanColor, setDepanColor,
    bawahColor, setBawahColor,
    hiasanColor, setHiasanColor,
    atasColor, setAtasColor,
    kakikananColor, setKakikananColor,
    kakikiriColor, setKakikiriColor,
  } = useCustomization();

  const [selectedObject, setSelectedObject] = useState('depankanan'); 
  const [colorPickerVisible, setColorPickerVisible] = useState(true);
  const [textureVisible, setTextureVisible] = useState(true); 

  const handleColorChange = (color) => {
    switch (selectedObject) {
      case 'depankanan':
        setDepankananColor({ ...depankananColor, color: color.hex });
        break;
      case 'depankiri':
        setDepankiriColor({ ...depankiriColor, color: color.hex });
        break;
      case 'kancing':
        setKancingColor({ ...kancingColor, color: color.hex });
        break;
      case 'tangankanan':
        setTangankananColor({ ...tangankananColor, color: color.hex });
        break;
      case 'tangankiri':
        setTangankiriColor({ ...tangankiriColor, color: color.hex });
        break;
      case 'kerah':
        setKerahColor({ ...kerahColor, color: color.hex });
        break;
      case 'bahu':
        setBahuColor({ ...bahuColor, color: color.hex });
        break;
      case 'belakang':
        setBelakangColor({ ...belakangColor, color: color.hex });
        break;
      case 'depan':
        setDepanColor({ ...depanColor, color: color.hex });
          break;
      case 'bawah':
          setBawahColor({ ...bawahColor, color: color.hex });
            break;
      case 'hiasan':
          setHiasanColor({ ...hiasanColor, color: color.hex });
              break;
      case 'atas':
        setAtasColor({ ...atasColor, color: color.hex });
            break;
      case 'kakikanan':
        setKakikananColor({ ...kakikananColor, color: color.hex });
            break;
      case 'kakikiri':
        setKakikiriColor({ ...kakikiriColor, color: color.hex });
            break;
      default:
        break;
    }
  };

  const handleObjectSelect = (object) => {
    setSelectedObject(object);
    setTextureVisible(true);
  };
  

  return (
    <div className="configurator">
      <div className="configurator_section">
        <div className="configurator_section_title">Select Object</div>
        <div className="configurator_section_values">

          <button className="depankanan" onClick={() => handleObjectSelect('depankanan')}>
            <img src="public/images/depankanan.png" alt=" Button" width="35" height="35" />
          </button>

          <button className="depankiri" onClick={() => handleObjectSelect('depankiri')}>
            <img src="public/images/depankiri.png" alt=" Button" width="35" height="35" />
          </button>
          
          <button className="kancing" onClick={() => handleObjectSelect('kancing')}>
            <img src="public/images/kancing.png" alt=" Button" width="35" height="35" />
          </button>

          <button className="tangankanan" onClick={() => handleObjectSelect('tangankanan')}>
            <img src="public/images/tangankanan.png" alt=" Button" width="35" height="35" />
          </button>

          <button className="tangankiri" onClick={() => handleObjectSelect('tangankiri')}>
            <img src="public/images/tangankiri.png" alt=" Button" width="35" height="35" />
          </button>

          <button className="kerah" onClick={() => handleObjectSelect('kerah')}>
            <img src="public/images/kerah.png" alt=" Button" width="35" height="35" />
          </button>
          
          <button className="bahu" onClick={() => handleObjectSelect('bahu')}>
            <img src="public/images/bahu.png" alt=" Button" width="35" height="35" />
          </button>

          <button className="belakang" onClick={() => handleObjectSelect('belakang')}>
            <img src="public/images/belakang.png" alt=" Button" width="35" height="35" />
          </button>

          <button className="depan" onClick={() => handleObjectSelect('depan')}>
            <img src="public/images/depan.png" alt=" Button" width="35" height="35" />
          </button>

          <button className="bawahdress" onClick={() => handleObjectSelect('bawah')}>
            <img src="public/images/bawahdress.png" alt=" Button" width="35" height="35" />
          </button>

          <button className="hiasan" onClick={() => handleObjectSelect('hiasan')}>
            <img src="public/images/hiasan.png" alt=" Button" width="35" height="35" />
          </button>

          <button className="atasdress" onClick={() => handleObjectSelect('atas')}>
            <img src="public/images/atasdress.png" alt=" Button" width="35" height="35" />
          </button>

          <button className="atascelana" onClick={() => handleObjectSelect('atas')}>
            <img src="public/images/atascelana.png" alt=" Button" width="17" height="35" />
          </button>

          <button className="atascelana1" onClick={() => handleObjectSelect('kakikanan')}>
            <img src="public/images/kakikanan.png" alt="Button" width="17" height="35" />
          </button>

          <button className="atascelana2" onClick={() => handleObjectSelect('kakikiri')}>
            <img src="public/images/kakikiri.png" alt=" Button" width="17" height="35" />
          </button>

          <button className="atasrok" onClick={() => handleObjectSelect('atas')}>
            <img src="public/images/atasrok.png" alt=" Button" width="35" height="35" />
          </button>

          <button className="bawahrok" onClick={() => handleObjectSelect('atas')}>
            <img src="public/images/atasrok.png" alt=" Button" width="35" height="35" />
          </button>

        </div>
      </div>
      {colorPickerVisible && (
        <div className="configurator_section">
          <div className="configurator_section_warna">{selectedObject === 'depankanan' ? '' : ''}</div>
          <div className="configurator_section_values">
            <SketchPicker className="color-picker-container"
              color={
                selectedObject === 'depankanan' ? depankananColor.color :
                selectedObject === 'depankiri' ? depankiriColor.color :
                selectedObject === 'tangankanan' ? tangankananColor.color :
                selectedObject === 'tangankiri' ? tangankiriColor.color :
                selectedObject === 'kerah' ? kerahColor.color :
                selectedObject === 'bahu' ? bahuColor.color :
                selectedObject === 'belakang' ? belakangColor.color :
                selectedObject === 'depan' ? depanColor.color :
                selectedObject === 'bawah' ? bawahColor.color :
                selectedObject === 'hiasan' ? hiasanColor.color :
                selectedObject === 'atas' ? atasColor.color :
                selectedObject === 'kakikanan' ? kakikananColor.color :
                selectedObject === 'kakikiri' ? kakikiriColor.color :
                selectedObject === 'kancing' ? kancingColor.color : ''
              }
              onChange={handleColorChange}
            />
          </div>
        </div>
      )}
      {textureVisible && (
        <div className="configurator_section">
          <div className="configurator_upload_image"></div>
          <div className="configurator_section_values">
            <TextureUploader selectedObject={selectedObject} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Configurator;
