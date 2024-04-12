import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles.js";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/background.jpg")}
        style={styles.image}
      >
        <View>
          <Text>HOME.......</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
