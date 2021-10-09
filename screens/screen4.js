import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

function Screen4({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Screen4</Text>
      <Button title="Click Here" onPress {...() => alert("Button CLicked!")} />
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

export default Screen4;
