import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import ChatScreen from "./screens/ChatScreen";
import LoginScreen from "./screens/LoginScreen";
import useAuth from "./hooks/useAuth";
import LoginPhone from "./screens/LoginPhone";
import ModalScreen from "./screens/ModalScreen";
import MatchedScreen from "./screens/MatchedScreen";
import ProfileDetails from "./screens/ProfileDetails";
import ProfileDetails_3 from "./screens/ProfileDetails_3";
import ProfileDetails_4 from "./screens/ProfileDetails_4";
import test from "./screens/test";

const StackNavigator = () => {
  const { user } = useAuth();
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{
          headerShown: null,
          contentStyle: { backgroundColor: "#f6f6f6f" },
        }}>
        {user ? (
          <>
            <Stack.Group>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Chat" component={ChatScreen} />
              <Stack.Screen name="Match" component={MatchedScreen} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: "modal" }}>
              <Stack.Screen name="Modal" component={ModalScreen} />
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: "transparentModal" }}>
              {/* <Stack.Screen name="Match" component={MatchedScreen} /> */}
            </Stack.Group>
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="LoginPhone" component={MatchedScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
