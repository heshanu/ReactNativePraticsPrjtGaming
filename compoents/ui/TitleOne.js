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
        , color: 'black', borderWidth: 2, borderColor: 'black',
        padding: 10, marginVertical: 10
    }
})