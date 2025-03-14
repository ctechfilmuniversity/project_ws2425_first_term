import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { emotionMapping } from "./emotionMapping";

const Avatar = ({ url, currentEmotion }) => {
  const avatarRef = useRef();
  const { scene } = useGLTF(url);

  useEffect(() => {
    // Access the morph target influences and dictionary
    scene.traverse((child) => {
      if (child.isMesh && child.morphTargetDictionary) {
        const morphDict = child.morphTargetDictionary;
        const morphInfluences = child.morphTargetInfluences;

        // Reset all morph targets
        Object.keys(morphDict).forEach((key) => {
          morphInfluences[morphDict[key]] = 0;
        });

        // Apply the emotion morph target influences
        if (emotionMapping[currentEmotion]) {
          Object.keys(emotionMapping[currentEmotion]).forEach((key) => {
            const targetIndex = morphDict[key];
            if (targetIndex !== undefined) {
              morphInfluences[targetIndex] =
                emotionMapping[currentEmotion][key];
            }
          });
        }
      }
    });

    // Set avatar position
    if (avatarRef.current) {
      avatarRef.current.position.set(0, -1.6, 0);
    }
  }, [currentEmotion, scene]);

  return <primitive ref={avatarRef} object={scene} />;
};

const AvatarViewer = ({ avatarUrl, currentEmotion }) => {
  return (
    <Canvas camera={{ fov: 17, near: 0.1, far: 10, position: [-1, 0, 2] }}>
      <ambientLight intensity={1} />
      <directionalLight position={[0, 1.5, 2]} intensity={2.5} />
      <Avatar url={avatarUrl} currentEmotion={currentEmotion} />
    </Canvas>
  );
};

export default AvatarViewer;
