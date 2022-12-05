import { useRoute, useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import useAuth from "../hooks/useAuth";

const MatchedScreen = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  // const {loggedInProfile, userSwiped} = params;
  // const { loggedInProfile, userSwiped } = params;

  return (
    <View
      className="h-full pt-20"
      style={{ opacity: 1, backgroundColor: "#2BBDAF" }}>
      <View>
        {/* <Image source={{ uri: "https://links.papareact.com/mg9" }} /> */}
        <Text
          style={{
            justifyContent: "center",
            paddingLeft: 40,
            paddingRight: 40,
            paddingTop: 80,
            top: "10%",
            color: "white",
            alignSelf: "center",
            fontSize: 40,
            fontWeight: "bold",
          }}>
          It's a Match!
        </Text>
        <Text
          style={{
            alignSelf: "center",
            top: "11%",
            color: "white",
            fontSize: 14,
          }}>
          {userSwiped.displayName} likes you too
        </Text>
        
        {/* Image1 Here */}
        {/* Image2 Here */}

        <TouchableOpacity
          style={{
            top: "80%",
            width: "80%",
            height: 45,
            marginLeft: "11%",
            marginRight: "10%",
            backgroundColor: "#21726A",
          }}
          className="bg-white m-5 px-8 rounded-full mt-0">
          <Text
            style={{
              alignSelf: "center",
              position: "relative",
              top: "18%",
              color: "white",
            }}>
            SEND A MESSAGE{" "}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            top: "81%",
            width: "80%",
            height: 45,
            marginLeft: "11%",
            marginRight: "10%",
            backgroundColor: "transparent",
            borderBottomColor: "#2BBDAF",
            borderTopColor: "#2BBDAF",
          }}
          className="bg-white m-5 px-8 rounded-full mt-0">
          <Text
            style={{
              alignSelf: "center",
              position: "relative",
              top: "18%",
              color: "white",
            }}>
            KEEP SWIPING{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default MatchedScreen;
