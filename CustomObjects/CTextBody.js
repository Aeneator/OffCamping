import React from "react";
import { Text, StyleSheet } from "react-native";

const CTextBody = (props) => {
  return <Text style={[styles.DefaultText, props.style]}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  DefaultText: {
    fontFamily: "Roboto-Regular",
    fontSize: 60,
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 1,
  },
});

export default CTextBody;
