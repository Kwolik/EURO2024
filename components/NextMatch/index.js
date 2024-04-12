import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";
import CountryFlag from "react-native-country-flag";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function NextMatch() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.row}>
          <Ionicons name="football-outline" style={styles.icon} />
          <Text style={styles.info}>20.06</Text>
        </View>
        <View style={styles.row}>
          <Ionicons name="timer-outline" style={styles.icon} />
          <Text style={styles.info}>15:00</Text>
        </View>
      </View>
      <View style={styles.flags}>
        <CountryFlag isoCode="fr" size={36} style={styles.flag} />
        <CountryFlag isoCode="pl" size={36} style={styles.flag} />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.team}>Francja - Polska</Text>
      </View>
    </View>
  );
}
