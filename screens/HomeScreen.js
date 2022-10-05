import {
  View,
  Text,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";
import { async } from "@firebase/util";
import { query, collection, doc,getDoc, getDocs, onSnapshot, setDoc, where, DocumentSnapshot, Timestamp, serverTimestamp } from "firebase/firestore";
import { useRef } from "react";
import { db } from "../firebase";
import generateId from "../lib/generateId";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  const swipeRef = useRef(null);
  const [profiles, SetProfiles] = useState([]);

  useLayoutEffect(
    () => 
    onSnapshot(doc(db, "users", user.uid), (snapshot) => {
      if (!snapshot.exists()) {
        navigation.navigate("Modal");
      }
    }),
    []
  );

  useEffect(()=>{
    let unsub;
    const fetchCards = async () => {
      const passes = await getDocs(collection(db, 'users', user.uid, 'passes')).then
      (snapshot => snapshot.docs.map(doc => doc.id));
      const swipes = await getDocs(collection(db, 'users', user.uid, 'swipes')).then
      (snapshot => snapshot.docs.map(doc => doc.id));
      const passedUserIds = passes.length > 0 ? passes : ['test'];
      const swipesUserIds = swipes.length > 0 ? swipes : ['test'];
      console.log([...swipesUserIds]);
      unsub = onSnapshot(query(collection(db, 'users'), where('id', 'not-in', [...passedUserIds, ...swipesUserIds])), snapshot =>{
        SetProfiles(
          snapshot.docs.filter(doc => doc.id !== user.uid ).map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
    });
    };
    fetchCards();
    return unsub;
  }, [db]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const SwipeLeft = async (cardIndex) => {
    if (!profiles[cardIndex]) return;
    const userSwiped = profiles[cardIndex];
    console.log(`You Swiped Pass on ${userSwiped.displayName}`);
    setDoc(doc(db, "users", user.uid, "passes", userSwiped.id), userSwiped);
  };
  const SwipeRight = async (cardIndex) => {
    if(!profiles[cardIndex])return;

    const userSwiped = profiles[cardIndex];
    console.log(`You Swiped Right on ${userSwiped.displayName}`);
    const loggedInProfile = await (
      await getDoc(db, "users", user.uid))
      .data();
    
    getDoc(doc(db, "users", userSwiped.id, "swipes", user.uid)).then(
      (documentSnapshot) => {
        if(documentSnapshot.exists()){
          console.log("A MAtch");
          //user match with you before you matched with them
          //Create a MATCH!!
          console.log(`Hooray, you MATCHED with ${userSwiped.displayName}`);
          setDoc(
            doc(db, "users", user.uid, "swipes", userSwiped.id), 
            userSwiped
            );

            //CREATE A MATCH!!
            setDoc(doc(db, 'matches', generateId(user.uid, userSwiped.id)), {
              users:{
                [user.uid]:loggedInProfile,
                [userSwiped.id]:userSwiped
              },
              userMatched:[user.uid, userSwiped.id],
              timestamp:serverTimestamp(),
            });
            navigation.navigate("Match", {
              loggedInProfile, 
              userSwiped,
            });
        } else{
          console.log("Not A MAtch");
          setDoc(
            doc(db, "users", user.uid, "swipes", userSwiped.id), 
            userSwiped
            );
    
        }
      }
      );

  };

  return (
    <SafeAreaView className="flex-1">
      {/*Header */}
      <View>
        <TouchableOpacity className="bg-black">
          <Image
            source={require("../assets/Group9.png")}
            style={{
              top: "80%",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "30%",
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <AntDesign
            name="filter"
            size={24}
            color="black"
            style={{
              height: 34,
              width: 34,
              marginLeft: "85%",
              top: "32%",
            }}
          />
        </TouchableOpacity>
      </View>

      {/*End of Header */}

      {/*CARDS */}
      <View className="flex-1 -mt-6">
        <Swiper
          ref={swipeRef}
          containerStyle={{ backgroundColor: "transparent" }}
          cards={profiles}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          onSwipedLeft={(cardIndex) => {
            SwipeLeft(cardIndex);
          }}
          onSwipedRight={(cardIndex) => {
            SwipeRight(cardIndex);
          }}
          renderCard={(card) =>
            card ? (
              <View
                key={card.id}
                className="bg-white h-3/4 rounded-xl relative">
                <Image
                  className="absolute top-0 h-full w-full rounded-xl"
                  source={{ uri: card.photoURL }}
                />
                <Text
                  style={{
                    top: "85%",
                    fontSize: 24,
                    left: "5%",
                    fontWeight: "bold",
                    color: "white",
                  }}>
                  {" "}
                  {card.displayName}, {card.age}{" "}
                </Text>
                <Text
                  style={{
                    top: "85.1%",
                    fontSize: 18,
                    left: "5%",
                    fontStyle: "normal",
                    color: "white",
                  }}>
                  {" "}
                  {card.distance}{" "}
                </Text>
              </View>
            ) : (
              <View className="relative bg-white h-3/4 rounded-xl justify-center items-center">
                <Text className="font-bold pb-5">No more profiles</Text>
                <Image
                  className="h-20 w-20"
                  height={50}
                  width={50}
                  source={{ uri: "https://links.papareact.com/6gb" }}
                />
              </View>
            )
          }
        />
      </View>
      <View className="flex flex-row justify-evenly" style={{ bottom: "5%" }}>
        <TouchableOpacity onPress={() => swipeRef.current.swipeLeft()}>
          <Entypo
            name="cross"
            size={45}
            color="white"
            style={{
              borderRadius: 32,
              width: 64,
              height: 64,
              backgroundColor: "red",
              paddingLeft: 10,
              paddingTop: 10,
              position: "relative",
            }}
            className="items-center justify-center rounded-full w-16 h-16 bg-red-400"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Modal")}>
          <Entypo
            name="heart"
            size={36}
            color="white"
            style={{
              borderRadius: 32,
              width: 64,
              height: 64,
              backgroundColor: "#2A9287",
              paddingLeft: 14,
              paddingTop: 15,
              position: "relative",
            }}
            className="items-center justify-center rounded-full w-16 h-16 bg-red-400"
          />
        </TouchableOpacity>
      </View>

      <Button title="Logout" onPress={() => logout()} />
    </SafeAreaView>
  );
};

export default HomeScreen;
