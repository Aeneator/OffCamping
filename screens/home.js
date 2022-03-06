import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  Text,
  StatusBar,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import Colors from "../CustomObjects/Colors";

import BItem from "../HomeScreenFiles/ItemButton";
import CHeader from "../CustomObjects/header.js";
import CText from "../CustomObjects/CustomText.js";

import informatii from "../HomeScreenFiles/locationButtonData.js";

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? (
    <StatusBar {...props} translucent={true} />
  ) : (
    <StatusBar
      translucent={true}
      backgroundColor={"rgba(0,0,0,0)"}
      barStyle={"dark-content"}
    />
  );
}

function Home({ navigation }) {
  const { height, width } = useWindowDimensions();
  function navigationHandler(lat, long, zoom) {
    navigation.navigate("TheTabs", {
      screen: "MapScreen",
      params: {
        latitudine: lat,
        longitudine: long,
        zoom: zoom,
        firstLoad: true,
      },
    });
  }

  const renderItem = ({ item }) => {
    return (
      <BItem
        Nume={item.nume}
        Imagine={item.imagine}
        latitudine={item.latitudine}
        longitudine={item.longitudine}
        zoom={item.zoom}
        onPress={navigationHandler}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        contentContainerStyle={{ paddingTop: StatusBar.currentHeight * 1.3 }}
        data={informatii}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <CText
            text="Regiuni"
            style={{
              fontSize: 45,
              color: "black",
              marginTop: 10,
              textShadowColor: "rgba(0,0,0,0.2)",
              textAlign: "center",
              marginBottom: "3%",
            }}
          />
        }
      />

      <FocusAwareStatusBar
        backgroundColor={Colors.Primary}
        barStyle="light-content"
      ></FocusAwareStatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
  },
});

export default Home;
