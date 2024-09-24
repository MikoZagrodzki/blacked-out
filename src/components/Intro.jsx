'use client';
import { Canvas } from '@react-three/fiber'
import Model from './Model';
import { Environment } from '@react-three/drei'
import { useEffect } from 'react';
export default function Intro({ onLoad }) {
  


  return (
    <Canvas style={{height:'100vh',background: '#000000', position:'relative'}}>
      <Model onLoad={onLoad} />
      <directionalLight intensity={2} position={[0, 2, 3]}/>
        <Environment preset="city" />
    </Canvas>
  )
}