//import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  useWindowDimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tabs from "./navigation/tabs";

//const Stack = createNativeStackNavigator();

export default function App() {
  return <NavigationContainer>{<Tabs />}</NavigationContainer>;
}
