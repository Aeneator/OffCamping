import React from "react";
import { TouchableOpacity, Image, View, StyleSheet } from "react-native";

import CloseImg from "../assets/ImageNeeds/close-button.png";

const CloseButton = ({ onpress, newStyle }) => {
  return (
    <View style={[styles.ButtonStyle, newStyle]}>
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          onpress(false);
        }}
      >
        <Image
          source={{ uri: Image.resolveAssetSource(CloseImg).uri }}
          style={{ height: "50%", aspectRatio: 1 / 1 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ButtonStyle: {
    backgroundColor: "white",
    aspectRatio: 1 / 1,
    height: "7%",

    alignSelf: "flex-start",

    position: "absolute",
    marginTop: 40,
    marginLeft: 10,

    borderRadius: 360,
    elevation: 5,
  },
});

export default CloseButton;
