import { View, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles.js";
import NextMatch from "../../../components/NextMatch/index.js";

export default function MatchScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/background.jpg")}
        style={styles.image}
      >
        <View>
          <NextMatch />
        </View>
        <View>
        </View>
      </ImageBackground>
    </View>
  );
}
