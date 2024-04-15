import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./styles.js";
import CountryFlag from "react-native-country-flag";

export default function ChampionRow() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <CountryFlag isoCode="fr" size={32} />
        <Text style={styles.team}>Francja</Text>
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
