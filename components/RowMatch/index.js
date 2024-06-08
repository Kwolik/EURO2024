import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles.js";
import CountryFlag from "react-native-country-flag";
import { useRouter, useLocalSearchParams } from "expo-router";
import { db } from "../../firebaseConfig.js";
import { doc, getDoc } from "firebase/firestore";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function RowMatch(props) {
  const [match, setMatch] = useState([]);
  const router = useRouter();
  const params = useLocalSearchParams();
  const { id = props.id } = params;

  const updateMachtes = async () => {
    const todoRef = doc(db, "matches", id);
    const docSnap = await getDoc(todoRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      setMatch(docSnap.data());
    }
  };

  useEffect(() => {
    updateMachtes();
  }, []);

  return (
    props.club1 != "" &&
    props.club2 != "" && (
      <TouchableOpacity
        style={styles.container}
        onPress={() =>
          router.navigate({ pathname: "/MatchScreen", params: { id: id } })
        }
      >
        {props.points > -1 && (
          <MaterialCommunityIcons
            name="cards"
            style={[
              styles.icon,
              props.points == 0
                ? { color: "#ed1c24" }
                : props.points == 1 || props.points == 2
                ? { color: "#fdee00" }
                : { color: "#00c165" },
            ]}
          />
        )}
        {props.points > -1 && (
          <Text
            style={[
              styles.points,
              props.points == 0
                ? { color: "#FFFFFF" }
                : props.points == 1 || props.points == 2
                ? { color: "#000000" }
                : { color: "#FFFFFF" },
            ]}
          >
            {props.points}
          </Text>
        )}
        <View style={styles.top}>
          <Text style={styles.info}>
            {props.date ? props.date : match.date}
          </Text>
          <CountryFlag
            isoCode={
              props.club1id
                ? props.club1id
                : match && match.club1id
                ? match.club1id
                : ""
            }
            size={28}
          />
          <Text style={styles.result}>
            {props.result ? props.result : match.result}
          </Text>
          <CountryFlag
            isoCode={
              props.club2id
                ? props.club2id
                : match && match.club2id
                ? match.club2id
                : ""
            }
            size={28}
          />
          <Text style={styles.info}>
            {props.hour ? props.hour : match.hour}
          </Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.teams}>
            {props.club1 ? props.club1 : match.club1} -{" "}
            {props.club2 ? props.club2 : match.club2}
          </Text>
        </View>
      </TouchableOpacity>
    )
  );
}
