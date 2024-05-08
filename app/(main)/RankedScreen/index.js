import { View, ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles.js";
import TopRanked from "../../../components/TopRanked/index.js";
import PlayerRanked from "../../../components/PlayerRanked/index.js";
import { db } from "../../../firebaseConfig.js";
import { orderBy, collection, query, getDocs } from "firebase/firestore";

export default function RankedScreen() {
  const [matches, setMatches] = useState([]);

  const topPlayers = async () => {
    const todoRef = collection(db, "users");
    const q = query(todoRef, orderBy("points", "desc"));
    const doc_refs = await getDocs(q);
    const match = [];

    doc_refs.forEach((doc) => {
      match.push({
        id: doc.id,
        name: doc.data().name,
        photo: doc.data().photo,
        points: doc.data().points,
      });
    });
    setMatches(match);
  };

  useEffect(() => {
    topPlayers();
  }, []);

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
          {matches.map((player, number) => (
            <PlayerRanked
              key={player.id}
              position={number + 1}
              points={player.points}
              name={player.name}
              photo={player.photo}
            />
          ))}
        </View>
      </ImageBackground>
    </View>
  );
}
