// import React, { useRef } from 'react'
// import * as THREE from 'three';

// import { useGLTF } from '@react-three/drei/native';
// import { GLTF, GLTFLoader } from 'three-stdlib'
// import { useLoader } from '@react-three/fiber/native';
// type GLTFResult = GLTF & {
//     nodes: {
//         Object_4: THREE.Mesh;
//     };
//     materials: {
//         'Material.001': any;
//     };
// };
// export default function Model(props) {
//     const { nodes, materials } = useGLTF(require('../../assets/model/scene.gltf')) as GLTFResult
//     return (
//         <group {...props} dispose={null}>
//             <mesh
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Object_4.geometry}
//                 material={materials['Material.001']}
//                 rotation={[Math.PI / 2, 0, 0]}
//             />
//         </group>
//     )
// }

// useGLTF.preload('/scene.gltf')

// useGLTF.preload(require('../../assets/model/scene.gltf'))