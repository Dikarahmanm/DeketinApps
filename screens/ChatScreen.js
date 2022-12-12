import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import Header from "../components/Header";
import ChatList from "../components/ChatList";
import { useNavigation } from "@react-navigation/core";
import { Ionicons } from "@expo/vector-icons";

const ChatScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView forceInset={{ bottom: "always", top: "never" }}>
      <View>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 20,
          }}>
          <TouchableOpacity
            style={{ top: "5%", marginLeft: 20 }}
            onPress={() => navigation.navigate("Home")}>
            <Ionicons
              name="chevron-back-outline"
              size={35}
              color="black"></Ionicons>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "black",
              top: "5%",
              alignItems: "center",
              alignContent: "center",
              alignSelf: "center",
              marginLeft: "28%",
            }}>
            {" "}
            Chat
          </Text>
        </View>
      </View>
      {/* <Header title="Chat" /> */}
      <ChatList />
    </SafeAreaView>
  );
};

export default ChatScreen;
