import { Text, TouchableOpacity, SafeAreaView, View } from "react-native";
import React, { useCallback, useRef, useState } from "react";
import styles from "./styles.js";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ResultList } from "../ResultList.js";
import { FlatList } from "react-native-gesture-handler"; //Jedyne flatlist ktore działa w BottomSheet
import CountryFlag from "react-native-country-flag";
import { db, auth } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";

export default function TypeResult(props) {
  // ref
  const bottomSheetRef = useRef(BottomSheet);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);

  const value = [0, 1, 2];
  const [result, setResult] = useState("");

  const typeScore = (result) => {
    setResult("");
    setDoc(doc(db, "users", auth.currentUser.uid, "types", props.matchid), {
      type: result,
      points: 0,
      winner: "",
    });
  };

  const typeScore1 = (win) => {
    setDoc(doc(db, "users", auth.currentUser.uid, "types", props.matchid), {
      type: result,
      points: 0,
      winner: win,
    });
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaView style={styles.bottomSheet}>
        <BottomSheet
          ref={bottomSheetRef}
          onChange={handleSheetChanges}
          enablePanDownToClose={false} //wystarczy zmienic na true by calkiem potem znikło
          snapPoints={["5%", "60%", "100%"]}
          backgroundStyle={{ backgroundColor: "#003279" }}
          handleIndicatorStyle={{ backgroundColor: "#FFFFFF" }}
        >
          <BottomSheetView style={styles.contentContainer}>
            {/* <Text style={styles.title}>Obstawianie meczy 🎉</Text> */}
            {result != "" && (
              <View style={styles.overtime}>
                <Text style={styles.title}>Kto wygra w dogrywce?</Text>
                <TouchableOpacity
                  style={styles.top}
                  onPress={() => typeScore1(props.club1)}
                >
                  <CountryFlag
                    isoCode={props.club1id ? props.club1id : ""}
                    size={32}
                  />
                  <Text style={styles.nick}>{props.club1}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.top}
                  onPress={() => typeScore1(props.club2)}
                >
                  <CountryFlag
                    isoCode={props.club2id ? props.club2id : ""}
                    size={32}
                  />
                  <Text style={styles.nick}>{props.club2}</Text>
                </TouchableOpacity>
              </View>
            )}
            {value.map((id, index) => (
              <View style={styles.viewResult} key={index}>
                <Text style={styles.title}>
                  {id == 0 ? "Remis" : id == 1 ? props.club1 : props.club2}
                </Text>
                <FlatList
                  data={ResultList}
                  numColumns={1}
                  horizontal={true}
                  renderItem={({ item, index }) =>
                    item.type == id && (
                      <TouchableOpacity
                        key={index}
                        style={styles.typeResult}
                        onPress={() =>
                          props.type == 1 &&
                          item.value.substring(0, 1) ==
                            item.value.substring(2, 3)
                            ? setResult(item.value)
                            : typeScore(item.value)
                        }
                      >
                        <Text style={styles.resultText}>{item.value}</Text>
                      </TouchableOpacity>
                    )
                  }
                />
              </View>
            ))}
          </BottomSheetView>
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
