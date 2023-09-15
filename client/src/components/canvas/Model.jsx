import React from 'react'
import {Suspense,useEffect,useState} from 'react';
import { Canvas } from "@react-three/fiber";
import {OrbitControls, Preload,useGLTF} from '@react-three/drei';

import CanvasLoader from '../Loader';

const Model = () => {

    const newspaper=useGLTF('./Newspapers/scene.gltf')
    
    return (
      <mesh>
          <hemisphereLight intensity={0.35}
           groundColor="black"/>
           <pointLight intensity={10}
           position={[3,0,0]}/>
           <primitive
              object={newspaper.scene}
              scale={0.03}
              position={[0,-1,3]}
              rotation={[0,0,5]}
           />
      </mesh>
    )
}

const NewsCanvas=()=>{
    return(
        <Canvas
            frameloop="demand"
            shadows
            camera={{position:[20,3,5], fov:25}}
            gl={{preserveDrawingBuffer: true}}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls 
                 enableZoom={false}
                 maxPolarAngle={Math.PI/2}
                 minPolarAngle={Math.PI/2}
                />
                <Model/>
            </Suspense>

            <Preload all/>
        </Canvas>
    )
}

export default NewsCanvas;