import React, { useEffect, useRef } from 'react'
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'
import { useControls } from 'leva'
export default function Model({onLoad}) {
    // const { nodes } = useGLTF("/medias/torrus.glb");
    const gltf = useGLTF("/medias/gift.glb");
    const { viewport } = useThree()
    const torus = useRef(null);
    
    const RANDOM_ROTATION_Y = (Math.random() * 0.04) - 0.02; // Generates a random value between -0.02 and 0.02
    const RANDOM_ROTATION_X = (Math.random() * 0.01) - 0.005; // Generates a random value between -0.02 and 0.02

    useFrame( () => {
        torus.current.rotation.y -= RANDOM_ROTATION_Y
        torus.current.rotation.x -= RANDOM_ROTATION_X
    })


    // const materialProps = useControls({
    //     thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
    //     roughness: { value: 0, min: 0, max: 1, step: 0.1 },
    //     transmission: {value: 1, min: 0, max: 1, step: 0.1},
    //     ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
    //     chromaticAberration: { value: 0.02, min: 0, max: 1},
    //     backside: { value: true},
    // })

    const materialProps = {
        thickness: 0.2,
        roughness: 0,
        transmission: 1,
        ior: 1.2,
        chromaticAberration: 0.02,
        backside: true
      };


      useEffect(() => {
        if (gltf) {
          // Call onLoad once the model has been loaded
          if (onLoad) onLoad();
        }
      }, [gltf, onLoad]);
      
    
    return (
        <group scale={viewport.width / 3.75} >
            <Text font={'/fonts/PPNeueMontreal-Bold.otf'} position={[0, 0, -1]} fontSize={0.5} color="rgb(255,255,255)" anchorX="center" anchorY="middle"  maxWidth={5} textAlign="center">
            STEALTH LAUNCH ON MONDAY.. STAY TUNED...
            </Text>
            <mesh ref={torus} {...gltf.nodes['gift']}>
                <MeshTransmissionMaterial {...materialProps}/>
            </mesh>
            {/* <mesh
            ref={torus}
        castShadow
        receiveShadow
        geometry={nodes['orang1'].geometry}
        material={materials['tripo_material_073d7441-4633-4977-9672-3011370c97ba']}
      /> */}
        </group>
    )
}
