import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import DetailsScreen from "../Screens/DetailsScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const HomeStack = createStackNavigator();
const Stack = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    console.log("came here");
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "Details") {
      navigation.setOptions({ tabBarVisible: false });
    } else {
      navigation.setOptions({ tabBarVisible: true });
    }
  }, [navigation, route]);
  return (
    <HomeStack.Navigator headerMode={"none"}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
};

export default Stack;

const styles = StyleSheet.create({});
