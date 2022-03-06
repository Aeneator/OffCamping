import React from "react";
import { Text, StyleSheet } from "react-native";

const CText = (props) => {
  return <Text style={[styles.DefaultText, props.style]}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  DefaultText: {
    fontFamily: "Poppins-Regular",
    fontSize: 60,
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1.7, height: 1.7 },
    textShadowRadius: 1,
  },
});

export default CText;
