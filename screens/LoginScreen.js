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
                
              {" "}
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
    width: '70%',
    marginLeft:'15%',
    marginRight:'15%',
    height: 45,
    top: '53%',
    alignItems: 'center',
    backgroundColor: "white",
    borderRadius: 25,
    textAlign: "center",
    textAlignVertical: "center",
  },
  googleIcon: {
    position: "absolute",
    top:'10%',
  },
  Text: {
    fontSize: 16,
    textAlignVertical: "center",
    position: "relative",
    top:'15%',
    color: "#2BBDAF",
  },
  box2: {
    position: "absolute",
    width: '70%',
    marginLeft:'15%',
    marginRight:'15%',
    height: 45,
    alignItems: 'center',
    top: '60%',
    backgroundColor: "white",
    borderRadius: 25,
    textAlign: "center",
    textAlignVertical: "center",
  },
});
