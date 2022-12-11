import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect } from "react";
import { db } from "../firebase";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { useLayoutEffect } from "react";
import Header from "../components/Header";
import { SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Navigation from "../components/Navigation";

const LikesScreen = () => {
  const [likes, setLikes] = useState([]);
  const { user } = useAuth();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "users", user.uid, "notifs"),
        where("type", "==", "like")
      ),
      (snapshot) =>
        setLikes(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        )
    ),
      [user];
  });
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 10,
        }}>
        <TouchableOpacity
          style={{ top: "0%", marginLeft: 20 }}
          onPress={() => navigation.navigate("Home")}>
          <Ionicons
            name="chevron-back-outline"
            size={35}
            color="black"></Ionicons>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            color: "black",
            top: "0%",
            alignItems: "center",
            alignContent: "center",
            alignSelf: "center",
            marginLeft: "28%",
          }}>
          {" "}
          Likes
        </Text>
      </View>

      {likes.length > 0 ? (
        <FlatList
          data={likes}
          style={{ height: "90%" }}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                alignContent: "center",
                marginTop: 20,
                marginBottom: 20,
              }}>
              <View
                style={[
                  {
                    width: "85%",
                    height: 250,
                    borderRadius: 20,
                    alignContent: "center",
                    alignItems: "center",
                  },
                  styles.cardShadow,
                ]}>
                <Image
                  style={{
                    width: "100%",
                    height: "80%",
                    borderRadius: 20,
                  }}
                  source={{ uri: item?.userRef?.photoURL }}
                />
                <Entypo
                  name="heart"
                  color="#ff0f4f"
                  size={24}
                  style={{
                    top: 7,
                    right: 10,
                    position: "absolute",
                  }}
                />
                <View
                  style={{
                    width: "100%",
                    height: "20%",
                    flexDirection: "row",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}>
                  <Text
                    style={{
                      color: "#000000",
                      fontWeight: "bold",
                      marginLeft: 10,
                    }}>
                    {item?.userRef?.displayName}
                  </Text>

                  <Text
                    style={{
                      color: "#878787",
                      textAlign: "right",
                      fontWeight: "bold",
                      marginRight: 10,
                      fontSize: 25,
                    }}>
                    {item?.userRef?.age}
                  </Text>
                </View>
              </View>
            </View>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text
          style={{
            width: "100%",
            height: 50,
            fontSize: 20,
            textAlignVertical: "center",
            color: "#a6a6a6",
            textAlign: "center",
          }}>
          No likes yet!
        </Text>
      )}
      <View style={{}}>
        <Navigation CurrentPageName={"Likes"} />
      </View>
    </SafeAreaView>
  );
};

export default LikesScreen;

const styles = StyleSheet.create({
  cardShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    backgroundColor: "white",
    borderRadius: 20,

    elevation: 10,
  },
});
