import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles.js";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/background.jpg")}
        style={styles.image}
      >
        <View>
          <Text>HOME.......</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            router.replace("/LoginScreen");
          }}
        >
          <Text>Zmiana na logowanie</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
