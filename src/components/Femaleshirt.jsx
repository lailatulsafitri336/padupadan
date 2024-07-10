
import React from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useCustomization } from '../contexts/Customization';
import { RepeatWrapping } from 'three';

const Femaleshirt = (props) => {
  const {
    material,
    uploadedTextureURL,
    depankananColor,
    depankiriColor,
    kancingColor,
    tangankananColor,
    tangankiriColor,
    kerahColor,
    bahuColor,
    belakangColor
  } = useCustomization();  
  
  const { nodes, materials } = useGLTF('./models/femaleshirt.glb');
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
      <group position={[0, -22.449, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.015}>
        <mesh geometry={nodes.bahu.geometry} material={materials.Back} position={[0, 0, 1471.456]} >
          <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})} color={bahuColor.color} />
        </mesh>

        <mesh geometry={nodes.belakang.geometry} material={materials.Back} position={[0, 0, 1471.456]} >
          <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})} color={belakangColor.color} />
        </mesh>

        <mesh geometry={nodes.depankanan.geometry} material={materials.Back} position={[0, 0, 1471.456]}>
        <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})} color={depankananColor.color} />
        </mesh>
        
        <mesh geometry={nodes.depankiri.geometry} material={materials.Back} position={[0, 0, 1471.456]}> 
          <meshStandardMaterial{...(material === "textures" ? texturesTextureProps : {})}color={depankiriColor.color} />
        </mesh>

        <mesh geometry={nodes.kancing.geometry} material={materials.Back} position={[0, 0, 1471.456]} >
          <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})}color={kancingColor.color} />
        </mesh>
        
        <mesh geometry={nodes.tangankanan.geometry} material={materials.Back} position={[0, 0, 1471.456]} >
          <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})}color={tangankananColor.color} />
        </mesh>
        
        <mesh geometry={nodes.tangankiri.geometry} material={materials.Back} position={[0, 0, 1471.456]} >
          <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})}color={tangankiriColor.color} />
        </mesh>
        
        <mesh geometry={nodes.kerah.geometry} material={materials.Back} position={[0, 0, 1471.456]}> 
          <meshStandardMaterial{...(material === "textures" ? texturesTextureProps : {})} color={kerahColor.color} />
        </mesh>

      </group>
    </group>
  );
}

useGLTF.preload('./models/femaleshirt.glb');

export default Femaleshirt;
