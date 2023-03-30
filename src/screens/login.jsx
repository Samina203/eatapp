import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Styles } from "./login_style";
import { Button, onPress, outline, title } from "../components/button";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState, useEffect } from "react";
import { getIsUserLoggedIn } from "../utilis/help";

function Login({ navigation }) {
  useEffect(() => {
    getIsUserLoggedIn().then((response) => {
      if (response === "true") {
        navigation.replace("main");
      }
    });
  }, []);
  const [passwordInput, setPasswordInput] = useState();
  const [showPassword, setShowPassword] = useState(true);
  const onEyePressed = () => {
    if (showPassword == true) {
      setShowPassword(false);
    } else {
      setShowPassword(true);
    }
  };

  const myFunc = () => {};
  const goToRegister = () => {
    navigation.navigate("register");
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.formCon}>
        <View style={Styles.form}>
          <TextInput style={Styles.inputCon} placeholder="email"></TextInput>
          <View style={Styles.inputConPas}>
            <TextInput
              style={{ width: "90%" }}
              placeholder="password"
              secureTextEntry={showPassword}
              onChangeText={(text) => setPasswordInput(text)}
            ></TextInput>
            <Ionicons
              name={showPassword ? "eye" : "eye-off"}
              size={24}
              color={showPassword ? "purple" : "orange"}
              onPress={onEyePressed}
            ></Ionicons>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Button Primary title={"SignIn"} onPress={myFunc}></Button>
          </View>
        </View>

        <TouchableOpacity onPress={goToRegister}>
          <Text style={{ marginTop: 5, marginLeft: 10 }}>
            Don't have a account SignUp
          </Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.bottomCon}></View>
    </View>
  );
}
export { Login };
