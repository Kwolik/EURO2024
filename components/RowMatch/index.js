import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles.js";
import CountryFlag from "react-native-country-flag";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function RowMatch(props) {
  const router = useRouter();
  const params = useLocalSearchParams();
  const { id = props.id } = params;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        router.navigate({ pathname: "/MatchScreen", params: { id: id } })
      }
    >
      <View style={styles.top}>
        <Text style={styles.info}>{props.date}</Text>
        <CountryFlag isoCode={props.club1id ? props.club1id : ""} size={28} />
        <Text style={styles.result}>{props.result}</Text>
        <CountryFlag isoCode={props.club2id ? props.club2id : ""} size={28} />
        <Text style={styles.info}>{props.hour}</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.teams}>
          {props.club1} - {props.club2}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
