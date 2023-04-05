import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Colors from "../../constraints/colors";

const PrimaryButton = (props) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        //apply when button click or press both style
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInterContainer, styles.pressed]
            : styles.buttonInterContainer
        }
        onPress={props.onPress}
        android_ripple={{ color: Colors.primary500 }}
      >
        <Text style={styles.buttonText}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 5,
    margin: 4,
    overflow: "hidden",
  },
  buttonInterContainer: {
    backgroundColor: "red",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    elevation: 10,
    margin: 5,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.2,
  },
});
