import { View, ImageBackground, Text, Image } from "react-native";
import React from "react";
import styles from "./styles.js";
import Foundation from "react-native-vector-icons/Foundation";
import RowMatch from "../../../components/RowMatch/index.js";

export default function MatchesScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/background.jpg")}
        style={styles.image}
      >
        <View style={styles.profile}>
          <Image
            style={styles.avatar}
            source={require("../../../assets/EURO2024logo.png")}
          />
          <View style={styles.top}>
            <View style={styles.space}></View>
            <Text style={styles.nick}>elPulokogftyd</Text>
            <View style={styles.viewPoints}>
              <Text style={styles.points}>42 </Text>
              <Text style={styles.nick}>punkty</Text>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.viewBottom}>
              <Foundation name="pencil" style={styles.icon} />
              <Text style={styles.desc}>Edytuj swoje dane</Text>
            </View>
          </View>
          <Text style={styles.position}>#2</Text>
        </View>

        <View style={styles.profile}>
          <View style={styles.top}>
            <Text style={styles.info1}>Mistrz</Text>
            <Text style={styles.type1}>Anglia</Text>
            <Foundation name="pencil" style={styles.icon1} />
          </View>
          <View style={styles.bottomKing}>
            <Text style={styles.info2}>Król strzelców</Text>
            <Text style={styles.type2}>Robert Lewandowski</Text>
            <Foundation name="pencil" style={styles.icon2} />
          </View>
        </View>

        <View style={styles.list}>
          <RowMatch />
          <RowMatch />
          <RowMatch />
        </View>
      </ImageBackground>
    </View>
  );
}
