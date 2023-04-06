import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, SafeAreaView, FlatList } from "react-native";

//import number container
import NumberContainer from "../compoents/game/NumberContainer";

//import colors
import Colors from "../constraints/colors";

//import button
import PrimaryButton from "../compoents/ui/PrimaryButton";

//import title component
import TitleOne from "../compoents/ui/TitleOne";

import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from "../compoents/game/GuessLogItem";

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
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess === props.onNumber) {
            props.onGameOver(guessRounds.length);
            Alert.alert('Game Over', 'You Won!', [{ text: 'Play Again', style: 'cancel' }])
        }

    }, [currentGuess, props.onGameOver, props.onNumber]);


    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

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
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds]);
    }

    const guessRoundListLenth = guessRounds.length;

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
                    <View style={styles.buttonsContainer}>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton title="-" onPress={nextGuessHandler.bind(this, 'lower')}>
                                <Ionicons name="md-remove" size={24} color="white" />
                            </PrimaryButton>
                        </View>
                        <View style={styles.buttonContainer}>
                            <PrimaryButton title="+" onPress={nextGuessHandler.bind(this, 'greater')}>
                                <Ionicons name="md-add" size={24} color="white" />
                            </PrimaryButton>
                        </View>
                    </View>
                </View>
                <View>
                    <FlatList data={guessRounds} renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundListLenth - itemData.index} guess={itemData.item} />} keyExtractor={(item) => item} />
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
    buttonsContainer: {
        flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, width: 300, maxWidth: '80%'
    },
    buttonContainer: {
        flex: 1, padding: 10, margin: 10, width: 100
    }


})