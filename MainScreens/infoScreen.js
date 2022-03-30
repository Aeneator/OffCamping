import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  Pressable,
  useWindowDimensions,
  Image,
  ImageBackground,
  StatusBar,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Colors from "../CustomObjects/Colors";
import CHeader from "../CustomObjects/header";

import { useIsFocused } from "@react-navigation/native";
import LogoAplicatie from "../assets/ImageNeeds/LogoAplicatie.png";
import CTextBody from "../CustomObjects/CTextBody";
import CTextHeader from "../CustomObjects/CTextHeader";
import CHyperlink from "../CustomObjects/CHyperlink";
import BackGroundImg from "../assets/ImageNeeds/InfoScreenBackground.png";
import { Header } from "@react-navigation/stack";

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

const HeaderDiv = 16;
const BodyDiv = 23;

const ThisHeader = (props) => {
  const { height, width } = useWindowDimensions();
  return (
    <CTextHeader
      text={props.text}
      style={{
        fontSize: width / HeaderDiv,
        color: Colors.White,
      }}
    />
  );
};

const ThisBody = (props) => {
  const { height, width } = useWindowDimensions();
  return (
    <CTextBody
      text={props.text}
      style={[
        {
          fontSize: width / BodyDiv,
          color: "rgba(215, 215, 215, 1)",
        },
        props.style,
      ]}
    />
  );
};

const ThisHyperLink = (props) => {
  return (
    <Pressable onPress={() => Linking.openURL(props.link)}>
      {({ pressed }) => (
        <ThisBody
          style={{
            textDecorationLine: "underline",
            color: pressed ? "rgba(255,255,255,0.5)" : "rgba(215, 215, 215, 1)",
          }}
          text={props.text}
        />
      )}
    </Pressable>
  );
};

function infoScreen({ navigation }) {
  const { height, width } = useWindowDimensions();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.Black }}>
      <ImageBackground
        source={{ uri: Image.resolveAssetSource(BackGroundImg).uri }}
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(26, 26, 26, 0.5)",
        }}
      >
        <View style={styles.blackOverlay}>
          <CHeader HeaderStyle={{ position: "relative" }} />
          <View style={{ height: StatusBar.currentHeight * 1 }} />
          <Image
            source={require("../assets/ImageNeeds/LogoAplicatie.png")}
            style={{
              height: "17%",
              aspectRatio: 1,
            }}
          />

          <View
            style={{
              flex: 1,
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <View style={styles.box}>
              <ThisHeader text={"Cine suntem?"} />

              <ThisBody
                text={
                  "Suntem un grup format din tineri mânați de dragostea pentru natură si dorința de auto-depașire."
                }
              />
            </View>

            <View style={styles.box}>
              <ThisHeader text={"Website:"} />
              <ThisHyperLink
                text={"www.off-camping.com"}
                link={"https://www.off-camping.com/despre-noi"}
              />
            </View>
            <View style={styles.box}>
              <ThisHeader text={"Instagram:"} />
              <ThisHyperLink
                text={"@off.camping"}
                link={"https://www.instagram.com/off.camping/"}
              />
            </View>
            <View style={styles.box}>
              <ThisHeader text={"Email:"} />
              <ThisBody text={"office.offcamping@gmail.com"} />
            </View>

            <View
              style={{
                height: "8.5%",
                backgroundColor: "rgba(230, 113, 0, 0.9)",
                width: width / 2.5,
                //marginTop: "8%",
                justifyContent: "center",
                borderRadius: 10,
              }}
            >
              <CHyperlink
                text={"CONTACT"}
                link={"https://www.off-camping.com/contact"}
                style={{
                  fontSize: width / HeaderDiv,
                }}
                PressedColor={"rgba(255,255,255,0.5)"}
                DefaultColor={"rgba(255,255,255,1)"}
              />
            </View>
          </View>
        </View>

        <FocusAwareStatusBar
          backgroundColor={Colors.Primary}
          barStyle="light-content"
        ></FocusAwareStatusBar>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    width: "100%",
    //paddingTop: "8%",
    alignItems: "center",
    //backgroundColor: "rgba(0, 255, 255, 0.2)",
  },
  blackOverlay: {
    flex: 1,
    backgroundColor: "rgba(26, 26, 26, 0.65)",
    alignItems: "center",
  },
});

export default infoScreen;
