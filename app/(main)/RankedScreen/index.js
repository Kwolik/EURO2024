import { View, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles.js";
import TopRanked from "../../../components/TopRanked/index.js";

export default function RankedScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/background.jpg")}
        style={styles.image}
      >
        <View style={styles.topRanked}>
          <TopRanked />
        </View>
      </ImageBackground>
    </View>
  );
}
