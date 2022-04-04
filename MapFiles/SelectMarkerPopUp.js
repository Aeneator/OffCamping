import React from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";

import { Shadow } from "react-native-shadow-2";
import CText from "../CustomObjects/CustomText";

import Colors from "../CustomObjects/Colors";
import CTextBody from "../CustomObjects/CTextBody";
import CTextHeaderFit from "../CustomObjects/CTextHeaderFit";
const SelectMarkerPopUp = (
  MarkerPopUp,
  setMarkerPopUp,
  setFullLocationPopUp,
  MarkerInfo,
  height,
  width
) => {
  if (MarkerPopUp)
    return (
      <View style={{ marginBottom: "1.5%", alignSelf: "center" }}>
        <Shadow>
          <View
            style={{
              height: height / 5,
              width: width / 1.03,
              overflow: "hidden",
              borderRadius: 10,
              backgroundColor: Colors.White,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                flexDirection: "row",
              }}
              onPress={() => {
                setFullLocationPopUp(true);
                setMarkerPopUp(false);
              }}
            >
              <Image
                source={{ uri: MarkerInfo.image }}
                style={{ height: "100%", width: width / 2.4 }}
              />
              <View
                style={{
                  flex: 1,
                  //backgroundColor: "blue",
                  alignItems: "center",
                  alignSelf: "center",
                  justifyContent: "center",

                  marginHorizontal: width / 80,
                  marginHorizontal: height / 180,
                }}
              >
                <CTextHeaderFit
                  style={{ fontSize: width / 20, color: Colors.Black }}
                  text={MarkerInfo.title}
                />
                <CTextBody
                  style={{ fontSize: width / 23, color: Colors.Black }}
                  text={MarkerInfo.description}
                  NrOfLines={3}
                  ellipsizeMode="tail"
                />
              </View>
            </TouchableOpacity>
          </View>
        </Shadow>
      </View>
    );
  else return null;
};

const Styles = StyleSheet.create({});

export default SelectMarkerPopUp;
