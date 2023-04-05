import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

//import screens
import StartGameScreen from "./scrrens/StartGameScreen";
import GameScreen from "./scrrens/GameScreen";

//importing colors
import Colors from "./constraints/colors";
export default function App() {
  const [userNumber, setUserNumber] = useState();

  const pickedNumberHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {

    screen = <GameScreen onNumber={userNumber} />
  }

  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/favicon.png")}
        style={styles.rootScreen}
        resizeMethod="scale"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  containerOne: {
    backgroundColor: "#fff",
    marginHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.primary600
    // "#ddb52f",

  },
  backgroundImage: {
    opacity: 0.15,
  },
});
