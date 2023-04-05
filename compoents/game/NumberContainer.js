import react from "react";
import { View, Text, StyleSheet } from "react-native";

import Colors from "../../constraints/colors";

const NumberContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{props.children}</Text>
        </View>
    );
}

export default NumberContainer;
const styles = StyleSheet.create({
    container: {
        margin: 25,
        borderWidth: 5,
        borderColor: Colors.primary500,
        padding: 24,
        borderRadius: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
    numberText: {
        color: Colors.primary500,
        fontSize: 36, fontWeight: 'bold',
    }
});