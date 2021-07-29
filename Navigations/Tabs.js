import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Settings from "../Screens/Settings";
import BookMark from "../Screens/BookMark";
import Profile from "../Screens/Profile";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Stack from "./Stack";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          backgroundColor: "#120c46",
          bottom: 20,
          left: 25,
          right: 25,
          borderRadius: 30,
          height: 60,
          elevation: 10,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Stack}
        options={{
          tabBarIcon: (props) => {
            return (
              <Feather
                name="home"
                size={24}
                color={props.focused ? "white" : "grey"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <FontAwesome
                name="map-o"
                size={24}
                color={focused ? "white" : "grey"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="BookMark"
        component={BookMark}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? "bookmark-minus" : "bookmark-minus-outline"}
                size={26}
                color={focused ? "white" : "grey"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: (props) => {
            return (
              <Feather
                name="home"
                size={24}
                color={props.focused ? "white" : "grey"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
