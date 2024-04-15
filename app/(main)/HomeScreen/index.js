import { View, ImageBackground, Text } from "react-native";
import React from "react";
import styles from "./styles.js";
import NextMatch from "../../../components/NextMatch/index.js";
import TopRanked from "../../../components/TopRanked/index.js";
import Ionicons from "react-native-vector-icons/Ionicons";
import RowMatch from "../../../components/RowMatch/index.js";

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
        <View style={styles.plates}>
          <View style={styles.plate}>
            <View style={styles.icon}>
              <Ionicons name="football-outline" style={styles.iconMain} />
            </View>
            <View style={styles.bottom}>
              <Text style={styles.name}>Mecze</Text>
            </View>
          </View>
          <View style={styles.plate}>
            <View style={styles.icon}>
              <Ionicons name="star-outline" style={styles.iconMain} />
            </View>
            <View style={styles.bottom}>
              <Text style={styles.name}>Ranking</Text>
            </View>
          </View>
          <View style={styles.plate}>
            <View style={styles.icon}>
              <Ionicons name="settings-outline" style={styles.iconMain} />
            </View>
            <View style={styles.bottom}>
              <Text style={styles.name}>Profil</Text>
            </View>
          </View>
        </View>
        <View>
          <RowMatch />
          <RowMatch />
          <RowMatch />
        </View>
      </ImageBackground>
    </View>
  );
}
