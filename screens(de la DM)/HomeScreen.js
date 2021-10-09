import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>If you can see this message then the app is working!</Text>
      <Text>Pretty cool, right?</Text>
      <Button
        title="My Profile"
        color="blue"
        onPress={() => navigation.navigate("User")}
      />
      {/* <StatusBar style="auto" /> */}
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

export default HomeScreen;
