import React, { useState, useEffect, useRef } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";

function CustomCamera({ onPictureTaken }) {
  const cameraRef = useRef();
  const [type, setType] = useState(Camera.Constants.Type.back);

  const [permission, requestPermission] = Camera.useCameraPermissions();
  requestPermission();
  const onTakePicturePress = () => {
    if (cameraRef.current === undefined) return;
    cameraRef.current
      .takePictureAsync()
      .then((response) => {
        console.log(response);
        if (response.uri !== undefined) {
          onPictureTaken(response.uri);
        }
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <View style={styles.con}>
      <Camera ref={cameraRef} style={styles.camera} type={type}>
        <View style={styles.cameraButtonView}>
          <TouchableOpacity onPress={onTakePicturePress}>
            <View style={styles.cameraButton} />
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}
const styles = StyleSheet.create({
  con: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  camera: {
    flex: 1,
    justifyContent: "flex-end",
  },
  cameraButtonView: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  cameraButton: {
    width: 60,
    height: 60,
    marginBottom: 5,
    borderRadius: 30,
    backgroundColor: "white",
  },
  profilePicImg: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 50,
  },
});
export { CustomCamera };
