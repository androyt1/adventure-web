"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import Panther from "./components/models/Panther";
import Man from "./components/models/Man";
import {
    OrbitControls,
    Environment,
    MeshReflectorMaterial,
    Text3D,
    Float,
} from "@react-three/drei";

const page = () => {
    return (
        <div className='h-screen w-full flex justify-center items-center bg-black'>
            <div className='w-3/4 h-3/4'>
                <Canvas
                    camera={{
                        fov: 20,
                        near: 0.1,
                        far: 1000,
                        position: [0, 80, 120],
                    }}>
                    <OrbitControls />
                    <ambientLight intensity={4} />
                    <directionalLight position={[-2, 3, 0]} intensity={5} />
                    <Panther position-y={-2} scale={9} position-x={6} />
                    <Man position-y={-2} />
                    <mesh rotation={[-Math.PI * 0.5, 0, 0]} position-y={-2.5}>
                        <planeGeometry args={[70, 50]} />
                        <MeshReflectorMaterial color={"#7E6C54"} />
                    </mesh>
                    <Environment background preset='forest' />
                    <Float speed={1}>
                        <Text3D
                            font='/fonts/gt.json'
                            // scale={[-1, 1, 1]}

                            position={[-9, 20, 0]}
                            curveSegments={24}
                            brevelSegments={1}
                            bevelEnabled
                            bevelSize={0.08}
                            bevelThickness={0.03}
                            height={1}
                            lineHeight={0.9}
                            letterSpacing={0.3}>
                            Dont get Scared
                        </Text3D>
                    </Float>
                </Canvas>
            </div>
        </div>
    );
};

export default page;
