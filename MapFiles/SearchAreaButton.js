import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";

import { Shadow } from "react-native-shadow-2";

import CText from "../CustomObjects/CustomText";

const SearchAreaButton = ({
  MarkerPopUp,
  setUserCenter,
  UserRegion,
  height,
  width,
}) => {
  return (
    <View style={{ ...styles.container, bottom: height / 40 }}>
      <Shadow>
        <TouchableOpacity
          style={{ ...styles.button, height: height / 13, width: width / 1.5 }}
          onPress={() => {
            if (!MarkerPopUp) {
              setUserCenter({
                latitude: UserRegion.latitude,
                longitude: UserRegion.longitude,
              });
            }
          }}
        >
          <CText
            text="Cauta in zona asta"
            style={{ ...styles.text, fontSize: width / 15 }}
          />
        </TouchableOpacity>
      </Shadow>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignSelf: "center",

    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#404040",
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: -1, height: 1 },
  },
});

export default SearchAreaButton;
