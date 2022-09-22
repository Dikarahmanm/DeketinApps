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
      <View className="flex-1 justify-center">
        <ImageBackground
          resizeMode="cover"
          className="flex-1"
          source={{
            uri: "https://i.ibb.co/M1zwzPy/Frame-2-3.png",
          }}>
          <TouchableOpacity
            style={styles.box}
            onPress={() => {
              promptAsync();
              setLoading(true);
            }}>
            <AntDesign
              name="google"
              size={24}
              color="black"
              style={styles.googleIcon}>
              {" "}
              <Text style={styles.Text} className="justify-center items-center">
                Login With Google
              </Text>
            </AntDesign>
            {/* <Image
              source={{
                uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png",
              }} */}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.box2}
            onPress={() => navigation.navigate("LoginPhone")}>
            <Foundation
              name="telephone"
              size={24}
              color="black"
              style={styles.googleIcon}>
              <Text style={styles.Text} className="justify-center items-center">
                Login With Phone Number
              </Text>
            </Foundation>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </TailwindProvider>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  box: {
    position: "absolute",
    width: 300,
    height: 34,
    left: 3,
    top: 322,
    backgroundColor: "white",
    borderRadius: 25,
    textAlign: "center",
    textAlignVertical: "center",
  },
  googleIcon: {
    marginLeft: 10,
    marginTop: 4,
    position: "absolute",
  },
  Text: {
    fontSize: 16,
    textAlignVertical: "center",
    position: "absolute",
    alignItems: "center",
    marginLeft: 10,
    color: "#2BBDAF",
  },
  box2: {
    position: "absolute",
    width: 300,
    height: 34,
    left: 3,
    top: 370,
    backgroundColor: "white",
    borderRadius: 25,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
