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
import { AntDesign } from "@expo/vector-icons";
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
    },
    {
      firstName: "Agung",
      distance: "7 miles",
      age: "21",
      photoURL: "https://i.ibb.co/yVGGsJt/sigmund-a19-OVaa2rz-A-unsplash.jpg",
    },
    {
      firstName: "Ucup",
      distance: "12 miles",
      age: "25",
      photoURL: "https://i.ibb.co/W3Mf52h/nate-J5-U-22o1ubw-unsplash.jpg",
    },
  ];

  return (
    <SafeAreaView>
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
          cards={DUMMY_DATA}
          renderCard={(card) => {
            <View>
              <Text>{card.firstName}</Text>
            </View>;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
