import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native-web";
import PrimaryButton from "../compoents/PrimaryButton";

const StartGameScreen = () => {
  const showMessage = () => {
    console.log("Start Game");
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Type here to translate!"
        style={styles.inputText}
        maxLength={20}
        keyboardType="numeric"
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton title="Start" style={styles.startGameScreenbutton} />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton title="Reset" style={styles.startGameScreenbutton} />
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
    //flexDirection: "row",
    //justifyContent: "space-between",
    padding: 20,
    marginTop: 100,
    backgroundColor: "#72063c",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    marginBottom: 20,
    paddingBottom: 10,
  },

  inputText: {
    height: 50,
    width: 50,
    flex: 0.5,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: "center",
    width: 200,
    height: 40,
    backgroundColor: "#fff",
    borderRadius:5,
    fontWeight: "bold",
    marginVertical: 10,
    fontWeight: "bold",
    borderBottomWidth: 5,
    borderBottom: "solid 10px #000",
    textAlign: "center",
  },

  startGameScreenbutton: {
    Flex: 0.5,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#rgb(0, 0, 255)",
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 2,
  },
});
