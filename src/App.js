import React from "react";
import "./App.scss";
//Components
import Header from "./components/header";
import { Canvas } from "react-three-fiber";
import { Html, RoundedBox } from 'drei'

export default function App() {
  return (
    <>
      <Header />
      <Canvas
        colorManagement
        camera={{ position: [0, 0, 10], fov: 70 }}>
        {/* <Html fullscreen>
          <div className="container">
            <h1 className="title">
              Hello
            </h1>
          </div>  
        </Html> */}
        <RoundedBox
          args={[1, 1, 1]} // Width, Height and Depth of the box
          radius={0.05} // Border-Radius of the box
          smoothness={4} // Optional, number of subdivisions
        // {...meshProps} // All THREE.Mesh props are valid
        >
          <meshPhongMaterial attach="material" color="#f3f3f3" />
        </RoundedBox>
      </Canvas>
    </>
  );
}
