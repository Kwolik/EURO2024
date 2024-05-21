import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles.js";
import CountryFlag from "react-native-country-flag";
import { db } from "../../firebaseConfig.js";
import { collection, onSnapshot } from "firebase/firestore";
import { TeamList } from "../TeamList.js";

export default function ChampionRow() {
  const [king, setKing] = useState([]);
  const team = [];

  useEffect(() => {
    const todoRef = collection(db, "king");
    const unsubscribe = onSnapshot(todoRef, (querySnapshot) => {
      const kingData = [];
      querySnapshot.forEach((doc) => {
        kingData.push({
          id: doc.id,
          team: doc.data().team,
          photo: doc.data().photo,
          code: doc.data().code,
          name: doc.data().name,
        });
      });
      setKing(kingData);
    });

    return () => unsubscribe();
  }, []);

  king.map((item) => team.indexOf(item.team) == -1 && team.push(item.team));
  return team && team.length > 0 ? (
    team.map((item, index) => (
      <View style={styles.container} key={index}>
        <View style={styles.top}>
          {TeamList.map(
            (team, index) =>
              item == team.value && (
                <CountryFlag isoCode={team.code} size={32} key={index} />
              )
          )}
          <Text style={styles.team}>{item}</Text>
        </View>
        <View style={styles.bottom}>
          {king.map(
            (name, index) =>
              item == name.team &&
              name.photo && (
                <View style={styles.player} key={index}>
                  <Image
                    style={styles.avatar}
                    source={{
                      uri: name.photo,
                    }}
                  />
                  <Text style={styles.teams}>{name.name}</Text>
                </View>
              )
          )}
        </View>
      </View>
    ))
  ) : (
    <View>
      <Text>Poczekaj chwile</Text>
    </View>
  );
}
