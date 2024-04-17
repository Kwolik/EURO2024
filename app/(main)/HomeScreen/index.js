import {
  View,
  ImageBackground,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import styles from "./styles.js";
import NextMatch from "../../../components/NextMatch/index.js";
import TopRanked from "../../../components/TopRanked/index.js";
import Ionicons from "react-native-vector-icons/Ionicons";
import RowMatch from "../../../components/RowMatch/index.js";
import ChampionRow from "../../../components/ChampionRow/index.js";
import KingFootballerRow from "../../../components/KingFootballerRow/index.js";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/background.jpg")}
        style={styles.image}
      >
        <ScrollView>
          <View>
            <NextMatch />
          </View>
          <View>
            <TopRanked />
          </View>
          <View style={styles.plates}>
            <TouchableOpacity
              style={styles.plate}
              onPress={() => router.replace("/MatchesScreen")}
            >
              <View style={styles.icon}>
                <Ionicons name="football-outline" style={styles.iconMain} />
              </View>
              <View style={styles.bottom}>
                <Text style={styles.name}>Mecze</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.plate}>
              <View style={styles.icon}>
                <Ionicons name="star-outline" style={styles.iconMain} />
              </View>
              <View style={styles.bottom}>
                <Text style={styles.name}>Ranking</Text>
              </View>
            </View>
            <View style={styles.plate}>
              <View style={styles.icon}>
                <Ionicons name="settings-outline" style={styles.iconMain} />
              </View>
              <View style={styles.bottom}>
                <Text style={styles.name}>Profil</Text>
              </View>
            </View>
          </View>
          <View>
            <RowMatch />
            <RowMatch />
            <RowMatch />
          </View>
          <View>
            <ChampionRow />
            <ChampionRow />
          </View>
          <View>
            <KingFootballerRow />
            <KingFootballerRow />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
