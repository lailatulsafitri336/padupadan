import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useCustomization } from '../contexts/Customization';
import { RepeatWrapping } from 'three';

const Femalesuit = (props) => {
  const {
    material,
    uploadedTextureURL,
    depankananColor,
    depankiriColor,
    kancingColor,
    tangankananColor,
    tangankiriColor,
    kerahColor,
    belakangColor,
    hiasanColor,
  } = useCustomization(); 
  const { nodes, materials } = useGLTF('./models/femalesuit.glb');
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
      <group position={[0, -4.166, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.004}>
        <mesh geometry={nodes.belakang.geometry} material={materials.Back} >
        <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})} color={belakangColor.color} />
        </mesh>
        <mesh geometry={nodes.depankanan.geometry} material={materials.Back} >
        <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})} color={depankananColor.color} />
        </mesh>
        <mesh geometry={nodes.depankiri.geometry} material={materials.Back} >
        <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})} color={depankiriColor.color} />
        </mesh>
        <mesh geometry={nodes.hiasan.geometry} material={materials.Back} >
        <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})} color={hiasanColor.color} />
        </mesh>
        <mesh geometry={nodes.kancing.geometry} material={materials.Back} >
        <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})} color={kancingColor.color} />
        </mesh>
        <mesh geometry={nodes.kerah.geometry} material={materials.Back} >
        <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})} color={kerahColor.color} />
        </mesh>
        <mesh geometry={nodes.tangankanan.geometry} material={materials.Back} >
        <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})} color={tangankananColor.color} />
        </mesh>
        <mesh geometry={nodes.tangankiri.geometry} material={materials.Back} >
        <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})} color={tangankiriColor.color} />
        </mesh>
      </group>
    </group>
  )
}

useGLTF.preload('./models/femalesuit.glb');

export default Femalesuit;
