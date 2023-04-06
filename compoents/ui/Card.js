import React from "react";
import { View, Text, StyleSheet } from "react-native";

//import color
import Colors from "../../constraints/colors";

const Card = (props) => {
    return (
        <View style={styles.inputContainer}>
            <Text></Text>
        </View>
    )
}

export default Card;

const styles = StyleSheet.create({
   
    instructionText: {
        color: Colors.primary500, fontSize: 24
    }
})