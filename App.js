import React, { useState } from "react";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Tabs from "./MainScreens/tabs.js";
import GuidePage1 from "./MapGuideFiles/GuidePage1.js";
import GuidePage2 from "./MapGuideFiles/GuidePage2.js";
import GuidePage3 from "./MapGuideFiles/GuidePage3.js";

const Stack = createStackNavigator();

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const finishHandler = () => {
    setIsReady(true);
  };

  const loadFonts = async () => {
    await Font.loadAsync({
      // Load a font from a static resource
      //"Andika-Regular": require("./assets/fonts/Andika-Regular.ttf"),
      "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
      "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),

      "Poppins-Bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
      "Poppins-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
      "Poppins-Light": require("./assets/fonts/Poppins/Poppins-Light.ttf"),
    });
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={finishHandler}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="TheTabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GuidePage1"
          component={GuidePage1}
          options={{ title: "Before Camping" }}
        />
        <Stack.Screen
          name="GuidePage2"
          component={GuidePage2}
          options={{ title: "During Camping" }}
        />
        <Stack.Screen
          name="GuidePage3"
          component={GuidePage3}
          options={{ title: "After Camping" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
