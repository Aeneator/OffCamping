import React from "react";
import { TouchableOpacity, View, StyleSheet, Image } from "react-native";

import { Shadow } from "react-native-shadow-2";
import CText from "../CustomObjects/CustomText";
import CTextBody from "../CustomObjects/CTextBody";
import Colors from "../CustomObjects/Colors";

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
              backgroundColor: Colors.Primary,
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
                <CText style={Styles.text} text={MarkerInfo.title} />
                <CText style={Styles.text} text={MarkerInfo.description} />
              </View>
            </TouchableOpacity>
          </View>
        </Shadow>
      </View>
    );
  else return null;
};

const Styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: Colors.Secondary2,
    textShadowOffset: { width: -1, height: 1 },
  },
});

export default SelectMarkerPopUp;
