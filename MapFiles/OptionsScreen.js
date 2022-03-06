import React, { useState } from "react";
import {
  View,
  ImageBackground,
  Text,
  Modal,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import SwitchSelector from "react-native-switch-selector";
import CText from "../CustomObjects/CustomText";
import CloseButton from "../CustomObjects/CloseButton.js";
import Slider from "@react-native-community/slider";

import HideImg from "../assets/ImageNeeds/hide.png";

var Multiplier = 10000;
var MaxSlider = 10;

const GetMapTypeIndex = (SelectedMapType) => {
  switch (SelectedMapType) {
    case "standard":
      return 0;

    case "hybrid":
      return 1;

    case "terrain":
      return 2;
  }
};

const OptionsScreen = ({
  OptionsVisible,
  setOptionsVisible,
  setRadius,
  SelectedMapType,
  setSelectedMapType,
  Radius,
  OptionsBG,
  setOptionsBG,
  width,
  height,
}) => {
  return (
    <Modal
      visible={OptionsVisible}
      animationType="fade"
      transparent={true}
      presentationStyle="overFullScreen"
      statusBarTranslucent={true}
      onRequestClose={() => {
        setOptionsVisible(false);
      }}
    >
      {/* Modal Background */}
      <View
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",

          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          width: width,
        }}
      >
        {/* Modal Screen */}
        <View
          style={{
            height: "90%",
            width: "90%",
            backgroundColor: OptionsBG ? "white" : "rgba(0, 0, 0, 0)",
            borderRadius: 20,
            overflow: "hidden",
          }}
        >
          {/*  Top Bar */}
          <View
            style={{
              marginTop: height / 100,
              height: height / 13,
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <CloseButton
              onpress={setOptionsVisible}
              height={height}
              width={width}
              newStyle={{
                ...styles.ButtonStyle,
              }}
            />
            <HideButton
              setOptionsBG={setOptionsBG}
              OptionsBG={OptionsBG}
              height={height}
              width={width}
            />
          </View>

          <View style={{ flex: 1, alignItems: "center" }}>
            <CCText
              text={"Raza de cautare:"}
              newFontSize={width / 14}
              OptionsBG={OptionsBG}
            />
            <Slider
              style={{ width: "80%", height: 40 }}
              minimumValue={1}
              maximumValue={MaxSlider}
              step={0.1}
              value={Radius / Multiplier}
              onSlidingStart={() => {
                setOptionsBG(false);
              }}
              onSlidingComplete={(value) => {
                if (value == MaxSlider) setRadius(Multiplier * 100);
                else setRadius(Multiplier * value.toFixed(1));
              }}
              minimumTrackTintColor="black"
              maximumTrackTintColor="gray"
            />
            <CCText
              text={
                Radius / Multiplier < MaxSlider
                  ? (Radius / Multiplier) * 10 + " km"
                  : "Toata tara"
              }
              newFontSize={width / 15}
              OptionsBG={OptionsBG}
            />

            <View
              style={{
                width: "100%",
                height: "12%",

                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <CCText
                text={"Harta:"}
                newFontSize={width / 18}
                OptionsBG={OptionsBG}
              />

              <SwitchSelector
                initial={GetMapTypeIndex(SelectedMapType)}
                style={{ width: "60%" }}
                onPress={(value) => {
                  setSelectedMapType(value);
                  setOptionsBG(false);
                }}
                textColor={"black"}
                selectedColor={"white"}
                buttonColor={"black"}
                borderColor={"black"}
                hasPadding
                options={[
                  { label: "Standard", value: "standard" },
                  { label: "Satelit", value: "hybrid" },
                  { label: "Relief", value: "terrain" },
                ]}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const HideButton = ({ setOptionsBG, OptionsBG, height, width }) => {
  return (
    <View style={{ ...styles.ButtonStyle }}>
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          setOptionsBG(!OptionsBG);
        }}
      >
        <Image
          source={{ uri: Image.resolveAssetSource(HideImg).uri }}
          style={{
            height: "70%",
            aspectRatio: 1 / 1,
            tintColor: OptionsBG ? "black" : "gray",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const CCText = ({ text, OptionsBG, newFontSize }) => {
  return (
    <CText
      text={text}
      style={{
        ...styles.newText,
        fontSize: newFontSize,
        color: OptionsBG ? "rgba(0, 0, 0, 1)" : "rgba(255, 255, 255, 1)",
      }}
    />
  );
};

const styles = StyleSheet.create({
  ButtonStyle: {
    backgroundColor: "white",
    aspectRatio: 1 / 1,
    height: "100%",
    position: "relative",
    marginTop: 0,
    marginRight: 15,
    marginLeft: 15,
    borderRadius: 360,
    elevation: 5,
    borderWidth: 2,
    borderColor: "rgba(0,0,0,0.05)",
  },
  newText: {
    textShadowColor: "gray",
    textShadowOffset: { width: -1.4, height: 1.4 },
    textShadowRadius: 1,
  },
  picker: {
    width: "20%",
    height: "40%",
    backgroundColor: "blue",
  },
});

export default OptionsScreen;
