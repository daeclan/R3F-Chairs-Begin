import React from "react";
import "./App.scss";
//Components
import Header from "./components/header";
import { Section } from "./components/section";
import { Canvas } from "react-three-fiber";
import { Html } from 'drei'

const HTMLContent = () => {
  return (
    <Section factor={1.5} offset={0}>
      <group position={[0, 0, 0]}>
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
      <Canvas
        colorManagement
        camera={{ position: [0, 0, 10], fov: 70 }}>
        <HTMLContent />
      </Canvas>
    </>
  );
}
