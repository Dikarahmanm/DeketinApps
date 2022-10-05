import { View, Text, Image } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const ChatScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [image, setImage] = useState(null);
  const [job, setJob] = useState(null);
  const [age, setAge] = useState(null);

  const incompleteFrom = !image || !job || !age;
  const updateUserProfile = () => {
    setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      displayName: user.displayName,
      photoURL: image,
      job: job,
      age: age,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <View>
      <Image
        resizeMode="contain"
        style={{
          top: "10%",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "30%",
        }}
        source={require("../assets/Group9.png")}
      />
      <Text
        className="text-xl text-gray-500 p-2 font-bold"
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "27%",
          marginTop: "7%",
        }}>
        Welcome {user.displayName}
      </Text>
      <Text className="text-center p-4 font-bold text-red-400">
        Step 1 : The Profile Pic
      </Text>
      <TextInput
        value={image}
        onChangeText={setImage}
        className="text-center text-xl pb=2"
        placeholder="Enter a Profile Pic URL"></TextInput>
      <Text className="text-center p-4 font-bold text-red-400">
        Step 2 : The Job
      </Text>
      <TextInput
        value={job}
        onChangeText={setJob}
        className="text-center text-xl pb=2"
        placeholder="Enter your occupation"></TextInput>
      <Text className="text-center p-4 font-bold text-red-400">
        Step 3 : The Age
      </Text>
      <TextInput
        value={age}
        onChangeText={setAge}
        className="text-center text-xl pb=2"
        placeholder="Enter your age"
        maxLength={2}
        keyboardType="number-pad"></TextInput>

      <TouchableOpacity
        disabled={incompleteFrom}
        className="w-64 p-3 rounded-xl absolute "
        style={{
          top: "170%",
          backgroundColor: incompleteFrom ? "gray" : "red",
          alignSelf: "center",
        }}
        onPress={updateUserProfile}>
        <Text
          className="text-center text-white text-xl"
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 20,
            lineHeight: 28,
          }}>
          {" "}
          Update Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatScreen;
