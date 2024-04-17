import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles.js";

export default function TopRanked() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.mainBackground}>
          <Image
            style={styles.avatar}
            source={require("../../assets/EURO2024logo.png")}
          />
          <Text style={styles.nick}>Elpulokomvkjj</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.points}>32 punktów</Text>
        </View>
      </View>
      <View style={styles.top}>
        <View style={styles.firstPlace}>
          <Image
            style={styles.avatarFirst}
            source={require("../../assets/EURO2024logo.png")}
          />
          <Text style={styles.nick}>Elpulokomvkjj</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.points}>35 punktów</Text>
        </View>
      </View>
      <View style={styles.top}>
        <View style={[styles.mainBackground, styles.color3]}>
          <Image
            style={styles.avatar}
            source={require("../../assets/EURO2024logo.png")}
          />
          <Text style={styles.nick}>Elpulokomvkjj</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.points}>30 punktów</Text>
        </View>
      </View>
    </View>
  );
}
