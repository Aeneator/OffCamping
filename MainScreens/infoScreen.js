import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  useWindowDimensions,
  Image,
} from "react-native";

function infoScreen({ navigation }) {
  const [textLuis, setText] = useState("");
  const { height, width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text>PlaceHolder</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  luisFont: {
    color: "red",
  },
});

export default infoScreen;
