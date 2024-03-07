"use client";
import { useGLTF } from "@react-three/drei";
import { useAnimations } from "@react-three/drei";
import { useEffect } from "react";

const Panther = (props) => {
    const panther = useGLTF("/models/panther.glb");
    const animations = useAnimations(panther.animations, panther.scene);

    useEffect(() => {
        animations.actions.Animation.play();
    }, []);
    return (
        <mesh>
            <primitive object={panther.scene} {...props} />
        </mesh>
    );
};

export default Panther;
