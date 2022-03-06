import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";

function guidePage1({ navigation }) {
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
});

export default guidePage1;
