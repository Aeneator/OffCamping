import React from "react";
import { TouchableOpacity, View, Image } from "react-native";

import OptionsImg from "../assets/ImageNeeds/options.png";
import Colors from "../CustomObjects/Colors";

const OptionsButton = ({
  onpress,
  newStyle,
  OptionsBG,
  setOptionsBG,
  height,
  width,
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: Colors.Primary,
          aspectRatio: 1 / 1,
          height: "100%",
          marginRight: width / 30,
          borderRadius: 360,
          elevation: 5,
        },
        newStyle,
      ]}
    >
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          onpress(true);
          if (!OptionsBG) setOptionsBG(true);
        }}
      >
        <Image
          source={{ uri: Image.resolveAssetSource(OptionsImg).uri }}
          style={{
            height: "60%",
            aspectRatio: 1 / 1,
            tintColor: Colors.White,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};
export default OptionsButton;
