import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import { Feather, Ionicons } from "@expo/vector-icons";
import useAuth from "../hooks/useAuth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const ProfileDetails_3 = () => {
  const navigation = useNavigation();
  const [gender, setGender] = useState();
  const {user} = useAuth();

  
  const [age, setAge] = useState(null);
  const [image, setImage] = useState(null);
  const [job, setJob] = useState(null);
  const [email, setEmail] = useState(null);
  const [birth, setBirth] = useState(null);
  const [phone, setPhone] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  
  useEffect(()=>{
    getDoc(doc(db, "users", user.uid)).then((document)=>{
      setImage(document.data()?.photoURL);
      setEmail(document.data()?.email);
      setPhone(document.data()?.phone);
      setJob(document.data()?.job);
      setBirth(document.data()?.birth);
      setAge(document.data()?.age);
    });
  },[]);

  const SaveGender = () =>{
    setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      displayName: user.displayName,
      photoURL: image,
      job: job,
      age: age,
      phone:phone,
      birth:birth,
      email:email,
      gender:gender,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        alert(error.message);
      });
  }
  
  return (
    <View>
      <SafeAreaView>
        <StatusBar hidden={true} />
        <View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "white",
              borderRadius: 15,
              width: 52,
              height: 52,
              marginLeft: 20,
              top: 40,
              borderColor: "#E8E6EA",
              borderWidth: 1,
            }}>
            <TouchableOpacity>
              <Ionicons
                name="chevron-back-outline"
                size={42}
                color="#2A9287"
                style={{
                  alignContent: "center",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  margin: 4,
                }}></Ionicons>
            </TouchableOpacity>
          </View>
          <View style={{ padding: 31 }}>
            <Text
              style={{
                fontSize: 34,
                fontWeight: "bold",
                top: 90,
                padding: 10,
              }}>
              I am a
            </Text>
          </View>
          {
            gender === "Man" ? (
              <View style={{width:"100%", height:100}}>
              <View style={{
                backgroundColor: "#2A9287",
                width: 295,
                top: 150,
                borderRadius: 12,
                alignContent: "center",
                alignSelf: "center",
                height: 58,
                marginBottom:10,
                elevation:5
              }}>
                <Text
              style={{
                fontSize: 16,
                fontWeight: "medium",
                marginLeft: 15,
                top: 18,
                color: "white",
              }}>
              Man
            </Text>
            <Feather
              name="check"
              size={24}
              color="white"
              style={{ top: -4.5, marginLeft: 240 }}
            />
            </View>
            <TouchableOpacity style={{
              backgroundColor: "white",
              width: 295,
              top: 150,
              borderRadius: 12,
              alignContent: "center",
              alignSelf: "center",
              height: 58,
              elevation:5
            }}    onPress={()=> setGender("Woman")}>
              <Text
            style={{
              fontSize: 16,
              fontWeight: "medium",
              marginLeft: 15,
              top: 18,
              color: "#2A9287",
            }}>
            Woman
          </Text>
            </TouchableOpacity>
              </View>
            ) : (
            <View style={{width:"100%", height:100}}>
            <TouchableOpacity style={{
              backgroundColor: "white",
              width: 295,
              top: 150,
              borderRadius: 12,
              alignContent: "center",
              alignSelf: "center",
              height: 58,
              marginBottom:10,
              elevation:5
            }} onPress={()=>setGender("Man")}>
              <Text
            style={{
              fontSize: 16,
              fontWeight: "medium",
              marginLeft: 15,
              top: 18,
              color: "#2A9287",
            }}>
            Man
          </Text>
          </TouchableOpacity>
          <View style={{
            backgroundColor: "#2A9287",
            width: 295,
            top: 150,
            borderRadius: 12,
            alignContent: "center",
            alignSelf: "center",
            height: 58,
            elevation:5
          }} >
            <Text
          style={{
            fontSize: 16,
            fontWeight: "medium",
            marginLeft: 15,
            top: 18,
            color: "white",
          }}>
          Woman
        </Text>
          <Feather
            name="check"
            size={24}
            color="white"
            style={{ top: -4.5, marginLeft: 240 }}
          />
          </View>
            </View>
            )
          }

          <TouchableOpacity
            style={{
              backgroundColor: "#2A9287",
              width: 295,
              top: 380,
              borderRadius: 12,
              alignContent: "center",
              alignSelf: "center",
              margin: 10,
              height: 58,
            }} onPress={()=>SaveGender()}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                marginLeft: 0,
                top: 18,
                color: "white",
                alignSelf: "center",
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProfileDetails_3;

const styles = StyleSheet.create({});
