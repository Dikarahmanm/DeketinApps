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
import MessageScreen from "./screens/MessageScreen";
import ProfileDetails from "./screens/ProfileDetails";
import ProfileDetails_3 from "./screens/ProfileDetails_3";
import ProfileDetails_4 from "./screens/ProfileDetails_4";
import Profile from "./screens/Profile";
import test from "./screens/test";
import NotifScreen from "./screens/NotifScreen";
import LikesScreen from "./screens/LikesScreen";

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
              <Stack.Screen name="Match" component={MatchedScreen} />
              <Stack.Screen name="Chat" component={ChatScreen} />
              <Stack.Screen name="Message" component={MessageScreen} />
              <Stack.Screen name="Notif" component={NotifScreen} />
              <Stack.Screen name="Likes" component={LikesScreen} />
              <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
            <Stack.Screen name="ProfileDetails2" component={ProfileDetails_3} />
            <Stack.Screen name="ProfileDetails3" component={ProfileDetails_4} />
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
