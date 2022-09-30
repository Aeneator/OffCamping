import React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Colors from "../CustomObjects/Colors.js";
import { Shadow } from "react-native-shadow-2";

import CText from "../CustomObjects/CustomText";
import CTextHeader from "../CustomObjects/CTextHeader.js";

const SearchAreaButton = ({ MarkerPopUp, setUserCenter, UserRegion }) => {
  const { height, width } = useWindowDimensions();
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
          <CTextHeader
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
    borderWidth: 2,
    borderColor: Colors.Primary2,
    overflow: "hidden",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: Colors.White,
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowColor: "rgba(0, 0, 0, 1)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4,
  },
});

export default SearchAreaButton;
