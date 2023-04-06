import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constraints/colors";

const GuessLogItem = (props) => {
    return <View style={styles.listItem}>
        <Text style={styles.itemText}>#{props.roundNumber}</Text>
        <Text style={styles.itemText}>Guess Number{props.guess}</Text>
    </View>
}

export default GuessLogItem;

const styles = StyleSheet.create({
    listItem: {
        borderColor: Colors.primary800,
        backgroundColor: Colors.accent500,marginBottom: 10, padding: 10, width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderRadius: 12, marginVertical: 10, padding: 15,
        justifyContent: 'space-between', shadowColor: 'black', shadowOpacity: 0.26, shadowOffset: { width: 0, height: 2 }, shadowRadius: 8, elevation: 5,
        flexDirection: 'row', width: '100%', elevation: 5, shadowColor: 'black', shadowOpacity: 0.26, shadowOffset: { width: 0, height: 2 }, shadowRadius: 8
    },
    itemText: {
        fontFamily: 'open-sans-bold',
    }
})