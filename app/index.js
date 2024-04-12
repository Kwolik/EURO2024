import { StyleSheet, View, Text } from "react-native";
import React from "react";
//import LoginScreen from "./(auth)/LoginScreen";
import { AuthStore } from "../store";
import { useRouter, useSegments, useRootNavigationState } from "expo-router";

//Upewnic sie co do status bara

export default function Page() {
  const segments = useSegments();
  const router = useRouter();
  const navigationState = useRootNavigationState();

  const { initialized, isLoggedIn } = AuthStore.useState();

  React.useEffect(() => {
    if (!navigationState?.key || !initialized) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!isLoggedIn && !inAuthGroup) {
      router.replace("/LoginScreen");
    } else if (isLoggedIn) {
      router.replace("/HomeScreen");
    }
  }, [segments, navigationState?.key, initialized]);
  return (
    <View style={styles.container}>
      <Text>LOADING...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "auto", //upewnic sie czy background dobrze sie skaluje
  },
});
