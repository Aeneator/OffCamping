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
import Colors from "../CustomObjects/Colors";

import DuringCampImg from "../MapGuideFiles/GuideImages/DuringCamping.png";
import BeforeCampImg from "../MapGuideFiles/GuideImages/BeforeCamping.png";
import AfterCampImg from "../MapGuideFiles/GuideImages/AfterCamping.png";
import GuideBackground from "../MapGuideFiles/GuideImages/GuideScreenBackGround.png";

import CTextHeader from "../CustomObjects/CTextHeader";

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

const PickButton = ({ onPressFunction, Text, height, width, TheImage }) => {
  let CardWidth = width / 1.4;
  return (
    <View
      style={{
        marginHorizontal: (width - CardWidth) / 2,
      }}
    >
      <Shadow>
        <View
          style={{
            ...styles.button,
            height: height / 1.8,
            width: CardWidth,
          }}
        >
          <TouchableOpacity
            style={styles.OpacityStyle}
            onPress={onPressFunction}
          >
            <BackgroundImage
              source={{ uri: Image.resolveAssetSource(TheImage).uri }}
              resizeMode="contain"
              style={{ height: "100%", width: "100%" }}
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
    <ImageBackground
      source={{ uri: Image.resolveAssetSource(GuideBackground).uri }}
      style={{
        height: "100%",
        width: "100%",
      }}
    >
      <CHeader HeaderStyle={{ position: "relative" }} />
      <CTextHeader
        style={{
          fontSize: width / 8,
          marginTop: height / 15,
          color: "white",
          alignSelf: "center",
        }}
        text={"CAMPING 101"}
      />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: "10%" }}
      >
        <PickButton
          Text={"Before Camping"}
          TheImage={BeforeCampImg}
          height={height}
          width={width}
          onPressFunction={() => {
            navigation.navigate("GuidePage1");
          }}
        />
        <PickButton
          Text={"During Camping"}
          TheImage={DuringCampImg}
          height={height}
          width={width}
          onPressFunction={() => {
            navigation.navigate("GuidePage2");
          }}
        />
        <PickButton
          Text={"After Camping"}
          TheImage={AfterCampImg}
          height={height}
          width={width}
          onPressFunction={() => {
            navigation.navigate("GuidePage3");
          }}
        />

        <FocusAwareStatusBar
          barStyle="light-content"
          backgroundColor={Colors.Primary}
        ></FocusAwareStatusBar>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",

    //alignItems: "center",
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
