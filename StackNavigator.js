import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import LoginScreen from "./screens/LoginScreen";
import useAuth from "./hooks/useAuth";
import LoginPhone from "./screens/LoginPhone";
const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const { user } = useAuth();
  return (
    <Stack.Navigator
      ScreenOptions={{
        headerShown: null,
      }}>
      {user ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Chat" component={ChatScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="LoginPhone" component={LoginPhone} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
