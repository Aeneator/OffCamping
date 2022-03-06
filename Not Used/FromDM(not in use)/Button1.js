import React from "react";
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Button1 = (props) => {
  /* if (props.icon) {
    return (
      <TouchableOpacity
        style={{
          ...styles.textIconButton,
          alignSelf: props.centered ? "center" : "baseline",
        }}
        onPress={props.onPress}
      >
        <Ionicons name={props.icon} size={props.size} color="black" />
      </TouchableOpacity>
    );
  }

  if (props.text) {
    return (
      <TouchableOpacity
        style={{
          ...styles.textIconButton,
          alignSelf: props.centered ? "center" : "baseline",
        }}
        onPress={props.onPress}
      >
        <Text>{props.text}</Text>
      </TouchableOpacity>
    );
  } */

  return (
    <View
      style={{
        ...styles.primaryButton,
        backgroundColor: props.disabled && !props.isLoading ? "gray" : "black",
        width: props.width || "100%",
      }}
    >
      <TouchableOpacity
        style={styles.touchableComponent}
        disabled={props.disabled}
        onPress={props.onPress}
      >
        {!props.isLoading && (
          <Text color="white" centered>
            {props.title}
          </Text>
        )}
        {props.isLoading && <ActivityIndicator size="small" color="white" />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    marginVertical: 3,
    borderRadius: 20,
    height: 40,
  },
  textIconButton: {
    paddingHorizontal: 10,
  },
  touchableComponent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Button1;
