import { StyleSheet, View, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";

import LoginScreen from "./screens/login/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={false}/>
      <ImageBackground
        source={require("./assets/background.jpg")}
        style={styles.image}
      >
        <LoginScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "auto", //upewnic sie czy background dobrze sie skaluje
  },
});
