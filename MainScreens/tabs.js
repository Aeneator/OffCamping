import React from "react";
import { createBottomTabNavigator, View } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "./Home";
import MapScreen from "./Map";
import CampGuide from "./CampGuide";
import infoScreen from "./InfoScreen";

import Colors from "../CustomObjects/Colors";

const Tab = createBottomTabNavigator();

const IconFocusedColor = Colors.Black;
const IconSize = 20;
const IconColor = Colors.White;

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: IconFocusedColor,
        tabBarInactiveTintColor: IconColor,
        tabBarStyle: {
          backgroundColor: Colors.Primary,
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "Regiuni:",

          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name={
                focused ? "map-marker-multiple" : "map-marker-multiple-outline"
              }
              size={IconSize + 3}
              color={focused ? IconFocusedColor : IconColor}
            ></MaterialCommunityIcons>
          ),
        }}
      />
      <Tab.Screen
        name="MapScreen"
        component={MapScreen}
        initialParams={{
          latitudine: 46.0243,
          longitudine: 24.799112,
          zoom: 1,
          firstLoad: true,
        }}
        options={{
          tabBarLabel: "Harta",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "map" : "map-outline"}
              size={IconSize}
              color={focused ? IconFocusedColor : IconColor}
            ></Ionicons>
          ),
        }}
      />
      <Tab.Screen
        name="CampGuide"
        component={CampGuide}
        options={{
          tabBarLabel: "Ghid",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "book-sharp" : "book-outline"}
              size={IconSize}
              color={focused ? IconFocusedColor : IconColor}
            ></Ionicons>
          ),
        }}
      />
      <Tab.Screen
        name="infoScreen"
        component={infoScreen}
        options={{
          tabBarLabel: "Info",
          tabBarIcon: ({ focused }) => (
            <AntDesign
              name={focused ? "infocirlce" : "infocirlceo"}
              size={IconSize}
              color={focused ? IconFocusedColor : IconColor}
            ></AntDesign>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
