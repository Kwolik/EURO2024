import { View, ImageBackground, Text } from "react-native";
import React from "react";
import styles from "./styles.js";
import CountryFlag from "react-native-country-flag";
import Player from "../../../components/Player/index.js";

export default function MatchScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/backgroundMatch.jpg")}
        style={styles.image}
      >
        <View>
          <View style={styles.top}>
            <View style={styles.info}>
              <Text style={styles.date}>14.06</Text>
              <Text style={styles.date}>17:00</Text>
            </View>
            <View style={styles.mainTeams}>
              <CountryFlag isoCode="fr" size={46} />
              <Text style={styles.result}>2 : 0</Text>
              <CountryFlag isoCode="pl" size={46} />
            </View>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.teams}>Francja - Polska</Text>
          </View>
        </View>
        <View style={styles.players}>
          <Player />
          <Player />
          <Player />
        </View>
        <View style={styles.players}>
          <Player />
          <Player />
          <Player />
        </View>
        <View style={styles.players}>
          <Player />
          <Player />
          <Player />
        </View>
        <View></View>
      </ImageBackground>
    </View>
  );
}
