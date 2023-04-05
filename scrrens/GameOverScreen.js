import React from "react";
import {SafeAreaView ,StyleSheet} from "react-native";

//importing colors
//importing  components
import TitleOne from "../compoents/ui/TitleOne";
import PrimaryButton from "../compoents/ui/PrimaryButton";

const GameOverScreen = () => {
    return (
        <SafeAreaView style={styles.inputContainer}>
            <TitleOne title="Game Over Screen" />
            <PrimaryButton title="New Game" />
        </SafeAreaView>
    )
}

export default GameOverScreen;

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
    }
});