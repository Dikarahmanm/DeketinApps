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
import { AntDesign, Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";
import { async } from "@firebase/util";
import {
  query,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  setDoc,
  where,
  DocumentSnapshot,
  Timestamp,
  serverTimestamp,
} from "firebase/firestore";
import { useRef } from "react";
import { db } from "../firebase";
import generateId from "../lib/generateId";
import Navigation from "../components/Navigation";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  const swipeRef = useRef(null);
  const [profiles, SetProfiles] = useState([]);
  const [mainCardIDx, setMainCardIdx] = useState([]);

  useLayoutEffect(
    () =>
      onSnapshot(doc(db, "users", user.uid), (snapshot) => {
        if (!snapshot.exists()) {
          navigation.navigate("ProfileDetails");
        }else if(!snapshot.data().gender){
          navigation.navigate("ProfileDetails2");
        }
      }),
    []
  );

  useEffect(() => {
    let unsub;
    const fetchCards = async () => {
      const passes = await getDocs(
        collection(db, "users", user.uid, "passes")
      ).then((snapshot) => snapshot.docs.map((doc) => doc.id));
      const swipes = await getDocs(
        collection(db, "users", user.uid, "swipes")
      ).then((snapshot) => snapshot.docs.map((doc) => doc.id));
      const passedUserIds = passes.length > 0 ? passes : ["test"];
      const swipesUserIds = swipes.length > 0 ? swipes : ["test"];
      unsub = onSnapshot(
        query(
          collection(db, "users"),
          where("id", "not-in", [...passedUserIds, ...swipesUserIds])
        ),
        (snapshot) => {
          SetProfiles(
            snapshot.docs
              .filter((doc) => doc.id !== user.uid)
              .map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }))
          );
        }
      );
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
    setDoc(doc(db, "users", user.uid, "passes", userSwiped.id), userSwiped);
  };
  const SwipeRight = async (cardIndex) => {
    if (!profiles[cardIndex]) return;

    const userSwiped = profiles[cardIndex];
    const loggedInProfile = await ( await getDoc(doc(db, "users", user.uid))).data();
    
    getDoc(doc(db, "users", userSwiped.id, "swipes", user.uid)).then(
      (documentSnapshot) => {
        if (documentSnapshot.exists()) {
          //user match with you before you matched with them
          //Create a MATCH!!
          setDoc(
            doc(db, "users", user.uid, "swipes", userSwiped.id),
            userSwiped
          );
          //CREATE A MATCH!!
          setDoc(doc(db, "matches", generateId(user.uid, userSwiped.id)), {
            users: {
              [user.uid]: loggedInProfile,
              [userSwiped.id]: userSwiped,
            },
            userMatched: [user.uid, userSwiped.id],
            timestamp: serverTimestamp(),
          });
          navigation.navigate("Match", {
            loggedInProfile,
            userSwiped,
          });
          setDoc(
            doc(db, "users", userSwiped.id, "notifs", "match_"+ loggedInProfile.id),
            {type:"match",userRef: loggedInProfile,timestamp:serverTimestamp(),}
          );
        } else {
          setDoc(
            doc(db, "users", user.uid, "swipes", userSwiped.id),
            userSwiped
          );
        }
      }
    );

    setDoc(
      doc(db, "users", userSwiped.id, "notifs", "like_"+ loggedInProfile.id),
      {type:"like",userRef: loggedInProfile,timestamp:serverTimestamp(),}
    );
  };
  return (
    <SafeAreaView className="flex-1" style={{flex:1, backgroundColor:"#ebebeb"}}>
      <View style={{height:"80%"}}>
      {/*Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginTop: 40,
        }}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Modal")}
            style={{}}>
            <Image source={require("../assets/Group9.png")} />
          </TouchableOpacity>
        </View>
        <View style={{ left: "150%", top: "1%" }}>
          <TouchableOpacity
            style={{width:50, height:50, alignContent:"center"}}
            onPress={() => navigation.navigate("Notif")}>
            <MaterialCommunityIcons name="bell" size={24} color="#2A9287" />
          </TouchableOpacity>
        </View>
      </View>

      {/*End of Header */}
      
      <View className="flex-1" style={{flex:1, marginTop:"-8%"}}>
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
            <View style={{width:"100%", height:"100%"}}>
              {
              card ? (
              <View key={card.id}  style={{backgroundColor:"#FFFFFF", height:"75%", borderRadius:25, borderWidth:1, borderColor:"#e3e3e3"}}>
                
                <Image style={{height:"85%", width:"100%", top:0 , borderRadius:25}} source={{ uri: card.photoURL }}/>
                <View  style={{flexDirection: "row",justifyContent: "space-between",alignItems:"center",}}>
                  <View style={{marginLeft:"5%", marginTop:"2%"}}>
                    <Text style={{fontWeight:"bold", fontSize:20, color:"#1c1c1c"}}>{card.displayName}</Text>
                    <Text style={{fontSize:16, color:"#878787"}}>{card.job}</Text>
                  </View>
                    <Text style={{marginTop:"5%", marginRight:"8%", fontWeight:"bold", fontSize:25, color:"#878787"}}>{card.age}</Text>
                </View>
              </View>
                
            ) : (
              <View  style={{backgroundColor:"#FFFFFF", height:"75%", borderRadius:25, justifyContent:"center", alignItems:"center", borderWidth:1, borderColor:"#e3e3e3"}}>
                <Text style={{fontWeight:"bold", fontSize:18, color:"#1c1c1c"}}>No More Profiles</Text>
                <Image style={{height:"40%", width:"40%", resizeMode:"contain"}} source={{ uri: "https://links.papareact.com/6gb" }}/>
              </View>
            )
              }
              
            </View>
            
          }
          />
      </View>
      
      <View 
      style={{
        flexDirection: "row",
        justifyContent: "center",
        paddingBottom:"5%",
      }}>
        {/* <TouchableOpacity onPress={() => swipeRef.current.swipeLeft()}> */}
        <View style={{
          paddingRight: "10%",
        }}>
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
        </View>
        
        <View style={{
          paddingLeft: "10%",
        }}>
          <TouchableOpacity onPress={() => swipeRef.current.swipeRight()}>
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
        
      </View>
      </View>
    <Navigation></Navigation>
    </SafeAreaView>
  );
};

export default HomeScreen;
