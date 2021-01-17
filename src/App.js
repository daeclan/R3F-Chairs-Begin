import React, { Suspense, useEffect, useRef } from "react";
import "./App.scss";
// components
import Header from "./components/header";
import { Section } from "./components/section";
import { Canvas, useFrame } from "react-three-fiber";
import { Html, useGLTFLoader } from 'drei'

// page states 
import state from "./components/state"

// intersection observer
import { useInView } from 'react-intersection-observer'

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

const HTMLContent = ({ bgColor, domContent, children, modelPath, positionY }) => {

  const ref = useRef()
  useFrame(() => (ref.current.rotation.y += 0.01))
  const [refItem, inView] = useInView({
    threshold: 0
  })

  useEffect(() => {
    inView && (document.body.style.background = bgColor)
  }, [inView])
  return (
    <Section factor={1.5} offset={0}>
      <group position={[0, positionY, 0]}>
        {console.log(positionY)}
        <mesh ref={ref} position={[0, -3.14, 0]} scale={[1, 1, 1]}>
          <Model modelPath={modelPath} />
        </mesh>
        <Html portal={domContent} fullscreen>
          <div className="container">
            <div ref={refItem}>
              {children}
            </div>
          </div>
        </Html>
      </group>
    </Section>
  )
}

export default function App() {
  const domContent = useRef();
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])

  return (
    <>
      <Header />
      <Canvas colorManagement camera={{ position: [0, 0, 10], fov: 70 }}>
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent
            domContent={domContent}
            modelPath="/lightning_bolt.gltf"
            positionY={0}
            bgColor={'#f15946'}>
            <h1 className="title">
              ZAP X Technology
            </h1>
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            modelPath="/lightning_bolt2.gltf"
            positionY={-21}
            bgColor={'#571ec1'}>
            <h1 className="title">
              Success Stories
            </h1>
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            modelPath="/lightning_bolt3.gltf"
            positionY={-42}
            bgColor={'#636567'}>
            <h1 className="title">
              Sign Up Today
            </h1>
          </HTMLContent>
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ position: "sticky", top: 0 }} ref={domContent}></div>
        <div style={{ height: `${state.sections * 100}vh` }}></div>
      </div>
    </>
  );
}
