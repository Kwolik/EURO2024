import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles.js";

export default function KingFootballerRow() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.team}>Robert Lewandowski</Text>
      </View>
      <View style={styles.bottom}>
        <View style={styles.player}>
          <Image
            style={styles.avatar}
            source={require("../../assets/EURO2024logo.png")}
          />
          <Text style={styles.teams}>Elpulokomvkjj</Text>
        </View>
        <View style={styles.player}>
          <Image
            style={styles.avatar}
            source={require("../../assets/EURO2024logo.png")}
          />
          <Text style={styles.teams}>Elpulokomvkjj</Text>
        </View>
        <View style={styles.player}>
          <Image
            style={styles.avatar}
            source={require("../../assets/EURO2024logo.png")}
          />
          <Text style={styles.teams}>Elpulokomvkjj</Text>
        </View>
      </View>
    </View>
  );
}
