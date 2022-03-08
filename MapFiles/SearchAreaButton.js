import React from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import Colors from "../CustomObjects/Colors.js";
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

    backgroundColor: Colors.Primary,
    borderRadius: 10,
    //borderWidth: 2,
    //borderColor: Colors.Primary2,
    overflow: "hidden",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: Colors.Secondary2,
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: -1, height: 1 },
  },
});

export default SearchAreaButton;
