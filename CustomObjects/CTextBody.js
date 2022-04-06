import React from "react";
import { Text, StyleSheet } from "react-native";

const CTextBody = (props) => {
  return (
    <Text
      style={[styles.DefaultText, props.style]}
      numberOfLines={props.NrOfLines ? props.NrOfLines : 0}
    >
      {props.text}
    </Text>
  );
};

const styles = StyleSheet.create({
  DefaultText: {
    fontFamily: "Poppins-Light",
    fontSize: 30,
    flexShrink: 1,
    color: "#343434",
    textAlign: "center",
  },
});

export default CTextBody;
