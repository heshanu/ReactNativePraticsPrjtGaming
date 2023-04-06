import React, { useState } from "react";
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

//import screens
import StartGameScreen from "./scrrens/StartGameScreen";
import GameScreen from "./scrrens/GameScreen";
import GameOverScreen from "./scrrens/GameOverScreen";

//importing colors
import Colors from "./constraints/colors";

//importing  components
import TitleOne from "./compoents/ui/TitleOne";

//import expo-font
import { useFonts } from "expo-font";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(false);
  const [guessRounds, setGuessRounds] = useState(0);

  //use downloaded fonts
  /*
  const [fontsLoaded]=useFonts({

  });
  
  if(!fontsLoaded){
    return <AppLoading/>
  }*/

  const pickedNumberHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }

  const gameOverHandler = (numberOfRounds) => {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  const startNewGameHandler = () => {
    setGameIsOver(true);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen onNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} onStartNewGame={gameOverHandler} roundNumber={guessRounds} />
  }

  //setGAmeIsOver(true)
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
