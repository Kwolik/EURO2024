import React from "react";
import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="HomeScreen/index"
        options={{ headerShown: false, statusBarColor: "#003279" }}
      />
    </Stack>
  );
}
