import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import Colors from "../CustomObjects/Colors";

import CText from "../CustomObjects/CustomText";

const BItem = ({ onPress, latitudine, longitudine, zoom, Nume, Imagine }) => {
  const { height, width } = useWindowDimensions();

  return (
    <View style={{ ...styles.item, height: height / 5, width: width / 1.1 }}>
      <ImageBackground source={{ uri: Imagine }} style={styles.BGImage}>
        <View style={styles.blackOverlay}>
          <TouchableOpacity
            style={styles.OpacityStyle}
            onPress={() => {
              onPress(latitudine, longitudine, zoom);
            }}
          >
            <CText style={styles.titleText} text={Nume} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 10,
    overflow: "hidden",

    borderRadius: 10,
    alignSelf: "center",

    elevation: 5,
  },

  titleText: {
    fontSize: 36,
    color: Colors.White,
    textAlign: "center",
  },

  OpacityStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  BGImage: {
    flex: 1,
  },

  blackOverlay: {
    flex: 1,
    backgroundColor: "rgba(26, 26, 26, 0.3)",
  },
});

export default BItem;
