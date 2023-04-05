import React from "react";
import { View, Text, StyleSheet } from "react-native";

import TitleOne from "../components/TitleOne";
const GameScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>

                <TitleOne title="Guess a Number" style={styles.title} />

                <View>
                    <Text>{props.onNumber}</Text>
                </View>
            </Text>
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1, padding: 24
    },
    title: {
        fontSize: 20, fontWeight: 'bold', color: '#fff'
    }

})