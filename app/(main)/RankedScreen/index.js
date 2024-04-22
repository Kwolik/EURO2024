import { View, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles.js";
import TopRanked from "../../../components/TopRanked/index.js";
import PlayerRanked from "../../../components/PlayerRanked/index.js";

export default function RankedScreen() {
  const players = [{ id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }, { id: 8 }];
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/background.jpg")}
        style={styles.image}
      >
        <View style={styles.topRanked}>
          <TopRanked />
        </View>
        <View style={styles.playerRanked}>
          {players.map((player) => (
            <PlayerRanked key={player.id} position={player.id} />
          ))}
        </View>
      </ImageBackground>
    </View>
  );
}
