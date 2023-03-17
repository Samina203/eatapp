import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { AppNavigator } from "./src/navigation/appNavigation";
export default function App() {
  return (
    <>
      <SafeAreaView />
      <AppNavigator />
    </>
  );
}
