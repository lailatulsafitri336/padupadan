import React, { useRef } from 'react'
import { useGLTF, useTexture} from '@react-three/drei'
import { useCustomization } from '../contexts/Customization';
import { RepeatWrapping } from 'three';

const Skirt2 = (props) => {
  const {
    material,
    uploadedTextureURL,
    atasColor,
    bawahColor,
  } = useCustomization();
  const { nodes, materials } = useGLTF('./models/skirt2.glb');

  const texturesTextureProps = useTexture({
    map: uploadedTextureURL || "./public/textures/Fabric_Silk_001_basecolor.jpg",
    normalMap: "./public/textures/Fabric_Silk_001_basecolor.jpg",
    aoMap: "./public/textures/Fabric_001_OCC.jpg",
});

texturesTextureProps.normalMap.repeat.set(0.001, 0.001);
texturesTextureProps.map.repeat.set(0.001, 0.001);
texturesTextureProps.aoMap.repeat.set(0.001, 0.001);

texturesTextureProps.normalMap.wrapS = RepeatWrapping;
texturesTextureProps.normalMap.wrapT = RepeatWrapping;
texturesTextureProps.normalMap.repeat.set(2, 2);

texturesTextureProps.map.wrapS = RepeatWrapping;
texturesTextureProps.map.wrapT = RepeatWrapping;
texturesTextureProps.map.repeat.set(2,2);

texturesTextureProps.aoMap.wrapS = RepeatWrapping;
texturesTextureProps.aoMap.wrapT = RepeatWrapping;
texturesTextureProps.aoMap.repeat.set(-100,-100);

texturesTextureProps.normalMap.anisotropy = 50;
texturesTextureProps.map.anisotropy = 50;
texturesTextureProps.aoMap.anisotropy = 50;

  return (
    <group {...props} dispose={null}>
      <group position={[0, -7.708, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.117}>
        <mesh geometry={nodes.atas.geometry} material={materials.Back} >
        <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})} color={atasColor.color} />
        </mesh>
        <mesh geometry={nodes.bawah.geometry} material={materials.Back} >
        <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})} color={bawahColor.color} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./models/skirt2.glb');

export default Skirt2;
