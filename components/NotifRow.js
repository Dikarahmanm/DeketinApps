import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import getMatchedUserInfo from "../lib/getMatchedUserInfo";
import tw from "tailwind-rn";

const NotifRow = ({ notifDetails }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.cardShadow}>
      <Image
        className="rounded-full h-16 w-16 mr-4"
        style={{ borderRadius: 100, height: 64, width: 64,marginBottom:10, marginRight: 16 }}
        source={{ uri: notifDetails?.userRef?.photoURL }}
      />

      <View style={{marginBottom:20}}>
        <Text
          className="text-lg font-semibold"
          style={{
            fontSize: 18,
            lineHeight: 28,
            fontWeight: "600",
          }}>
          {notifDetails?.type === "like" ? notifDetails?.userRef?.displayName + " likes you!" : "You matched with " + notifDetails?.userRef?.displayName + "!"}
        </Text>
      </View>
    </View>
  );
};

export default NotifRow;

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 12,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "white",
    marginHorizontal: 20,
    marginVertical: 4,
    borderRadius: 8,

    elevation: 2,
  },
});
