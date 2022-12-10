import { View, Text, TouchableOpacity, Image } from "react-native";
import { React, useState } from "react";
import { Foundation, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, callEnabled, photoEnabled }) => {
  const navigation = useNavigation();
  const [loggedInProfile, setLoggedInProfile] = useState();
  return (
    <View classname="p-2 flex-row items-center justify-between">
      <View
        sclassname="flex flex-row items-center"
        style={{
          flexDirection: "row",
          marginRight: "auto",
          marginTop: 40,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          classname="p-2">
          <Ionicons name="chevron-back-outline" size={34} color="black" />
        </TouchableOpacity>
        <Text
          classname="text-2xl font-bold pl-2"
          style={{
            fontSize: 24,
            paddingLeft: "35%",
          }}>
          {title}
        </Text>
        {photoEnabled && (
          <Image
            source={{ uri: loggedInProfile?.photoURL }}
            style={{
              alignSelf: "center",
              width: 122,
              height: 122,
              resizeMode: "cover",
              borderRadius: 100,
            }}
          />
        )}
        {callEnabled && (
          <TouchableOpacity classname="rounded-full mr-4 p-3 bg-red-200">
            <Foundation
              classname=""
              name="telephone"
              size={20}
              color="black"
              style={{ paddingLeft: "30%", top: 10 }}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
