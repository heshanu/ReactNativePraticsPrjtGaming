import React from "react";
import { View, Text } from "react-native";

const PrimaryButton = (props) => {
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
};

export default PrimaryButton;
