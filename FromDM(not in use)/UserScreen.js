import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  useWindowDimensions,
} from "react-native";

function UserScreen() {
  const { height, width } = useWindowDimensions();

  return (
    <View style={{ ...styles.container, paddingVertical: 10 }}>
      <Text>Esti utilizator de aplicatie de OffCamping</Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default UserScreen;
