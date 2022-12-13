import { View, Text, TextInput, SafeAreaView, Keyboard } from "react-native";
import React from "react";
import Header from "../components/Header";
import { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import useAuth from "../hooks/useAuth";
import getMatchedUserInfo from "../lib/getMatchedUserInfo";
import { useState } from "react";
import { Button } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { FlatList } from "react-native";
import ReceiverMessage from "../components/ReceiverMessage";
import SenderMessage from "../components/SenderMessage";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import { serverTimestamp } from "firebase/firestore";
import { useEffect } from "react";

const MessageScreen = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const { params } = useRoute();
  const { matchDetails } = params;
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([]);
  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "matches", matchDetails.id, "messages"),
          orderBy("timestamp", "asc")
        ),
        (snapshot) =>
          setMessages(
            snapshot.docs.map((dat) => ({
              id: dat.id,
              ...dat.data(),
            }))
          )
      ),
    [matchDetails, db]
  );

  const sendMessage = () => {
    addDoc(collection(db, "matches", matchDetails.id, "messages"), {
      timestamp: serverTimestamp(),
      userId: user.uid,
      displayName: user.displayName,
      photoURL: matchDetails.users[user.uid].photoURL,
      message: input,
    });

    setInput("");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header
        title={getMatchedUserInfo(matchDetails?.users, user.uid).displayName}
        callEnabled={true}
        photoURL={getMatchedUserInfo(matchDetails?.users, user.uid).photoURL}
      />

      {messages.length > 0 ? (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <FlatList
            data={messages}
            style={{ paddingHorizontal: 10 }}
            keyExtractor={(item) => item.id}
            inverted={false}
            renderItem={({ item: message }) =>
              message.userId === user.uid ? (
                <SenderMessage key={message.id} msg={message} />
              ) : (
                <ReceiverMessage key={message.id} msg={message} />
              )
            }
          />
        </TouchableWithoutFeedback>
      ) : (
        <View
          style={{
            width: "100%",
            height: 50,
            fontSize: 14,
            textAlignVertical: "center",
            color: "#a6a6a6",
            textAlign: "center",
            alignContent: "center",
            alignSelf: "center",
            alignItems: "center",
          }}>
          <Text style={{ textAlign: "center" }}>No Messages Yet</Text>
        </View>
      )}

      <TextInput
        style={{
          fontSize: 18,
          paddingLeft: "5%",
          paddingRight: "5%",
          height: "7%",
          borderWidth: 1,
          width: "78%",
          textDecorationLine: "none",
          borderColor: "#e3e3e3",
          borderRadius: 100,
          bottom: 0,
          position: "absolute",
        }}
        placeholder="Send Message"
        onChangeText={setInput}
        value={input}
      />
      <TouchableOpacity
        onPress={sendMessage}
        style={{
          flexDirection: "row-reverse",
          alignItems: "center",
          alignContent: "center",
          width: "20%",
          height: "5%",
          bottom: "1%",
          position: "absolute",
          left: "75%",
        }}>
        <Text
          style={{
            width: "100%",
            fontSize: 20,
            color: "#00b591",
            fontWeight: "bold",
            bottom: 0,
            alignContent: "center",
            textAlign: "right",
            justifyContent: "center",
          }}>
          Send
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MessageScreen;
