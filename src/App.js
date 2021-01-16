import React, { Suspense } from "react";
import "./App.scss";
//Components
import Header from "./components/header";
import { Section } from "./components/section";
import { Canvas } from "react-three-fiber";
import { Html, useGLTFLoader } from 'drei'

const Model = () => {
  const gltf = useGLTFLoader('/armchairYellow.gltf', true)
  return <primitive object={gltf.scene} dispose={null} />
}

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={0.6} />
      <directionalLight position={[0, 10, 0]} intensity={1.1} />
      <spotLight position={[1000, 0, 0]} intensity={1} />
    </>
  )
}

const HTMLContent = () => {
  return (
    <Section factor={1.5} offset={0}>
      <group position={[0, 0, 0]}>
        <mesh position={[0, -3.14, 0]} scale={[0.1, 0.1, 0.1]}>
          <Model />
        </mesh>
        <Html fullscreen>
          <div className="container">
            <h1 className="title">
              Hello
          </h1>
          </div>
        </Html>
      </group>
    </Section>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <Canvas colorManagement camera={{ position: [0, 0, 10], fov: 70 }}>
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent />
        </Suspense>
      </Canvas>
    </>
  );
}
