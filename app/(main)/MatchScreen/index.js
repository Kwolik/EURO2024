import {
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useCallback, useRef } from "react";
import styles from "./styles.js";
import CountryFlag from "react-native-country-flag";
import Player from "../../../components/Player/index.js";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function MatchScreen() {
  // ref
  const bottomSheetRef = useRef(BottomSheet);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
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
        <TouchableOpacity style={styles.button}>
          <View style={styles.viewButton}>
            <Text style={styles.textButton}>Obstaw mecz</Text>
          </View>
        </TouchableOpacity>
        <SafeAreaView style={styles.bottomSheet}>
          <BottomSheet
            ref={bottomSheetRef}
            onChange={handleSheetChanges}
            snapPoints={["10%", "60%", "100%"]}
          >
            <BottomSheetView style={styles.contentContainer}>
              <Text>Obstawianie meczy 🎉</Text>
            </BottomSheetView>
          </BottomSheet>
        </SafeAreaView>
      </ImageBackground>
    </GestureHandlerRootView>
  );
}
