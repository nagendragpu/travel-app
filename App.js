import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./Navigations/Tabs";

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
