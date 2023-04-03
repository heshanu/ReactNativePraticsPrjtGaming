import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native-web";
import PrimaryButton from "../compoents/PrimaryButton";

const StartGameScreen = () => {
  return (
      <View style={styles.inputContainer}>
        <TextInput />
        <PrimaryButton title="Start" />
        <PrimaryButton title="Reset" />
      </View>
  );
};

export default StartGameScreen;
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 20,
    marginTop: 100,
    backgroundColor: "#72063c",
    borderRadius: 10,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  }
});
