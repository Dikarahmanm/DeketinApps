import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/core";
import NotifList from "../components/NotifList";
import { Ionicons } from "@expo/vector-icons";

const NotifScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
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
          Notif
        </Text>
      </View>

      <NotifList />
    </SafeAreaView>
  );
};

export default NotifScreen;
