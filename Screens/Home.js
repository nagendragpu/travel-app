import * as React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Dimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const list = [
  {
    id: 1,
    name: "All",
  },
  {
    id: 2,
    name: "Popular",
  },
  {
    id: 3,
    name: "Recommended",
  },
  {
    id: 4,
    name: "Most Viewed",
  },
  {
    id: 5,
    name: "Most Watched",
  },
  {
    id: 6,
    name: "Most Loved",
  },
  {
    id: 7,
    name: "Bannu",
  },
];

const place = [
  {
    id: 1,
    name: "Colosseum",
    city: "Rome",
    img: require("../assets/landscape.png"),
  },
  {
    id: 2,
    name: "Colosseum",
    city: "Rome",
    img: require("../assets/landscape.png"),
  },
  {
    id: 3,
    name: "Colosseum",
    city: "Rome",
    img: require("../assets/landscape.png"),
  },
  {
    id: 4,
    name: "Colosseum",
    city: "Rome",
    img: require("../assets/landscape.png"),
  },
  {
    id: 5,
    name: "Colosseum",
    city: "Rome",
    img: require("../assets/landscape.png"),
  },
  {
    id: 6,
    name: "Colosseum",
    city: "Rome",
    img: require("../assets/landscape.png"),
  },
];

const Categories = [
  {
    id: 1,
    name: "Mountain",

    img: require("../assets/mountain.png"),
  },
  {
    id: 2,
    name: "Beach",

    img: require("../assets/summer-holidays.png"),
  },
  {
    id: 3,
    name: "Park",

    img: require("../assets/playground.png"),
  },
  {
    id: 4,
    name: "Camp",

    img: require("../assets/mountain.png"),
  },
  {
    id: 5,
    name: "Colosseum",

    img: require("../assets/mountain.png"),
  },
  {
    id: 6,
    name: "Colosseum",

    img: require("../assets/mountain.png"),
  },
];
const Home = ({ navigation }) => {
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  return (
    <View style={{ flex: 1, backgroundColor: "#fffefe" }}>
      <View
        style={{
          marginTop: windowHeight * 0.08,
          marginHorizontal: windowWidth * 0.08,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          //    borderStyle:"solid",
          // borderWidth:1,
        }}
      >
        <View>
          <Text style={{ fontWeight: "500", fontSize: 25 }}>Where do</Text>
          <Text style={{ fontWeight: "700", fontSize: 22 }}>
            you want to go?
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#ffdcc8",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
            height: 42,
            width: 42,
          }}
        >
          <Image
            source={require("../assets/love.png")}
            style={{ height: 30, width: 30, resizeMode: "center" }}
          />
        </View>
      </View>
      <View
        style={{
          marginHorizontal: windowWidth * 0.08,
          marginVertical: windowHeight * 0.03,
          flexDirection: "row",
          alignItems: "center",
          // borderStyle:"solid",
          // borderWidth:1,
          padding: 6,
          height: 45,
          borderRadius: 10,
          backgroundColor: "#f6f7f6",
        }}
      >
        <Feather name="search" size={20} color="black" />
        <TextInput
          style={{ flex: 1, marginLeft: 5 }}
          placeholder="Discover a city"
          placeholderTextColor="grey"
          underlineColorAndroid="transparent"
        />
        <AntDesign name="filter" size={20} color="black" />
      </View>
      <View
        style={{
          marginHorizontal: windowWidth * 0.08,
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 18 }}> Explore Cities</Text>
      </View>
      <View
        style={{
          marginLeft: windowWidth * 0.08,
          marginVertical: windowHeight * 0.03,
        }}
      >
        <FlatList
          data={list}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity onPress={() => {}}>
                <View style={{ marginRight: 12 }}>
                  <Text
                    style={{
                      color: "blue",
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{ marginLeft: windowWidth * 0.08 }}>
        <FlatList
          data={place}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  height: windowHeight * 0.26,
                  width: windowWidth * 0.4,
                  borderStyle: "solid",
                  borderColor: "#f4f5f5",
                  marginRight: windowWidth * 0.06,
                  borderRadius: 15,
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 5,
                  borderWidth: 1,
                }}
              >
                <TouchableWithoutFeedback
                  onPress={() => {
                    navigation.navigate("Details");
                  }}
                >
                  <View
                    style={{
                      height: 120,
                      width: 120,
                      borderRadius: 15,
                      overflow: "hidden",
                      elevation: 10,
                      alignContent: "center",
                      marginTop: 4,
                    }}
                  >
                    <Image
                      source={item.img}
                      style={{ height: "100%", width: "100%" }}
                    />
                    <TouchableOpacity
                      style={{ position: "absolute", right: 4, top: 4 }}
                      onPress={() => {
                        console.log("button pressed");
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
                  </View>
                </TouchableWithoutFeedback>
                <Text
                  style={{
                    alignSelf: "flex-start",
                    marginLeft: 5,
                    marginVertical: 5,
                    fontWeight: "500",
                  }}
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    alignSelf: "flex-start",
                    marginLeft: 8,
                  }}
                >
                  <FontAwesome name="map-marker" size={10} color="black" />
                  <Text
                    style={{
                      marginLeft: 4,
                      marginVertical: 5,
                      color: "grey",
                      fontSize: 10,
                    }}
                  >
                    {item.city}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>

      <View
        style={{
          marginHorizontal: windowWidth * 0.08,
          marginVertical: windowHeight * 0.03,
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 18 }}> Categories</Text>
      </View>
      <View
        style={{
          //   marginHorizontal: windowWidth * 0.04,
          marginLeft: windowHeight * 0.03,
        }}
      >
        <FlatList
          data={Categories}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  console.log(item.name);
                }}
              >
                <View
                  style={{
                    //   borderStyle: "solid",
                    //   borderWidth: 1,
                    marginHorizontal: 2,
                    height: 80,
                    width: 80,
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      backgroundColor: "#f7f6f6",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 25,
                      height: 50,
                      width: 50,
                    }}
                  >
                    <Image
                      source={item.img}
                      style={{ height: 30, width: 30, resizeMode: "center" }}
                    />
                  </View>
                  <Text>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Home;
