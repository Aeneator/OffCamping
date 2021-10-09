import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function Screen2({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Screen2</Text>
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

export default Screen2;
