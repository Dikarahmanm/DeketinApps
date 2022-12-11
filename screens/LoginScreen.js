import {
  View,
  Text,
  Button,
  ImageBackground,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Image,
} from "react-native";
import React, { useLayoutEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/core";
import { styled, StyledComponent } from "nativewind";
import { IOS } from "nativewind/dist/utils/selector";
import { TailwindProvider } from "tailwind-rn/dist";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import { AntDesign, Foundation } from "@expo/vector-icons";

const LoginScreen = () => {
  const { promptAsync, setLoading, loading } = useAuth();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <TailwindProvider>
      <View className="flex-1 justify-center" style={{ flex: 1 }}>
        <ImageBackground
          resizeMode="cover"
          className="flex-1"
          style={{ flex: 1 }}
          source={require("../assets/LaunchScreen.png")}>
          <View style={styles.box}>
            <TouchableOpacity
              onPress={() => {
                promptAsync();
                setLoading(true);
              }}>
              <Image
                source={require("../assets/google.png")}
                style={styles.googleIcon}
              />
              <Text style={styles.Text} className="justify-center items-center">
                Login With Google
              </Text>
            </TouchableOpacity>
          </View>

          {/* <Image
              source={{
                uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
              }} */}
        </ImageBackground>
      </View>
    </TailwindProvider>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    width: "70%",
    marginLeft: "15%",
    marginRight: "15%",
    height: 45,
    top: "53%",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 25,
    textAlign: "center",
    textAlignVertical: "center",
    flexDirection: "row",
  },
  googleIcon: {
    position: "absolute",
    top: "10%",
  },
  Text: {
    fontSize: 16,
    textAlignVertical: "center",
    position: "relative",
    top: "-33%",
    color: "#2BBDAF",
    left: 90,
  },
  googleIcon: {
    height: 30,
    width: 30,
    resizeMode: "stretch",
    top: 10,
    left: 20,
  },
});
