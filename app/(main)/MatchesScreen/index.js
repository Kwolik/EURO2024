import { View, ImageBackground, FlatList } from "react-native";
import React from "react";
import styles from "./styles.js";
import NextMatch from "../../../components/NextMatch/index.js";
import RowMatch from "../../../components/RowMatch/index.js";

export default function MatchesScreen() {
  const matches = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/background.jpg")}
        style={styles.image}
      >
        <View>
          <NextMatch />
        </View>
        <View>
          <FlatList
            data={matches}
            numColumns={1}
            // renderItem={({ item }) => (
            //   <OneRowMatch
            //     id={item.id}
            //     club1={item.club1}
            //     club1id={item.club1id}
            //     club2={item.club2}
            //     club2id={item.club2id}
            //     date={item.date}
            //     hour={item.hour}
            //     result={item.result}
            //     navigation={navigation}
            //   />
            // )}
            renderItem={() => <RowMatch />}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
