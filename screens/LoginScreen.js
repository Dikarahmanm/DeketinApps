import { View, Text, Button, ImageBackground } from "react-native";
import React, { useLayoutEffect } from "react";
import useAuth from "../hooks/useAuth";
import { useNavigation } from "@react-navigation/core";
import { styled, StyledComponent } from "nativewind";

const LoginScreen = () => {
  // const{propmtAsync, loading }=useAuth();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });

  return (
    <View className="flex-1">
      {/* <Text>{loading ? : "loading...." : "Login to the app"}</Text> */}
      {/* <Button title='login' onPress={propmtAsync()}/> */}
      <ImageBackground
        resizeMode="cover"
        className="flex-1"
        source={{
          uri: "https://tinder.com/static/tinder.png",
        }}>
        <Text className="flex-1 items-center justify-center">
          Sign in & get ASSSu
        </Text>
      </ImageBackground>
    </View>
  );
};

export default LoginScreen;
