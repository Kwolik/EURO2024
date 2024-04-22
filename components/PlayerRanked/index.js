import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles.js";

export default function PlayerRanked() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.position}>#4</Text>
        <Image
          style={styles.avatar}
          source={require("../../assets/EURO2024logo.png")}
        ></Image>
        <Text style={styles.result}>28 pkt</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.nick}>elPulokohgflt</Text>
      </View>
    </View>
  );
}
