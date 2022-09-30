import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  View,
  Image,
  useWindowDimensions,
} from "react-native";

import Colors from "../CustomObjects/Colors";
import * as Location from "expo-location";

import AroundMeImg from "./AroundMe.png";

function GetUserLocation(setLocation, errorMsg, setErrorMsg, GoToLocation) {
  (async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let coords = await Location.getCurrentPositionAsync({});
    setLocation(coords);

    GoToLocation(coords.coords.latitude, coords.coords.longitude);
  })();
}

const GetLocationButton = ({
  MarkerPopUp,
  location,
  setLocation,
  errorMsg,
  setErrorMsg,
  GoToLocation,
  setUserCenter,
}) => {
  const { height, width } = useWindowDimensions();

  /*  console.log(location);
  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  } */

  return (
    <View
      style={[
        {
          aspectRatio: 1 / 1,
          height: height / 11,
          marginRight: width / 30,

          marginBottom: MarkerPopUp ? 10 : height / 7,
          alignSelf: "flex-end",
          backgroundColor: Colors.Primary,
          borderRadius: 90,

          elevation: 5,
        },
      ]}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          GetUserLocation(setLocation, errorMsg, setErrorMsg, GoToLocation);
        }}
      >
        <Image
          source={{ uri: Image.resolveAssetSource(AroundMeImg).uri }}
          style={{
            height: "70%",
            aspectRatio: 1 / 1,
            tintColor: Colors.White,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
export default GetLocationButton;
