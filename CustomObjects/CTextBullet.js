import React from "react";
import { Text, StyleSheet, View } from "react-native";
import CTextBody from "./CTextBody";

const CTextBullet = (props) => {
  let BulletSign = props.sign ? props.sign : "\u2022";
  return (
    <View style={{ flexDirection: "row", marginVertical: "1%" }}>
      <CTextBody
        style={[styles.DefaultText, props.style]}
        text={BulletSign + " "}
      />
      <CTextBody style={[styles.DefaultText, props.style]} text={props.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  DefaultText: {
    flexShrink: 1,
    textAlign: "left",
  },
});

export default CTextBullet;
