import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import LoginScreen from "./(auth)/LoginScreen";

//Upewnic sie co do status bara

export default function Page() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" translucent={true} />
      <LoginScreen />
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