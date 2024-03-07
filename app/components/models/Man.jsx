import React from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Man = (props) => {
    const man = useGLTF("/models/man.glb");
    const animation = useAnimations(man.animations, man.scene);
    console.log("man animations", animation);
    return (
        <mesh>
            <primitive object={man.scene} {...props} />
        </mesh>
    );
};

export default Man;
