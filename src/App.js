import React, { Suspense, useRef } from "react";
import "./App.scss";
//Components
import Header from "./components/header";
import { Section } from "./components/section";
import { Canvas, useFrame } from "react-three-fiber";
import { Html, useGLTFLoader } from 'drei'

const Model = ({ modelPath }) => {
  const gltf = useGLTFLoader(modelPath, true)
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

const HTMLContent = ({ children, modelPath, positionY }) => {

  const ref = useRef()
  useFrame(() => (ref.current.rotation.y += 0.01))

  return (
    <Section factor={1.5} offset={0}>
      <group position={[0, positionY, 0]}>
        {console.log(positionY)}
        <mesh ref={ref} position={[0, -3.14, 0]} scale={[0.1, 0.1, 0.1]}>
          <Model modelPath={modelPath} />
        </mesh>
        <Html fullscreen>
          <div className="container">
            {children}
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
          <HTMLContent modelPath="/armchairYellow.gltf" positionY={0}>
            <div className="container">
              <h1 className="title">
                Hi
            </h1>
            </div>
          </HTMLContent>
          <HTMLContent modelPath="/armchairGreen.gltf" positionY={-8}>
            <div className="container">
              <h1 className="title">
                Why Hello
            </h1>
            </div>
          </HTMLContent>
          <HTMLContent modelPath="/armchairGray.gltf" positionY={-16}>
            <div className="container">
              <h1 className="title">
                Hi dare
            </h1>
            </div>
          </HTMLContent>
        </Suspense>
      </Canvas>
    </>
  );
}
