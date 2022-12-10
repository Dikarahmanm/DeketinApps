import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";

const ReceiverMessage = ({ msg }) => {
  return (
    <View
      style={{
        backgroundColor: "#1be053",
        borderRadius: 100,
        borderTopLeftRadius: 0,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 3,
        marginVertical: 2,
        alignSelf: "flex-start",
      }}>
      <Image
        style={{
          height: 12,
          width: 12,
          borderRadius: 100,
          position: "absolute",
          top: 0,
          left: -14,
        }}></Image>
      <Text style={{ color: "#FFFFFF" }}>{msg.message}</Text>
    </View>
  );
};

export default ReceiverMessage;
