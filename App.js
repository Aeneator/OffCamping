import React, { useState } from "react";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Tabs from "./MainScreens/tabs.js";
import guidePage1 from "./MapGuideFiles/guidePage1.js";
import guidePage2 from "./MapGuideFiles/guidePage2.js";
import guidePage3 from "./MapGuideFiles/guidePage3.js";

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
          name="guidePage1"
          component={guidePage1}
          options={{ title: "Before Camping" }}
        />
        <Stack.Screen
          name="guidePage2"
          component={guidePage2}
          options={{ title: "During Camping" }}
        />
        <Stack.Screen
          name="guidePage3"
          component={guidePage3}
          options={{ title: "After Camping" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
