import { View, TextInput, TouchableOpacity, Image } from "react-native";
import { Styles } from "./register_styles";
import { useState } from "react";
import { Button, title, onPress } from "../components/button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../services/firebaseConfig";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import Spinner from "react-native-loading-spinner-overlay";
import { CustomCamera } from "../components/CustomCamera";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [profilePic, setProfilePic] = useState("");

  const onSubmit = () => {
    if (firstName === "") {
      alert("Please Enter First Name");
      return;
    }
    if (lastName === "") {
      alert("Please Enter Last Name");
      return;
    }
    if (email === "") {
      alert("Please Enter Email");
      return;
    }
    if (password === "") {
      alert("Please Enter Password");
      return;
    }
    if (confirmPassword === "") {
      alert("Please Enter Confirm Password");
      return;
    }
    if (confirmPassword !== password) {
      alert("password don't match");
      return;
    }
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((authResponse) => {
        const user = authResponse.user;

        // print authResponse to study and get UID out of it
        console.log(user.uid);

        setDoc(doc(db, "users", user.uid), { email, firstName, lastName })
          .then((dbResponse) => {
            setLoading(false);
            alert("user is registerd");
          })
          .catch((dbError) => {
            setLoading(false);
            alert(dbError.message);
          });
      })
      .catch((authError) => {
        setLoading(false);
        alert(authError.message);
      });
  };
  const onPickImagePress = () => {
    setIsCameraOpen(true); //camera invert
  };
  const onPicTaken = (picturePath) => {
    setIsCameraOpen(false);
    setProfilePic(picturePath);
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.formCon}>
        <TouchableOpacity
          style={Styles.pickImageCon}
          onPress={onPickImagePress}
        >
          <Image
            style={Styles.profieImage}
            source={
              profilePic === ""
                ? require("../../assets/icon.png")
                : { uri: profilePic }
            }
          />
        </TouchableOpacity>

        <View style={Styles.form}>
          <TextInput
            style={Styles.inputCon}
            onChangeText={setFirstName}
            placeholder="first Name"
          ></TextInput>
          <TextInput
            style={Styles.inputCon}
            onChangeText={setLastName}
            placeholder="last Name"
          ></TextInput>
          <TextInput
            style={Styles.inputCon}
            placeholder="email"
            onChangeText={setEmail}
          ></TextInput>
          <TextInput
            style={Styles.inputCon}
            placeholder="password"
            onChangeText={setPassword}
          ></TextInput>
          <TextInput
            style={Styles.inputCon}
            placeholder="confirm Password"
            onChangeText={setConfirmPassword}
          ></TextInput>
          <View style={{ flexDirection: "row" }}>
            <Button primary title={"Register"} onPress={onSubmit} />
          </View>
        </View>
      </View>
      <View style={Styles.bottomCon}></View>
      <Spinner visible={loading} textContent={"Loading..."} />
      {isCameraOpen === true && <CustomCamera onPictureTaken={onPicTaken} />}
    </View>
  );
}
export { Register };
