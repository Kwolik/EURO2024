import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles.js";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function Player() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <MaterialCommunityIcons name="cards" style={styles.icon} />
        <Text style={styles.points}>3</Text>
        <Image
          style={styles.avatar}
          source={require("../../assets/EURO2024logo.png")}
        ></Image>
        <Text style={styles.result}>2:1</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.nick}>elPulokohgflt</Text>
      </View>
    </View>
  );
}
