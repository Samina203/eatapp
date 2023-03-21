import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Styles } from "./login_style";
import { Button, onPress, outline, title } from "../components/button";

function Login({ navigation }) {
  myFunc = () => {
    alert("go");
  };
  const goToRegister = () => {
    navigation.navigate("register");
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.formCon}>
        <View style={Styles.form}>
          <TextInput style={Styles.inputCon} placeholder="email"></TextInput>
          <TextInput style={Styles.inputCon} placeholder="password"></TextInput>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Button Primary title={"SignIn"} onPress={myFunc}></Button>
        </View>
        <TouchableOpacity onPress={goToRegister}>
          <Text style={{ marginTop: 10, marginLeft: 10 }}>
            Don't have a account SignUp
          </Text>
        </TouchableOpacity>
      </View>

      <View style={Styles.bottomCon}></View>
    </View>
  );
}
export { Login };
