import React, { useState, useRef, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { PresentationControls, Stage } from "@react-three/drei";
import './Custom.css';
import Navbar from './Navbar';
import { takeScreenshot } from "./screenshotHelper";
import Configurator from "./Configurator";
import { CustomizationalProvider, useCustomization } from '../contexts/Customization';
import Femaleshirt from "./Femaleshirt";
import Maleshirt from "./Maleshirt";
import Maletshirt from "./Maletshirt";
import Femaletshirt from './Femaletshirt';
import Malesuit from './Malesuit';
import Dress from './Dress';
import Blouse from './Blouse';
import Skirt from './Skirt';
import Pants from './Pants';
import Kebaya1 from './Kebaya1';
import Kebaya2 from './Kebaya2';
import Kebaya3 from './Kebaya3';
import Pants2 from './Pants2';
import Skirt2 from './Skirt2';
import Femalesuit from './Femalesuit';
import Blouse2 from './Blouse2';

const Custom = () => {
  const [currentObject, setCurrentObject] = useState('femaleshirt');
  const [showModelDropdown, setShowModelDropdown] = useState(false);
  const [showMaletshirtDropdown, setShowMaletshirtDropdown] = useState(false);
  const [showMalesuitDropdown, setShowMalesuitDropdown] = useState(false);
  const [showDressDropdown, setShowDressDropdown] = useState(false); 
  const [showBlouseDropdown, setShowBlouseDropdown] = useState(false); 
  const [showSkirtDropdown, setShowSkirtDropdown] = useState(false);
  const [showPantsDropdown, setShowPantsDropdown] = useState(false);

  const handleObjectChange = (selectedObject) => {
    setCurrentObject(selectedObject);
    setShowModelDropdown(false);
    setShowMaletshirtDropdown(false);
    setShowMalesuitDropdown(false);
    setShowDressDropdown(false); 
    setShowBlouseDropdown(false); 
    setShowSkirtDropdown(false);
    setShowPantsDropdown(false);
  };

  const getCurrentObjectComponent = () => {
    switch (currentObject) {
      case 'femaleshirt':
        return <Femaleshirt />;
      case 'maleshirt':
        return <Maleshirt />;
      case 'maletshirt':
        return <Maletshirt />;
      case 'femaletshirt':
        return <Femaletshirt />;
      case 'malesuit':
        return <Malesuit />;
      case 'dress': 
        return <Dress />;
      case 'blouse': 
        return <Blouse />;
      case 'skirt': 
        return <Skirt />;
      case 'pants': 
        return <Pants />;
      case 'kebaya1': 
        return <Kebaya1 />;
      case 'kebaya2': 
        return <Kebaya2 />;
      case 'kebaya3': 
        return <Kebaya3 />;
      case 'pants2': 
        return <Pants2/>;
      case 'skirt2': 
        return <Skirt2/>;
      case 'femalesuit': 
        return <Femalesuit/>;
      case 'blouse2': 
        return <Blouse2/>;

      default:
        return null;
    }
  };

  const { takeScreenshot: shouldTakeScreenshot, setTakeScreenshot } = useCustomization();

  const canvasRef = useRef();

  useEffect(() => {
    if (shouldTakeScreenshot) {
      takeScreenshot(canvasRef);
      setTakeScreenshot(false);
    }
  }, [shouldTakeScreenshot, setTakeScreenshot]);

  const [stream, setStream] = useState(null);
  const videoRef = useRef();

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, [stream]);

  useEffect(() => {
    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => {
          track.stop();
        });
      }
    };
  }, [stream]);

  return (
    <CustomizationalProvider>
      <Navbar />
      <div className="button-capture">
        
      <button class="open_camera" onClick={startCamera}>
  <img src="public/images/camera.png" alt="Open Camera Button" width="35" height="35"  />
</button>


<button class="stop_camera" onClick={stopCamera}>
  <img src="public/images/closecamera.png" alt="Close Camera Button" width="35" height="35"  />
</button>
      

      </div>
      <div className="Custom">

      <button class="take-picture-button" onClick={() => setTakeScreenshot(true)}>
  <img src="public/images/unduh.png" alt="unduh Button" width="35" height="35"  />
</button>

      <div className="video-container">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            style={{
              width: "80vw",
              height: "80vh",
              position: "absolute",
              top: "15%",
              left: "8%",
              margin: "auto",
            }}
            className="video"
          ></video>
        </div>
        <Canvas 
          style={{ touchAction: 'none',
            width: "500px",
            height: "500px",
            position: "absolute",
            top: "23%",
            left: "35%",
            margin: "auto",
           }} 
          ref={canvasRef}
          gl={{ preserveDrawingBuffer: true }}
        >
          <PresentationControls
            speed={1.5}
            global
            polar={[-0.1, Math.PI / 4]}
            rotation={[Math.PI / 8, Math.PI / 4, 0]}
          >
            <Stage environment="city" intensity={0.6} castShadow={false}>
              <group>
                {getCurrentObjectComponent()}
              </group>
            </Stage>
          </PresentationControls>
        </Canvas>

        <div className="kotak" />
        <div className='padupadan'> Padupadan</div>

        <Configurator />
        <div className="dropdown-wrapper">
          <div className="dropdown">
            <button className="dropdown-button" onClick={() => setShowModelDropdown(!showModelDropdown)}>
              Shirt
            </button>
            {showModelDropdown && (
              <div className="dropdown-content">
                <div className="femaleshirt">
                  <button onClick={() => handleObjectChange('femaleshirt')}>Female Shirt</button>
                </div>
                <div className="maleshirt">
                  <button onClick={() => handleObjectChange('maleshirt')}>Male Shirt</button>
                </div>
              </div>
            )}
          </div>

          <div className="dropdown">
            <button className="dropdown-button2" onClick={() => setShowMaletshirtDropdown(!showMaletshirtDropdown)}>
              T-Shirt
            </button>
            {showMaletshirtDropdown && (
              <div className="dropdown-content">
                <div className="maletshirt">
                  <button onClick={() => handleObjectChange('maletshirt')}>Male T-Shirt</button>
                </div>
                <div className="femaletshirt">
                  <button onClick={() => handleObjectChange('femaletshirt')}>Female T-Shirt</button>
                </div>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button className="dropdown-button3" onClick={() => setShowMalesuitDropdown(!showMalesuitDropdown)}>
              Suit
            </button>
            {showMalesuitDropdown && (
              <div className="dropdown-content">
                <div className="malesuit">
                  <button onClick={() => handleObjectChange('malesuit')}>Male Suit</button>
                </div>
                <div className="femalesuit">
                  <button onClick={() => handleObjectChange('femalesuit')}>Female Suit</button>
                </div>
              </div>
            )}
          </div>

          <div className="dropdown">
            <button className="dropdown-button4" onClick={() => setShowDressDropdown(!showDressDropdown)}>
              Dress
            </button>
            {showDressDropdown && (
              <div className="dropdown-content">
                <div className="dress">
                  <button onClick={() => handleObjectChange('dress')}>Dress</button>
                </div>
                <div className="kebaya1">
                  <button onClick={() => handleObjectChange('kebaya1')}>Kebaya1</button>
                </div>

                <div className="kebaya2">
                  <button onClick={() => handleObjectChange('kebaya2')}>Kebaya2</button>
                </div>

                <div className="kebaya3">
                  <button onClick={() => handleObjectChange('kebaya3')}>Kebaya3</button>
                </div>

              </div>
            )}
          </div>

          <div className="dropdown">
            <button className="dropdown-button5" onClick={() => setShowBlouseDropdown(!showBlouseDropdown)}>
              Blouse
            </button>
            {showBlouseDropdown && (
              <div className="dropdown-content">
                <div className="blouse">
                  <button onClick={() => handleObjectChange('blouse')}>Blouse</button>
                </div>
                <div className="blouse2">
                  <button onClick={() => handleObjectChange('blouse2')}>Blouse2</button>
                </div>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button className="dropdown-button6" onClick={() => setShowSkirtDropdown(!showSkirtDropdown)}>
              Skirt
            </button>
            {showSkirtDropdown && (
              <div className="dropdown-content">
                <div className="skirt">
                  <button onClick={() => handleObjectChange('skirt')}>Skirt</button>
                </div>
                <div className="skirt2">
                  <button onClick={() => handleObjectChange('skirt2')}>Skirt2</button>
                </div>
              </div>
            )}
          </div>

          <div className="dropdown">
            <button className="dropdown-button7" onClick={() => setShowPantsDropdown(!showPantsDropdown)}>
              Pants 
            </button>
            {showPantsDropdown && (
              <div className="dropdown-content">
                <div className="pants">
                  <button onClick={() => handleObjectChange('pants')}>Pants</button>
                </div>
                <div className="pants2">
                  <button onClick={() => handleObjectChange('pants2')}>Pants2</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </CustomizationalProvider>
  );
}

export default Custom;
