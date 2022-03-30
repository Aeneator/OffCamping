import React from "react";
import { Linking, Pressable, StyleSheet } from "react-native";
import Colors from "./Colors";
import CText from "./CustomText";
import CTextBody from "./CTextBody";

const CHyperlink = (props) => {
  return (
    <Pressable onPress={() => Linking.openURL(props.link)}>
      {({ pressed }) => (
        <CTextBody
          style={[
            {
              textDecorationLine: "underline",
              color: pressed ? props.PressedColor : props.DefaultColor,
            },
            props.style,
          ]}
          text={props.text}
        />
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  DefaultText: {
    //textDecorationLine: "underline",
    //color: pressed ? "red" : "blue",
  },
});

export default CHyperlink;
