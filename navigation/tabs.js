import React from "react";
import { createBottomTabNavigator, View } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "../screens/home";
import MapScreen from "../screens/map";
import CampGuide from "../screens/campGuide";
import Screen3 from "../screens/screen3";
import Screen4 from "../screens/screen4";
import Colors from "../CustomObjects/Colors";

const Tab = createBottomTabNavigator();

const IconSize = 25;
const IconFocusedColor = "rgb(160, 202, 242)";
const IconColor = Colors.White;

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "rgb(160, 202, 242)",
        tabBarInactiveTintColor: Colors.White,
        tabBarStyle: {
          backgroundColor: Colors.Primary,
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
              size={IconSize + 5}
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
        name="screen3"
        component={Screen3}
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

const SomeIcon = ({ focused }) => {};

export default Tabs;
