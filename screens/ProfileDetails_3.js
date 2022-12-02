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

const ProfileDetails_3 = () => {
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
              I am a
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#2A9287",
              width: 295,
              top: 150,
              borderRadius: 12,
              alignContent: "center",
              alignSelf: "center",
              height: 58,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "medium",
                marginLeft: 15,
                top: 18,
                color: "white",
              }}>
              Woman
            </Text>
            <Feather
              name="check"
              size={24}
              color="white"
              style={{ top: -4.5, marginLeft: 240 }}
            />
          </View>

          <View
            style={{
              borderColor: "#E8E6EA",
              borderWidth: 1,
              width: 295,
              top: 150,
              borderRadius: 12,
              alignContent: "center",
              alignSelf: "center",
              margin: 10,
              height: 58,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "medium",
                marginLeft: 15,
                top: 18,
                color: "black",
              }}>
              Man
            </Text>
            <Feather
              name="check"
              size={24}
              color="#E8E6EA"
              style={{ top: -4.5, marginLeft: 240 }}
            />
          </View>
          <View
            style={{
              backgroundColor: "#2A9287",
              width: 295,
              top: 380,
              borderRadius: 12,
              alignContent: "center",
              alignSelf: "center",
              margin: 10,
              height: 58,
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginLeft: 0,
                top: 18,
                color: "white",
                alignSelf: "center",
              }}>
              Submit
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProfileDetails_3;

const styles = StyleSheet.create({});
