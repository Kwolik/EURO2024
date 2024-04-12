import { View, ImageBackground, Text } from "react-native";
import React from "react";
import styles from "./styles.js";
import NextMatch from "../../../components/NextMatch/index.js";
import TopRanked from "../../../components/TopRanked/index.js";

export default function HomeScreen() {
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
          <TopRanked />
        </View>
        <View>
          <Text>Kafelki</Text>
          <Text>Pilka - wszystkie mecze</Text>
          <Text>star - ranking</Text>
          <Text>zebatka/profile - profil</Text>
        </View>
      </ImageBackground>
    </View>
  );
}
