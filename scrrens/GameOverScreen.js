import React from "react";
import { SafeAreaView, StyleSheet, Image,View,Text} from "react-native";

//importing colors
//importing  components
import TitleOne from "../compoents/ui/TitleOne";
import PrimaryButton from "../compoents/ui/PrimaryButton";
import Colors from "../constraints/colors";

const GameOverScreen = (props) => {
    return (
        <SafeAreaView style={styles.rootContainer}>
            <TitleOne title="Game Over Screen" />
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../assets/favicon.png")} />
            </View>
            <Text style={styles.summeryText}>
                Your phone needed <Text style={styles.highLight}>{props.roundsNumber}</Text> rounds to guess the <Text style={styles.highLight}>{props.userNumber}</Text> number!</Text>
            <PrimaryButton title="New Game" onPress={props.onStartNewGame} />
        </SafeAreaView>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1, padding: 24, alignItems: "center", justifyContent: "center"
    },
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
    },

    imageContainer: {
        width: 400, height: 400, borderRadius: 200, overflow: "hidden", borderWidth: 3, borderColor: "black"
    },
    image: {
        width: "100%", height: "100%"
    },
    summeryText: {
        marginVertical: 16, textAlign: "center"
    },
    highLight: {
        color: Colors.primary500, fontFamily: "open-sans-bold"
    }

});