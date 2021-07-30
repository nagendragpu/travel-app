import * as React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import MapView from "react-native-maps";

const Settings = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          position: "absolute",
          top: 50,
          left: 30,
          right: 30,
          zIndex: 100,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#ffffff",
          paddingVertical: 22,
          paddingHorizontal: 20,
          borderRadius: 20,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            style={{ height: 25, width: 25, tintColor: "black" }}
            source={require("../assets/left.png")}
          />
        </TouchableOpacity>
        <Text
          style={{
            flex: 1,
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Colosseum,Rome
        </Text>
      </View>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ height: "100%", width: "100%" }}
      />
    </View>
  );
};

export default Settings;
