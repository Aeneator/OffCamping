import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  useWindowDimensions,
  StatusBar,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { BackgroundImage } from "react-native-elements/dist/config";

import { Shadow } from "react-native-shadow-2";

import CText from "../CustomObjects/CustomText";
import CHeader from "../CustomObjects/header";

import DuringCampImg from "../MapGuideFiles/GuideImages/DuringCamping.png";
import BeforeCampImg from "../MapGuideFiles/GuideImages/BeforeCamping.png";
import AfterCampImg from "../MapGuideFiles/GuideImages/AfterCamping.png";
import GuideBackground from "../MapGuideFiles/GuideImages/GuideScreenBackGround.png";

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

const PickButton = ({ onPressFunction, Text, height, width, TheImage }) => {
  return (
    <View style={{ marginHorizontal: width / 7, marginTop: height / 10 }}>
      <Shadow>
        <View
          style={{
            ...styles.button,
            height: height / 1.8,
            width: width / 1.4,
          }}
        >
          <TouchableOpacity
            style={styles.OpacityStyle}
            onPress={onPressFunction}
          >
            <BackgroundImage
              source={{ uri: Image.resolveAssetSource(TheImage).uri }}
              resizeMode="contain"
              style={{ height: "100%", width: "100%", tintColor: "gray" }}
            />
          </TouchableOpacity>
        </View>
      </Shadow>
      <CText style={styles.titleText} text={Text} />
    </View>
  );
};

function CampGuide({ navigation }) {
  const { height, width } = useWindowDimensions();

  return (
    <View style={styles.screen}>
      <ImageBackground
        source={{ uri: Image.resolveAssetSource(GuideBackground).uri }}
        style={{ height: "100%", width: "100%" }}
      >
        <CHeader
          titleText={"Camping 101"}
          HeaderStyle={{ position: "relative" }}
        />

        <CText
          style={{
            fontSize: 50,
            marginTop: height / 30,
            color: "white",
            textAlign: "center",
            textShadowColor: "rgba(0, 0, 0, 0.5)",
            textShadowOffset: { width: -1.1, height: 1.1 },
            textShadowRadius: 1,
          }}
          text={"Camping 101"}
        />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <PickButton
            Text={"Before Camping"}
            TheImage={BeforeCampImg}
            height={height}
            width={width}
            onPressFunction={() => {
              navigation.navigate("guidePage1");
            }}
          />
          <PickButton
            Text={"During Camping"}
            TheImage={DuringCampImg}
            height={height}
            width={width}
            onPressFunction={() => {
              navigation.navigate("guidePage2");
            }}
          />
          <PickButton
            Text={"After Camping"}
            TheImage={AfterCampImg}
            height={height}
            width={width}
            onPressFunction={() => {
              navigation.navigate("guidePage3");
            }}
          />

          <FocusAwareStatusBar
            barStyle="light-content"
            backgroundColor="black"
          ></FocusAwareStatusBar>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",

    alignItems: "center",
  },

  button: {
    overflow: "hidden",
    backgroundColor: "white",
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 3,
    borderRadius: 50,
  },

  titleText: {
    fontSize: 30,
    marginTop: 15,
    color: "white",
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1.1, height: 1.1 },
    textShadowRadius: 1,
  },
  OpacityStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CampGuide;
