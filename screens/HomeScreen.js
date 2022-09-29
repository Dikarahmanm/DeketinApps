import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const DUMMY_DATA = [
    {
      firstName: "Rex",
      distance: "5 miles",
      age: "27",
      photoURL:
        "https://i.ibb.co/hKqkwXr/charlie-green-3-Jmf-ENc-L24-M-unsplash.jpg",
      id: 123,
    },
    {
      firstName: "Agung",
      distance: "7 miles",
      age: "21",
      photoURL: "https://i.ibb.co/yVGGsJt/sigmund-a19-OVaa2rz-A-unsplash.jpg",
      id: 456,
    },
    {
      firstName: "Ucup",
      distance: "12 miles",
      age: "25",
      photoURL: "https://i.ibb.co/W3Mf52h/nate-J5-U-22o1ubw-unsplash.jpg",
      id: 789,
    },
  ];

  return (
    <SafeAreaView className="flex-1">
      {/*Header */}
      <View>
        <TouchableOpacity>
          <Image
            source={require("D:/Project Mobile Apps/DeketinApps/assets/Group9.png")}
            style={{
              top: "80%",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "30%",
            }}
          />
          <AntDesign
            name="filter"
            size={24}
            color="black"
            style={{
              height: 34,
              width: 34,
              marginLeft: "85%",
              top: "32%",
            }}
          />
        </TouchableOpacity>
      </View>

      {/*End of Header */}

      {/*CARDS */}
      <View className="flex-1 -mt-6">
        <Swiper
          containerStyle={{ backgroundColor: "transparent" }}
          cards={DUMMY_DATA}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          renderCard={(card) => (
            <View key={card.id} className="bg-white h-3/4 rounded-xl relative">
              <Image
                className="absolute top-0 h-full w-full rounded-xl"
                source={{ uri: card.photoURL }}
              />
              <Text
                style={{
                  top: "85%",
                  fontSize: 24,
                  left: "5%",
                  fontWeight: "bold",
                  color: "white",
                }}>
                {" "}
                {card.firstName}, {card.age}{" "}
              </Text>
              <Text
                style={{
                  top: "85.1%",
                  fontSize: 18,
                  left: "5%",
                  fontStyle: "normal",
                  color: "white",
                }}>
                {" "}
                {card.distance}{" "}
              </Text>
            </View>
          )}
        />
      </View>
      <View className="flex flex-row justify-evenly" style={{ bottom: "30%" }}>
        <TouchableOpacity onPress={() => swipeRef.current.swipeLeft()}>
          <Entypo
            name="cross"
            size={45}
            color="white"
            style={{
              borderRadius: 32,
              width: 64,
              height: 64,
              backgroundColor: "red",
              paddingLeft: 10,
              paddingTop: 10,
              position: "relative",
            }}
            className="items-center justify-center rounded-full w-16 h-16 bg-red-400"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => swipeRef.current.this.swipeRight()}>
          <Entypo
            name="heart"
            size={36}
            color="white"
            style={{
              borderRadius: 32,
              width: 64,
              height: 64,
              backgroundColor: "#2A9287",
              paddingLeft: 14,
              paddingTop: 15,
              position: "relative",
            }}
            className="items-center justify-center rounded-full w-16 h-16 bg-red-400"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
