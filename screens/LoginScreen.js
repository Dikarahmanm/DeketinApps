import {
  View,
  Text,
  Button,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/core";
import { styled, StyledComponent } from "nativewind";

const LoginScreen = () => {
  const { promptAsync, setLoading, loading } = useAuth();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View className="flex-1">
      <ImageBackground
        resizeMode="cover"
        className="flex-1"
        source={{
          uri: "https://tinder.com/static/tinder.png",
          // SplashScreen Image
        }}>
        <TouchableOpacity
          className="absolute bottom-20 w-52 bg-white p-3 rounded-2xl mx-12"
          onPress={() => {
            promptAsync();
            setLoading(true);
          }}>
          <Text className="text-center">Sign in & get swiping</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
