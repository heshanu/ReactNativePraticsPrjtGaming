import React, { useState } from "react";
import { View, TextInput, StyleSheet, Alert } from "react-native";

//import components
import PrimaryButton from "../compoents/ui/PrimaryButton";
import TitleOne from "../compoents/ui/TitleOne";
import Card from "../compoents/ui/Card";

//import constraints
import Colors from "../constraints/colors";
import { SafeAreaView } from "react-native-web";

const StartGameScreen = (props) => {
  const [enterNumber, setEnterNumber] = useState("");

  const numberInputHandle = (enterNumber) => {
    setEnterNumber(enterNumber);
  };

  const resetHandler = () => {
    setEnterNumber('');
  }

  const confirmInputHandle = () => {
    const choosenNum = parseInt(enterNumber);
    if (isNaN(choosenNum) || choosenNum <= 1 || choosenNum >= 99) {
      Alert.alert('Invalid Number!', 'Please enter more than 1 less than 100', [
        {
          text: 'Cancel',
          onPress: () => resetHandler,
          style: 'cancel',
        },
      ]);

      return;
    }
    props.onPickNumber(choosenNum);
  };

  return (
    <SafeAreaView style={styles.inputContainer}>
      <TitleOne title="Guess a Number" />
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        autoCapitalize="none"
        autoCorrect={false}
        value={enterNumber}
        keyboardType="number-pad"
        onChangeText={numberInputHandle}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton title="start" onPress={confirmInputHandle} />
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton title="end" onPress={resetHandler} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({

  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center", borderWidth: 5
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    // flex: 1,
  },

});
