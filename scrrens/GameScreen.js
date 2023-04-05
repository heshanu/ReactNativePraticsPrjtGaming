import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, SafeAreaView } from "react-native";

//import number container
import NumberContainer from "../compoents/game/NumberContainer";

//import colors
import Colors from "../constraints/colors";

//import button
import PrimaryButton from "../compoents/ui/PrimaryButton";

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

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = (props) => {
    const initialGuess = generateRandomBetween(minBoundary, maxBoundary, props.onNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);

    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < props.onNumber) || (direction === 'greater' && currentGuess > props.onNumber)) {
            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }])
            return;
        }
        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber)

    }
    return (
        <SafeAreaView style={styles.screen}>
            <Text>
                <Text> Oppoent's Guess</Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <TitleOne title="Guess a Number" style={styles.title} />
                <View>
                    <TitleOne title="Your Number" style={styles.title} />
                    <Text>{props.onNumber}</Text>
                </View>
                <View>
                    <Text>Higher or lower</Text>
                    <View>
                        <PrimaryButton title="-" onPress={nextGuessHandler.bind(this, 'lower')} />
                        <PrimaryButton title="+" onPress={nextGuessHandler.bind(this, 'greater')} />
                    </View>

                </View>
            </Text>
        </SafeAreaView>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1, padding: 24
    },
    title: {
        fontSize: 20, fontWeight: 'bold', color: '#fff'
    },


})