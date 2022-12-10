import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const Navigation = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        position: "absolute",
        bottom: 0,
        height: 65,
        width: "100%",
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row",
        paddingHorizontal: 25,
        justifyContent: "space-between",
        alignContent: "center",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        elevation: 10,
      }}>
      <TouchableOpacity
        style={{
          borderRadius: 100,
          width: 65,
          backgroundColor: "#FFFFFF",
          justifyContent: "center",
          paddingHorizontal: 10,
        }}
        onPress={() => navigation.navigate("Home")}>
        <Ionicons
          name="ios-home-sharp"
          size={30}
          color="black"
          style={{ padding: 5 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderRadius: 100,
          width: 65,
          backgroundColor: "#FFFFFF",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("Likes")}>
        <Ionicons
          name="heart-outline"
          size={30}
          color="black"
          style={{ padding: 15 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderRadius: 100,
          width: 65,
          backgroundColor: "#FFFFFF",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("Chat")}>
        <Ionicons
          name="ios-chatbubble-outline"
          size={30}
          color="black"
          style={{ padding: 15 }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderRadius: 100,
          width: 65,
          backgroundColor: "#FFFFFF",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("Profile")}>
        <FontAwesome5
          name="user-alt"
          size={30}
          color="black"
          style={{ padding: 15 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Navigation;
