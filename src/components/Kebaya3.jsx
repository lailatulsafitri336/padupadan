import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { useCustomization } from '../contexts/Customization';
import { RepeatWrapping } from 'three';

const Kebaya3 = (props) => {
  const {
    material,
    uploadedTextureURL,
    depanColor,
    tangankananColor,
    tangankiriColor,
    belakangColor,
    bawahColor 
  } = useCustomization();

  const { nodes, materials } = useGLTF('./models/kebaya3.glb');

  const texturesTextureProps = useTexture({
    map: uploadedTextureURL || "./public/textures/Fabric_001_DISP.png",
    normalMap: "./public/textures/Fabric_001_NORM.jpg",
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
      <mesh geometry={nodes.belakang.geometry} material={materials['Back_FRONT_2239.001']} >
      <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})} color={belakangColor.color} />
      </mesh>
      <mesh geometry={nodes.bawah.geometry} material={materials['Back_FRONT_2239.001']} >
      <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})} color={bawahColor.color} />
      </mesh>
      <mesh geometry={nodes.tangankiri.geometry} material={materials['Back_FRONT_2239.001']} >
      <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})} color={tangankiriColor.color} />
      </mesh>
      <mesh geometry={nodes.tangankanan.geometry} material={materials['Back_FRONT_2239.001']} >
      <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})} color={tangankananColor.color} />
      </mesh>
      <mesh geometry={nodes.depan.geometry} material={materials['Back_FRONT_2239.001']} >
      <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})} color={depanColor.color} />
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/kebaya3.glb');

export default Kebaya3;
