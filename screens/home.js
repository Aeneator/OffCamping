import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  useWindowDimensions,
} from "react-native";

function Home({ navigation }) {
  const [textLuis, setText] = useState("");
  const { height, width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Click Here"
        onPress={() => setText("Ce draci aveti pe voi?")}
      />

      <Button title="Clear" onPress={() => setText("")} />

      <Image
        source={{
          uri: "https://media.cancan.ro/unsafe/1260x709/smart/filters:contrast(5):format(webp):quality(80)/http://cancan.ro/wp-content/uploads/2021/06/img-34.jpg",
        }}
        style={{ width: 400, height: 400 }}
      />
      <Text style={{ ...styles.luisFont, fontSize: width / 10 }}>
        {textLuis}
      </Text>
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
    color: "rgb(255,20,147)",
  },
});

export default Home;
