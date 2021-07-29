import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        style={{ position: "absolute", top: 80, left: 20 }}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <View
          style={{
            backgroundColor: "#fefeff",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            height: 30,
            width: 30,
          }}
        >
          <Image
            source={require("../assets/love.png")}
            style={{
              height: 20,
              width: 15,
              resizeMode: "center",
            }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          position: "absolute",
          backgroundColor: "#120c46",
          bottom: 20,
          left: 25,
          right: 25,
          borderRadius: 30,
          height: 60,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 18,
            color: "white",
          }}
        >
          Book Now
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
