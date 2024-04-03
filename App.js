import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import LoginScreen from "./screens/login/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js - EURO2024 to start working on your app!</Text>
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
