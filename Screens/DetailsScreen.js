import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
} from "react-native";
import { Dimensions } from "react-native";

const DetailsScreen = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        width: "100%",
      }}
    >
      <View
        style={{
          height: windowHeight * 0.5,
          margin: 10,
          marginTop: 0,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,

          overflow: "hidden",
        }}
      >
        <ImageBackground
          style={{ flex: 1 }}
          source={require("../assets/landscape.png")}
          resizeMode="cover"
        >
          <View
            style={{
              marginTop: 60,
              marginHorizontal: 25,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{ flex: 1 }}
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
                  height: 40,
                  width: 40,
                }}
              >
                <Image
                  source={require("../assets/left.png")}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: "center",
                    tintColor: "black",
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => {}}>
              <View
                style={{
                  backgroundColor: "#fefeff",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  height: 40,
                  width: 40,
                }}
              >
                <Image
                  source={require("../assets/export.png")}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: "center",
                    tintColor: "black",
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{}} onPress={() => {}}>
              <View
                style={{
                  backgroundColor: "#fefeff",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  height: 40,
                  width: 40,
                }}
              >
                <Image
                  source={require("../assets/white-heart.png")}
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: "center",
                    tintColor: "black",
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>

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
