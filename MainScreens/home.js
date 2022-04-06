import React from "react";
import {
  View,
  FlatList,
  StyleSheet,
  useWindowDimensions,
  Image,
  Text,
  StatusBar,
  ImageBackground,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import Colors from "../CustomObjects/Colors";
import { LinearGradient } from "expo-linear-gradient";
import BItem from "../HomeScreenFiles/ItemButton";
import CHeader from "../CustomObjects/header.js";
import CText from "../CustomObjects/CustomText.js";
import CTextHeader from "../CustomObjects/CTextHeader";

import HomeBackground from "../HomeScreenFiles/Imagini/HomeScreenBackGround.png";

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
    <ImageBackground
      source={{ uri: Image.resolveAssetSource(HomeBackground).uri }}
      style={{ height: "100%", width: "100%" }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
        }}
      >
        <CHeader HeaderStyle={{ position: "relative" }} />

        <FlatList
          contentContainerStyle={{ paddingTop: StatusBar.currentHeight * 1 }}
          data={informatii}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <CTextHeader
              text="Regiuni"
              style={{
                fontSize: width / 7,
                color: Colors.Primary,
                textShadowColor: Colors.Black,
                textShadowOffset: { width: -1, height: 1 },
                textShadowRadius: 10,
                textAlign: "center",
                marginBottom: "4%",
              }}
            />
          }
        />

        <FocusAwareStatusBar
          backgroundColor={Colors.Primary}
          barStyle="light-content"
        ></FocusAwareStatusBar>
      </View>
    </ImageBackground>
  );
}

export default Home;
