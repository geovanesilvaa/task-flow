import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import FlashMessage from "react-native-flash-message";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={"#fff"}
        style="inverted"
        translucent={false}
      />
      <Routes />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
