import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../screens/login";
import { Register } from "../screens/register";
import { Main } from "../screens/main/main";
import { Settings } from "../screens/setting/setting";

function AppNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="main" component={Main} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="settng" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export { AppNavigator };
