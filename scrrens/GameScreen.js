import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

import NumberContainer from "../compoents/game/NumberContainer";

//import title component
import TitleOne from "../compoents/ui/TitleOne";

const generateRandomBetween = (min, max, exclude) => {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = (props) => {
    const initialGuess = generateRandomBetween(1, 100, props.onNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    return (
        <View style={styles.screen}>
            <Text>
                <Text> Oppoent's Guess</Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <TitleOne title="Guess a Number" style={styles.title} />
                <View>
                    <Text>{props.onNumber}</Text>
                </View>
                <View>
                    <Text>Higher or lower</Text>
               
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