import { SafeAreaView, View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/core";
import NotifList from "../components/NotifList";

const NotifScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <Header title="Notif" />
      <NotifList />
    </SafeAreaView>
  );
};

export default NotifScreen;
