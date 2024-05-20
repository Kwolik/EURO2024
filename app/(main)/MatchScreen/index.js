import { View, ImageBackground, Text, FlatList } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles.js";
import CountryFlag from "react-native-country-flag";
import Player from "../../../components/Player/index.js";
import { db } from "../../../firebaseConfig.js";
import {
  doc,
  getDoc,
  getDocs,
  query,
  collection,
  orderBy,
} from "firebase/firestore";
import { useRoute } from "@react-navigation/native";
import TypeResult from "../../../components/TypeResult/index.js";

export default function MatchScreen() {
  const [match, setMatch] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const route = useRoute();

  const updateMachtes = async () => {
    const todoRef = doc(db, "matches", route.params.id);
    const docSnap = await getDoc(todoRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setMatch(docSnap.data());
    }
  };

  const users = async () => {
    const todoRef = collection(db, "users");
    const q = query(todoRef, orderBy("name", "desc"));
    const doc_refs = await getDocs(q);
    const users = [];

    doc_refs.forEach((doc) => {
      users.push({
        id: doc.id,
        name: doc.data().name,
        photo: doc.data().photo,
      });
    });
    setUserInfo(users);
  };

  useEffect(() => {
    updateMachtes();
    users();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/backgroundMatch.jpg")}
        style={styles.image}
      >
        <View>
          <View style={styles.top}>
            <View style={styles.info}>
              <Text style={styles.date}>{match.date}</Text>
              <Text style={styles.date}>{match.hour}</Text>
            </View>
            <View style={styles.mainTeams}>
              <CountryFlag
                isoCode={match.club1id ? match.club1id : ""}
                size={42}
              />
              <Text style={styles.result}>{match.result}</Text>
              <CountryFlag
                isoCode={match.club2id ? match.club2id : ""}
                size={42}
              />
            </View>
          </View>
          <View style={styles.bottom}>
            <Text style={styles.teams}>
              {match.club1} - {match.club2}
            </Text>
          </View>
        </View>
        <View style={styles.flatlist}>
          <FlatList
            data={userInfo}
            numColumns={3}
            contentContainerStyle={{
              justifyContent: "space-between",
            }}
            renderItem={({ item }) => (
              <Player
                id={item.id}
                name={item.name}
                photo={item.photo}
                matchid={route.params.id}
              />
            )}
          />
        </View>
        <TypeResult
          club1={match.club1}
          club1id={match.club1id}
          club2={match.club2}
          club2id={match.club2id}
          matchid={route.params.id}
          type={match.typeMatch}
        />
      </ImageBackground>
    </View>
  );
}
