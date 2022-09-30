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
import { doc, onSnapshot, setDoc } from "firebase/firestore";
import { useRef } from "react";
import { db } from "../firebase";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  const swipeRef = useRef(null);
  const [profiles, SetProfiles] = useState([]);

  useLayoutEffect(
    ()=>{
    const unsub = onSnapshot(doc(db, 'users', user.uid), snapshot=>{
     if (!snapshot.exists){
      navigation.navigate("Modal");
     }
    });
    return unsub();
  },[]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const DUMMY_DATA = [
    {
      firstName: "Rex",
      distance: "5 miles",
      age: "27",
      photoURL:
        "https://i.ibb.co/hKqkwXr/charlie-green-3-Jmf-ENc-L24-M-unsplash.jpg",
      id: 123,
    },
    {
      firstName: "Agung",
      distance: "7 miles",
      age: "21",
      photoURL: "https://i.ibb.co/yVGGsJt/sigmund-a19-OVaa2rz-A-unsplash.jpg",
      id: 456,
    },
    {
      firstName: "Ucup",
      distance: "12 miles",
      age: "25",
      photoURL: "https://i.ibb.co/W3Mf52h/nate-J5-U-22o1ubw-unsplash.jpg",
      id: 789,
    },
  ];

  const SwipeLeft = async(cardIndex)=>{
    if(!DUMMY_DATA[cardIndex])return;
    const userSwiped = DUMMY_DATA[cardIndex];
    console.log(`You Swiped Pass on ${userSwiped.displayName}`)
    setDoc(doc(db, 'users', user.uid, 'passes', userSwiped.id), userSwiped)
  };
  const SwipeRight = async(cardIndex)=>{

  };

  return (
    <SafeAreaView className="flex-1">
      {/*Header */}
      <View>
        <TouchableOpacity>
          <Image
            source={require("D:/GameProjects/DeketinAppsProj/assets/Group9.png")}
            style={{
              top: "80%",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "30%",
            }}
          />
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
          cards={DUMMY_DATA}
          stackSize={5}
          cardIndex={0}
          animateCardOpacity
          verticalSwipe={false}
          onSwipedLeft={(cardIndex)=>{SwipeLeft(cardIndex);}}
          onSwipedRight={(cardIndex)=>{SwipeRight(cardIndex);}}
          renderCard={(card) => card ? (
            <View key={card.id} className="bg-white h-3/4 rounded-xl relative">
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
                {card.firstName}, {card.age}{" "}
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
          ) : (<View className="relative bg-white h-3/4 rounded-xl justify-center items-center">
            <Text className="font-bold pb-5">No more profiles</Text>
            <Image className="h-20 w-20"
            height={50}
            width={50}
            source={{uri:"https://links.papareact.com/6gb"}}/>
          </View>)}
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

        <TouchableOpacity onPress={() => {swipeRef.current.swipeRight()}}>
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
      
      <Button
        title="Logout"
        onPress={() => logout()}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
