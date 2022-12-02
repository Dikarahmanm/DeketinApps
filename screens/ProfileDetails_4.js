import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import { Feather, Ionicons } from "@expo/vector-icons";

const ProfileDetails_4 = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View>
      <SafeAreaView>
        <StatusBar hidden={true} />
        <View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              borderRadius: 15,
              width: 52,
              height: 52,
              marginLeft: 20,
              top: 40,
              borderColor: "#E8E6EA",
              borderWidth: 1,
            }}>
            <TouchableOpacity>
              <Ionicons
                name="chevron-back-outline"
                size={42}
                color="#2A9287"
                style={{
                  alignContent: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  margin: 4,
                }}></Ionicons>
            </TouchableOpacity>
          </View>

          <View style={{ padding: 31 }}>
            <Text
              style={{
                fontSize: 34,
                fontWeight: "bold",
                top: 90,
                padding: 10,
              }}>
              Your interests
            </Text>

            <Text
              style={{
                fontSize: 14,
                fontWeight: "400",
                top: 90,
                padding: 10,
                color: "gray",
              }}>
              Select a few of your interests and let everyone know what you’re
              passionate about.
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                backgroundColor: "black",
                borderRadius: 30,
                width: 100,
              }}>
              <Text>asndassj</Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProfileDetails_4;
