import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/home";
import Screen1 from "../screens/screen1";
import Screen2 from "../screens/screen2";
import Screen3 from "../screens/screen3";
import Screen4 from "../screens/screen4";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="screen1" component={Screen1} />
      <Tab.Screen name="screen2" component={Screen2} />
      <Tab.Screen name="screen3" component={Screen3} />
      <Tab.Screen name="screen4" component={Screen4} />
    </Tab.Navigator>
  );
};

export default Tabs;
