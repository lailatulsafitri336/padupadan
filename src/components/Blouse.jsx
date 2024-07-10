import React, { useRef } from 'react'
import { useGLTF, useTexture} from '@react-three/drei'
import { useCustomization } from '../contexts/Customization';
import { RepeatWrapping } from 'three';

const Blouse = (props)  => {

  const {
    material,
    uploadedTextureURL,
    tangankananColor,
    tangankiriColor,
    kerahColor,
    belakangColor,
    depanColor,
  } = useCustomization();

  const { nodes, materials } = useGLTF('./models/blouse.glb');
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
texturesTextureProps.normalMap.repeat.set(3,3);

texturesTextureProps.map.wrapS = RepeatWrapping;
texturesTextureProps.map.wrapT = RepeatWrapping;
texturesTextureProps.map.repeat.set(3,3);

texturesTextureProps.aoMap.wrapS = RepeatWrapping;
texturesTextureProps.aoMap.wrapT = RepeatWrapping;
texturesTextureProps.aoMap.repeat.set(-100,-100);

texturesTextureProps.normalMap.anisotropy = 50;
texturesTextureProps.map.anisotropy = 50;
texturesTextureProps.aoMap.anisotropy = 50;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.belakang.geometry} material={materials.Back}>
      <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})}color={belakangColor.color} />
      </mesh>

      <mesh geometry={nodes.depan.geometry} material={materials.Back}>
      <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})}color={depanColor.color} />
      </mesh>
      <mesh geometry={nodes.kerah.geometry} material={materials.Back}>
      <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})}color={kerahColor.color} />
      </mesh>
      <mesh geometry={nodes.tangankanan.geometry} material={materials.Back} >
      <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})}color={tangankananColor.color} />
      </mesh>
      <mesh geometry={nodes.tangankiri.geometry} material={materials.Back}>
      <meshStandardMaterial {...(material === "textures" ? texturesTextureProps : {})}color={tangankiriColor.color} />
      </mesh>
    </group>
  )
}

useGLTF.preload('./models/blouse.glb')

export default Blouse;
