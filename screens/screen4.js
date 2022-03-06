import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

function Screen4({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <Text>PlaceHolder</Text>
    </View>
  );
}

const SpecialBox = (props) => {
  return (
    <View style={{ ...styles.box, backgroundColor: props.color }}>
      <Text style={styles.textProps}>{props.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "10%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  textProps: {
    fontSize: 20,
    color: "black",
  },
});

/* function Screen4({ navigation }) {
  return (
    <View style={{ padding: 50 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TextInput
          placeholder="Course Goal"
          style={{
            borderColor: "black",
            borderWidth: 1,
            padding: 10,
            width: "80%",
          }}
        />
        <Button title="ADD" />
      </View>

      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({}); */

export default Screen4;
