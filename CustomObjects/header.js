import React from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  StatusBar,
  FocusAwareStatusBar,
} from "react-native";
import Colors from "./Colors";
import CText from "./CustomText";

const CHeader = (props) => {
  const { height, width } = useWindowDimensions();
  return (
    <View
      style={{
        ...styles.headerBox,
        ...props.HeaderStyle,
        height: "7%",
      }}
    ></View>
  );
};

const styles = StyleSheet.create({
  headerBox: {
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "center",

    top: 0,
    width: "100%",

    backgroundColor: Colors.Primary,

    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,

    elevation: 5,
  },

  headerText: {
    fontSize: 45,
    color: "#404040",
    textShadowColor: "gray",
    textAlign: "center",
    marginBottom: "1%",
  },
});

export default CHeader;
