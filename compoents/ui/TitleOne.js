import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constraints/colors";

const TitleOne = (props) => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    );
}

export default TitleOne;

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 18, color: 'black',
        fontWeight: 'bold'
        ,borderWidth: 2, borderColor: Colors.accent500,
        padding: 10, marginVertical: 10, color: Colors.accent500
    }
})