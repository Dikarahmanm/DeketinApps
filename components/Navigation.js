import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";

const Navigation = ({ CurrentPageName }) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      forceInset={{ bottom: "always", top: "never" }}
      style={{
        position: "absolute",
        bottom: 0,
        height: 65,
        width: "100%",
        backgroundColor: "white",
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        elevation: 10,
      }}>
      <TouchableOpacity
        style={{
          borderTopLeftRadius: 30,
          backgroundColor: CurrentPageName === "Home" ? "#2A9287" : "#FFFFFF",
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 10,
          width: "25%",
        }}
        onPress={() => navigation.navigate("Home")}>
        <Ionicons
          name="ios-home-sharp"
          size={30}
          color={CurrentPageName === "Home" ? "#FFFFFF" : "#2A9287"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: CurrentPageName === "Likes" ? "#2A9287" : "#FFFFFF",
          justifyContent: "center",
          alignItems: "center",
          width: "25%",
        }}
        onPress={() => navigation.navigate("Likes")}>
        <Ionicons
          name="heart"
          size={30}
          color={CurrentPageName === "Likes" ? "#FFFFFF" : "#2A9287"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderRadius: 0,
          backgroundColor: CurrentPageName === "Chat" ? "#2A9287" : "#FFFFFF",
          justifyContent: "center",
          alignItems: "center",
          width: "25%",
        }}
        onPress={() => navigation.navigate("Chat")}>
        <Ionicons
          name="ios-chatbubble"
          size={30}
          color={CurrentPageName === "Chat" ? "#FFFFFF" : "#2A9287"}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          borderTopRightRadius: 30,
          backgroundColor:
            CurrentPageName === "Profile" ? "#2A9287" : "#FFFFFF",
          justifyContent: "center",
          alignItems: "center",
          width: "25%",
        }}
        onPress={() => navigation.navigate("Profile")}>
        <FontAwesome5
          name="user-alt"
          size={30}
          color={CurrentPageName === "Profile" ? "#FFFFFF" : "#2A9287"}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Navigation;
