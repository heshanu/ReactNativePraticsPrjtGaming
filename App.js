import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./scrrens/StartGameScreen";
export default function App() {
  return (
    <View style={styles.containerOne}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  containerOne: {
    backgroundColor: "#fff",
    marginHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  }
  
});
