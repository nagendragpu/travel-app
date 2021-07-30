import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Dimensions } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const DetailsScreen = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  console.log(windowHeight);
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
          height: windowHeight * 0.55,
          margin: 10,
          marginTop: 0,
          borderBottomLeftRadius: 35,
          borderBottomRightRadius: 35,
          overflow: "hidden",
          elevation: 20,
        }}
      >
        <ImageBackground
          style={{ flex: 1, flexDirection: "column" }}
          source={require("../assets/landscape.png")}
          resizeMode="cover"
        >
          {/* Header View */}
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

          <View
            style={{
              position: "absolute",
              bottom: 20,
              height: windowHeight * 0.14,
              left: 20,
              right: 20,
              borderRadius: 20,
              backgroundColor: "rgba(148,159,183,0.9)",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 15,
            }}
          >
            <View
              style={{
                height: 60,
                width: 60,
                borderRadius: 10,
                overflow: "hidden",
              }}
            >
              <Image
                source={require("../assets/landscape.png")}
                style={{ height: "100%", width: "100%" }}
                resizeMode="cover"
              />
            </View>
            <View
              style={{
                height: 60,
                width: 60,
                overflow: "hidden",
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../assets/landscape.png")}
                style={{ height: "100%", width: "100%" }}
              />
            </View>
            <View
              style={{
                height: 60,
                width: 60,
                overflow: "hidden",
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../assets/landscape.png")}
                style={{ height: "100%", width: "100%" }}
              />
            </View>
            <View
              style={{
                height: 60,
                width: 60,
                overflow: "hidden",
                borderRadius: 10,
              }}
            >
              <ImageBackground
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  opacity: 0.7,
                }}
                source={require("../assets/landscape.png")}
                resizeMode="cover"
              >
                <Text
                  style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
                >
                  +5
                </Text>
              </ImageBackground>
            </View>
          </View>
        </ImageBackground>
      </View>

      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          // borderStyle: "solid",
          // borderWidth: 1,
          paddingHorizontal: 10,
          marginHorizontal: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderStyle: "dotted",
            borderBottomColor: "grey",
            borderBottomWidth: 1,
            paddingVertical: 10,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Colosseum
            </Text>
            <Text
              style={{
                fontWeight: "700",
                color: "grey",
                fontSize: 17,
              }}
            >
              Rome
            </Text>
          </View>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              $20
            </Text>
            <Text
              style={{
                fontWeight: "700",
                color: "grey",
                fontSize: 17,
              }}
            >
              per person
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            marginVertical: 5,
          }}
        >
          <View
            style={{
              backgroundColor: "#f8f8f8",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 25,
              height: 50,
              width: 50,
            }}
          >
            <Image
              source={require("../assets/map-point.png")}
              style={{
                height: 30,
                width: 30,
                resizeMode: "center",
                tintColor: "black",
              }}
            />
          </View>
          <Text
            style={{
              marginLeft: 5,
              fontWeight: "700",
              color: "grey",
              fontSize: 16,
            }}
          >
            Paizza del Colosseio 1,Rome
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 5,
          }}
        >
          <View
            style={{
              backgroundColor: "#f8f8f8",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 25,
              height: 50,
              width: 50,
            }}
          >
            <Image
              source={require("../assets/wall-clock.png")}
              style={{
                height: 25,
                width: 25,
                resizeMode: "center",
                tintColor: "black",
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              marginLeft: 5,
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "600",
                color: "grey",
                fontSize: 16,
              }}
            >
              OPEN
            </Text>
            <Text style={{ fontWeight: "500" }}>09.00 AM</Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{ fontSize: 16, color: "skyblue", fontWeight: "bold" }}
            >
              Show Detail
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

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
