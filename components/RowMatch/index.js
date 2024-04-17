import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles.js";
import CountryFlag from "react-native-country-flag";
import { useRouter } from "expo-router";

export default function NextMatch() {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.replace("/MatchScreen")}
    >
      <View style={styles.top}>
        <Text style={styles.info}>14.06</Text>
        <CountryFlag isoCode="fr" size={32} />
        <Text style={styles.result}>2 : 0</Text>
        <CountryFlag isoCode="pl" size={32} />
        <Text style={styles.info}>17:00</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.teams}>Francja - Polska</Text>
      </View>
    </TouchableOpacity>
  );
}
