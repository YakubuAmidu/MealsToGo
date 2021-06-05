import React, { useRef } from "react";
import { Camera } from "expo-camera";
import styled from "styled-components/native";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = () => {
  const cameraRef = useRef();

  return (
    <ProfileCamera
      ref={(camera) => (cameraRef.current = camera)}
      type={Camera.Constants.Type.front}
    >
      j
    </ProfileCamera>
  );
};
