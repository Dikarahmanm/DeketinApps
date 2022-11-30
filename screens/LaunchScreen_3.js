import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import React from "react";
import { Foundation, Ionicons } from "@expo/vector-icons";
import { TailwindProvider } from "tailwind-rn/dist";

const LaunchScreen_3 = () => {
  // const navigation = useNavigation();
  return (
    <TailwindProvider>
      <View style={{ flex: 1 }}>
        <ImageBackground
          resizeMode="cover"
          source={{
            uri: "https://i.ibb.co/wzyz667/Frame-3-2.png",
          }}
          style={{
            flex: 1,
            justifyContent: "center",
          }}>
          <View style={{ flexDirection: "row", top: "-40%", left: "5%" }}>
            <View style={{ backgroundColor: "#FFFF", borderRadius: "30%" }}>
              <TouchableOpacity>
                <Ionicons
                  name="chevron-back-outline"
                  size={42}
                  color="#2A9287"></Ionicons>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              top: "-35%",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Text style={{ fontSize: 20, color: "white", fontStyle: "medium" }}>
              {" "}
              Marsha cantik bangettttt{" "}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TailwindProvider>
  );
};

export default LaunchScreen_3;

const styles = StyleSheet.create({});
