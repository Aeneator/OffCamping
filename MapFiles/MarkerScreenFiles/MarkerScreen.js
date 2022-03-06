import React from "react";
import {
  View,
  ImageBackground,
  Modal,
  useWindowDimensions,
  Image,
  StyleSheet,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import { Tooltip, Text } from "react-native-elements";

import CText from "../../CustomObjects/CustomText";
import CloseButton from "../../CustomObjects/CloseButton.js";

import TestImg from "./ImaginiFacilitati/test.png";

const CheckProperty = (MarkerInfo, id) => {
  switch (id) {
    case 1:
      return MarkerInfo.acces_apa;
    case 2:
      return MarkerInfo.acces_foc;
    case 3:
      return MarkerInfo.acces_electricitate;
    case 4:
      return MarkerInfo.acces_dusuri;
    case 5:
      return MarkerInfo.acces_parcare;
    case 6:
      return MarkerInfo.acces_apa;
  }
};

const informatii = [
  {
    id: 1,
    image: Image.resolveAssetSource(TestImg).uri,
    ToolTipText: "Acces Apa",
  },
  {
    id: 2,
    image: Image.resolveAssetSource(TestImg).uri,
    ToolTipText: "Acces Foc",
  },
  {
    id: 3,
    image: Image.resolveAssetSource(TestImg).uri,
    ToolTipText: "Acces Eletricitate",
  },
  {
    id: 4,
    image: Image.resolveAssetSource(TestImg).uri,
    ToolTipText: "Dusuri",
  },
  {
    id: 5,
    image: Image.resolveAssetSource(TestImg).uri,
    ToolTipText: "Parcare",
  },
  {
    id: 6,
    image: Image.resolveAssetSource(TestImg).uri,
    ToolTipText: "Wi-fi",
  },
];

const SmallIcon = ({ ToolTipText, id, MarkerInfo, image }) => {
  const { height, width } = useWindowDimensions();
  if (CheckProperty(MarkerInfo.facilitati, id))
    return (
      <View
        style={{
          aspectRatio: 1 / 1,
          width: "22.9%",
          marginHorizontal: width / 100,
          marginVertical: width / 100,
        }}
      >
        <ImageBackground
          source={{ uri: image }}
          style={{ height: "100%", width: "100%" }}
        >
          <Tooltip
            height={60}
            withOverlay={false}
            backgroundColor={"rgba(0,0,0,0.95)"}
            closeOnlyOnBackdropPress={false}
            popover={
              <CText
                text={ToolTipText}
                style={{ ...styles.toolText, fontSize: width / 18 }}
              />
            }
          >
            <View
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </Tooltip>
        </ImageBackground>
      </View>
    );
  else return null;
};

const MarkerScreen = ({
  FullLocationPopUp,
  setFullLocationPopUp,
  MarkerInfo,
}) => {
  const { height, width } = useWindowDimensions();

  return (
    <Modal
      visible={FullLocationPopUp}
      animationType="slide"
      transparent={true}
      statusBarTranslucent={true}
      onRequestClose={() => {
        setFullLocationPopUp(false);
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <ScrollView style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <View
              style={{
                height: StatusBar.currentHeight * 1.7,
                backgroundColor: "white",
              }}
            />
            <ImageBackground
              source={{ uri: MarkerInfo.image }}
              style={{ height: 200, width: "100%" }}
            />
            <CText
              text={MarkerInfo.title}
              style={{
                color: "black",
                fontSize: width / 10,
                textShadowColor: "rgba(0, 0, 0, 0.6)",
                textShadowOffset: { width: -1, height: 1 },
              }}
            />
            <CText
              text={
                "(" + MarkerInfo.latitude + " , " + MarkerInfo.longitude + ")"
              }
              style={{
                color: "#404040",
                fontSize: width / 15,
                textShadowColor: "rgba(0, 0, 0, 0.6)",
                textShadowOffset: { width: -1, height: 1 },
              }}
            />
            <CText
              text={"Descriere:"}
              style={{
                color: "gray",
                fontSize: width / 13,
                textShadowColor: "rgba(0, 0, 0, 0.8)",
                textShadowOffset: { width: -1.3, height: 1.3 },
              }}
            />

            <CText
              text={MarkerInfo.description}
              style={{
                color: "gray",
                fontSize: width / 13,
                textShadowColor: "rgba(0, 0, 0, 0.8)",
                textShadowOffset: { width: -1.3, height: 1.3 },
              }}
            />
            <View
              style={{
                width: width / 1.02,
                flexWrap: "wrap",
                flexDirection: "row",

                backgroundColor: "white",
                borderWidth: 2,
              }}
            >
              {informatii.map((data) => {
                return (
                  <SmallIcon
                    ToolTipText={data.ToolTipText}
                    image={data.image}
                    key={data.id}
                    id={data.id}
                    MarkerInfo={MarkerInfo}
                  />
                );
              })}
            </View>

            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: height / 13,
                width: width / 1.5,
              }}
              onPress={() => {
                console.log("test");
                fetch("Your URL to fetch data from");
              }}
            >
              <CText
                text="Apasa-ma"
                style={{
                  color: "#404040",
                  textShadowColor: "rgba(0, 0, 0, 0.6)",
                  textShadowOffset: { width: -1, height: 1 },
                  fontSize: width / 15,
                }}
              />
            </TouchableOpacity>

            <CText text={""} style={{ color: "black" }} />
            <CText text={""} style={{ color: "black" }} />
            <CText text={""} style={{ color: "black" }} />
            <CText text={""} style={{ color: "black" }} />
            <CText text={""} style={{ color: "black" }} />
            <CText text={""} style={{ color: "black" }} />
            <CText text={""} style={{ color: "black" }} />
            <CText text={""} style={{ color: "black" }} />
            <CText text={""} style={{ color: "black" }} />
            <CText text={""} style={{ color: "black" }} />
          </View>
        </ScrollView>
        <CloseButton
          onpress={setFullLocationPopUp}
          newStyle={{
            marginTop: StatusBar.currentHeight * 1.1,
            marginLeft: 16,
          }}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  toolText: {
    color: "rgba(255,255,255,0.9)",
    textShadowColor: "rgba(255,255,255,0.2)",
    textShadowOffset: { width: -1.2, height: 1.2 },
    textShadowRadius: 1,
  },
});

export default MarkerScreen;
