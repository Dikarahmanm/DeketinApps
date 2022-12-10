import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { Foundation, Ionicons, FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native";
import useAuth from "../hooks/useAuth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";

import DatePicker from "react-native-modern-datepicker";
import Modal from "react-native-modal";
import Navigation from "../components/Navigation";
const Profile = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [selectedDate, setSelectedDate] = useState("");
  const { user, logout } = useAuth();
  const [image, setImage] = useState(null);
  const [job, setJob] = useState(null);
  const [email, setEmail] = useState(null);
  const [birth, setBirth] = useState(null);
  const [phone, setPhone] = useState(null);
  const [loggedInProfile, setLoggedInProfile] = useState();

  const updateUserProfile = () => {
    var today = new Date();
    var birthDate = new Date(selectedDate);
    const age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    console.log(age);

    setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      displayName: user.displayName,
      photoURL: image,
      job: job,
      age: age,
      phone: phone,
      birth: birth,
      email: email,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    getDoc(doc(db, "users", user.uid)).then((document) => {
      setLoggedInProfile(document.data());
      setImage(document.data()?.photoURL);
      setEmail(document.data()?.email);
      setPhone(document.data()?.phone);
      setJob(document.data()?.job);
      setBirth(document.data()?.birth);
    });
  }, []);

  return (
    <View>
      <ScrollView>
        <StatusBar hidden={true} />
        <View>
          <View style={{ flexDirection: "column" }}>
            <Image
              source={require("../assets/Rectangle14.png")}
              style={{
                alignItems: "center",
                alignContent: "center",
                alignSelf: "center",
              }}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{ top: "-65%", marginLeft: 20 }}
              onPress={() => navigation.navigate("Home")}>
              <Ionicons
                name="chevron-back-outline"
                size={35}
                color="white"></Ionicons>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: "white",
                top: "-65%",
                alignItems: "center",
                alignContent: "center",
                alignSelf: "center",
                marginLeft: "28%",
              }}>
              {" "}
              Profile
            </Text>
          </View>
          <View style={{ top: "-15%", marginLeft: "2%" }}>
            <Image
              source={{ uri: loggedInProfile?.photoURL }}
              style={{
                alignSelf: "center",
                width: 122,
                height: 122,
                resizeMode: "cover",
                borderRadius: 100,
              }}
            />
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "600",
                alignSelf: "center",
                top: 15,
              }}>
              {loggedInProfile?.displayName}, {loggedInProfile?.age}
            </Text>
          </View>

          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: "white",
              top: "-25%",
              borderRadius: 50,
              marginLeft: "55%",
            }}>
            <TouchableOpacity>
              <Ionicons
                name="ios-pencil"
                size={25}
                color="#2A9287"
                style={{ padding: 7 }}
              />
            </TouchableOpacity>
          </View>

          {/* End Of Header */}
          <View style={{ top: "-14.2%" }}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 18, marginLeft: 10 }}>
                Account Settings
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    marginLeft: "66%",
                    textDecorationLine: "underline",
                    color: "#40E0D0",
                    fontSize: 16,
                  }}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirextion: "row",
                justifyContent: "space-between",
                top: 0,
              }}>
              <Text style={{ top: 33, marginLeft: 25, fontSize: 16 }}>
                Phone Number
              </Text>
              <TextInput
                style={{
                  height: 48,
                  borderWidth: 1,
                  marginLeft: 10,
                  marginRight: 10,
                  width: 370,
                  borderColor: "gray",
                  borderRadius: 7.5,
                  alignContent: "center",
                  textAlign: "right",
                  justifyContent: "center",
                  paddingRight: 10,
                  color: "gray",
                  fontSize: 16,
                }}
                keyboardType="phone-pad"
                placeholder="+62123456789"
                placeholderTextColor={"gray"}
                defaultValue={loggedInProfile?.phone}
                onChangeText={setPhone}
              />
              <Text style={{ top: 33, marginLeft: 25, fontSize: 16 }}>
                Date of Birth
              </Text>
              <TouchableOpacity
                style={{
                  height: 48,
                  borderWidth: 1,
                  marginLeft: 10,
                  marginRight: 10,
                  width: 370,
                  borderColor: "gray",
                  borderRadius: 7.5,
                  alignContent: "center",
                  textAlign: "right",
                  justifyContent: "center",
                  paddingRight: 10,
                  color: "gray",
                  fontSize: 16,
                }}
                defaultValue={selectedDate}
                onChangeText={setBirth}
                onPress={() => {
                  setModalVisible(true);
                }}
              />
              <Text style={{ top: 33, marginLeft: 25, fontSize: 16 }}>
                Email
              </Text>
              <TextInput
                style={{
                  height: 48,
                  borderWidth: 1,
                  marginLeft: 10,
                  marginRight: 10,
                  width: 370,
                  borderColor: "gray",
                  borderRadius: 7.5,
                  alignContent: "center",
                  textAlign: "right",
                  justifyContent: "center",
                  paddingRight: 10,
                  color: "gray",
                  fontSize: 16,
                }}
                placeholder="Email Address"
                placeholderTextColor={"gray"}
                defaultValue={loggedInProfile?.email}
                keyboardType="email-address"
                onChangeText={setEmail}
              />
              <Text style={{ top: 33, marginLeft: 25, fontSize: 16 }}>
                Faculty
              </Text>
              <TextInput
                style={{
                  height: 48,
                  borderWidth: 1,
                  marginLeft: 10,
                  marginRight: 10,
                  width: 370,
                  borderColor: "gray",
                  borderRadius: 7.5,
                  alignContent: "center",
                  textAlign: "right",
                  justifyContent: "center",
                  paddingRight: 10,
                  color: "gray",
                  fontSize: 16,
                }}
                onChangeText={setJob}
                placeholder="First Name"
                placeholderTextColor={"gray"}
                defaultValue={loggedInProfile?.job}
              />

              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  marginLeft: 10,
                  marginTop: 19,
                }}>
                Plan Settings
              </Text>
              <Text style={{ top: 33, marginLeft: 25, fontSize: 16 }}>
                Current Plan
              </Text>
              <TextInput
                style={{
                  height: 48,
                  borderWidth: 1,
                  marginLeft: 10,
                  marginRight: 10,
                  width: 370,
                  borderColor: "gray",
                  borderRadius: 7.5,
                  alignContent: "center",
                  textAlign: "right",
                  justifyContent: "center",
                  paddingRight: 10,
                  color: "#40E0D0",
                  fontSize: 16,
                }}
                placeholder="First Name"
                placeholderTextColor={"#40E0D0"}
                defaultValue={"Free"}
              />
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 18,
                  marginLeft: 10,
                  marginTop: 19,
                }}>
                Discovery Settings
              </Text>
              <Text style={{ top: 33, marginLeft: 25, fontSize: 16 }}>
                Location
              </Text>
              <TextInput
                style={{
                  height: 48,
                  borderWidth: 1,
                  marginLeft: 10,
                  marginRight: 10,
                  width: 370,
                  borderColor: "gray",
                  borderRadius: 7.5,
                  alignContent: "center",
                  textAlign: "right",
                  justifyContent: "center",
                  paddingRight: 10,
                  color: "#40E0D0",
                  fontSize: 16,
                }}
                placeholder="First Name"
                placeholderTextColor={"gray"}
                defaultValue={"My Current Location"}
              />
              <Text style={{ top: 33, marginLeft: 25, fontSize: 16 }}>
                Preferred Languages
              </Text>
              <TextInput
                style={{
                  height: 48,
                  borderWidth: 1,
                  marginLeft: 10,
                  marginRight: 10,
                  width: 370,
                  borderColor: "gray",
                  borderRadius: 7.5,
                  alignContent: "center",
                  textAlign: "right",
                  justifyContent: "center",
                  paddingRight: 10,
                  color: "#40E0D0",
                  fontSize: 16,
                }}
                placeholder="First Name"
                placeholderTextColor={"gray"}
                defaultValue={"English"}
              />
              <Text style={{ top: 33, marginLeft: 25, fontSize: 16 }}>
                Show Me
              </Text>
              <TextInput
                style={{
                  height: 48,
                  borderWidth: 1,
                  marginLeft: 10,
                  marginRight: 10,
                  width: 370,
                  borderColor: "gray",
                  borderRadius: 7.5,
                  alignContent: "center",
                  textAlign: "right",
                  justifyContent: "center",
                  paddingRight: 10,
                  color: "#40E0D0",
                  fontSize: 16,
                }}
                placeholder="First Name"
                placeholderTextColor={"gray"}
                defaultValue={"Women"}
              />
            </View>

            <View
              style={{
                height: 1,
                width: 250,
                borderColor: "gray",
                backgroundColor: "gray",
                top: "8%",
                alignItems: "center",
                alignContent: "center",
                alignSelf: "center",
              }}></View>
          </View>
          <View
            style={{
              width: 370,
              height: 50,
              top: "-9%",
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 7.5,
              margin: 10,
            }}>
            <TouchableOpacity onPress={() => logout()}>
              <Text
                style={{
                  textAlign: "center",
                  top: 15,
                  fontWeight: "bold",
                  fontSize: 16,
                }}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: 370,
              height: 50,
              top: "-9%",
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 7.5,
              margin: 10,
            }}>
            <TouchableOpacity onPress={() => updateUserProfile()}>
              <Text
                style={{
                  textAlign: "center",
                  top: 15,
                  fontWeight: "bold",
                  color: "black",
                  fontSize: 16,
                }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        isVisible={isModalVisible}
        swipeDirection="down"
        onSwipeComplete={toggleModal}
        animationIn="bounceInUp"
        animationOut="bounceOutDown"
        animationInTiming={900}
        animationOutTiming={500}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={500}
        style={styles.modal}>
        <View style={styles.modalContent}>
          <View style={styles.center}>
            <View style={styles.barIcon} />
            <DatePicker
              options={{
                backgroundColor: "white",
                textHeaderColor: "#2A9287",
                textDefaultColor: "black",
                selectedTextColor: "#fff",
                mainColor: "#2A9287",
                textSecondaryColor: "#40E0D0",
                borderColor: "rgba(122, 146, 165, 0.1)",
              }}
              onSelectedChange={(selectedDate) => setSelectedDate(selectedDate)}
              selected={selectedDate}
              mode="calendar"
              minuteInterval={30}
              style={{ borderRadius: 30 }}
            />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setSelectedDate(selectedDate);
                setModalVisible(false);
              }}
              style={{
                backgroundColor: "#2A9287",
                width: 295,
                top: 0,
                borderRadius: 12,
                alignContent: "center",
                alignSelf: "center",
                margin: 10,
                height: 58,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  marginLeft: 0,
                  top: 18,
                  color: "white",
                  alignSelf: "center",
                }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Navigation />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
