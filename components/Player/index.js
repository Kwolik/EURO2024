import { View, Text, Image } from "react-native";
import React, { useState, useEffect } from "react";
import styles from "./styles.js";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { db } from "../../firebaseConfig.js";
import { doc, onSnapshot } from "firebase/firestore";

export default function Player(props) {
  const [data, setData] = useState();

  useEffect(() => {
    const todoRef = doc(db, "users", props.id, "types", props.matchid);

    const unsubscribe = onSnapshot(todoRef, (docSnap) => {
      if (docSnap.exists()) {
        console.log("Document data2:", docSnap.data());
        setData(docSnap.data());
      } else {
        console.log("No such document!");
      }
    });
    
    return () => unsubscribe();
  }, [props.matchid]);
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <MaterialCommunityIcons name="cards" style={styles.icon} />
        <Text style={styles.points}>{data && data.points}</Text>
        {props.photo ? (
          <Image style={styles.avatar} source={{ uri: props.photo }} />
        ) : (
          <Image
            style={styles.avatar}
            source={require("../../assets/EURO2024logo.png")}
          />
        )}
        <Text style={styles.result}>{data && data.type}</Text>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.nick}>{props.name}</Text>
      </View>
    </View>
  );
}
