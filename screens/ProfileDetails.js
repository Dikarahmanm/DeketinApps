import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import DatePicker from "react-native-modern-datepicker";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import useAuth from "../hooks/useAuth";

const ProfileDetails = () => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState("");
  const [email, setEmail] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [phone, setPhone] = useState(null);
  const [job, setJob] = useState(null);
  const {user} = useAuth();

  const saveUserProfile = () => {
    
    var today = new Date();
    var birthDate = new Date(selectedDate);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      displayName: user.displayName,
      photoURL: photo,
      job: job,
      age: age,
      phone:phone,
      birth:selectedDate,
      email:email,
      timestamp: serverTimestamp(),
    })
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);

  };



  return (
    <View>
      <SafeAreaView>
        <StatusBar hidden={true} />
        <View>
          <View
            style={{
              alignSelf: "center",
              padding: 20,
            }}>
            <Text
              style={{
                fontSize: 34,
                fontWeight: "bold",
                top: 105,
                padding: 10,
              }}>
              Profile details
            </Text>

            <Image
              className="absolute"
              style={{
                backgroundColor: "gray",
                top: 200,
                borderRadius: 40,
                alignItems: "center",
                marginLeft: 48,
              }}
              source={{
                uri: "https://links.papareact.com/mg9",
                width: 150,
                height: 156,
              }}
            />

            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: "#2A9287",
                top: 150,
                marginLeft: 146,
                borderRadius: 30,
                borderColor: "white",
                borderWidth: 2,
              }}>
              <FontAwesome
                name="camera"
                size={24}
                color="white"
                style={{ padding: 10 }}
              />
            </View>
          </View>
          <View
            style={{
              top: 180,
            }}>
            <TextInput
              style={{
                height: 48,
                borderWidth: 1,
                marginLeft: 80,
                width: 250,
                borderColor: "gray",
                borderRadius: 12,
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
              }}
              placeholder="First Name"
              placeholderTextColor={"black"}
              defaultValue={"Ucup"}
            />

            <TextInput
              style={{
                height: 48,
                borderWidth: 1,
                marginLeft: 80,
                marginTop: 20,
                width: 250,
                borderColor: "gray",
                borderRadius: 12,
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
              }}
              placeholder="Last Name"
              placeholderTextColor={"black"}
              defaultValue={"Samsudin"}
            />
            <TextInput
              style={{
                height: 48,
                borderWidth: 1,
                marginLeft: 80,
                marginTop: 20,
                width: 250,
                borderColor: "gray",
                borderRadius: 12,
                alignItems: "center",
                alignContent: "center",
                justifyContent: "center",
              }}
              placeholder="Jurusan"
              placeholderTextColor={"black"}
              defaultValue={"S1 Informatika"}
              onChangeText={setJob}
            />
          </View>

          <View style={{}}>
            <Text
              style={{
                marginTop: 12,
                marginLeft: 110,
                top: -33,
                color: "gray",
              }}>
              First Name
            </Text>

            <Text
              style={{
                marginTop: 15,
                marginLeft: 110,
                top: 0,
                color: "gray",
              }}>
              Last Name
            </Text>
            <Text
              style={{
                marginTop: 15,
                marginLeft: 110,
                top: 34,
                color: "gray",
              }}>
              Jurusan
            </Text>
          </View>
          <TouchableOpacity
            onPress={toggleModal}
            style={{
              width: 300,
              backgroundColor: "#ECFCFA",
              position: "absolute",
              alignSelf: "center",
              borderRadius: 25,
              height: 42,
              top: 700,
            }}>
            <Text
              style={{
                color: "#40E0D0",
                fontSize: 16,
                fontWeight: "500",
                textAlign: "center",
                paddingTop: 10,
              }}>{
                selectedDate ? selectedDate : "Choose Birthday Date"
              }
            </Text>
            <MaterialIcons
              name="date-range"
              size={24}
              color="#40E0D0"
              style={{ top: -22, paddingLeft: 30 }}
            />
          </TouchableOpacity>
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
                  onSelectedChange={(selectedDate) =>
                    setSelectedDate(selectedDate)
                  }
                  selected={selectedDate}
                  mode="calendar"
                  minuteInterval={30}
                  style={{ borderRadius: 30 }}
                />
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => {setSelectedDate(selectedDate); setModalVisible(false);}}
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
        </View>
        <TouchableOpacity style={{position:"absolute", top:10, right:10, width:100, height:50}}
        onPress={()=>saveUserProfile()}>
          <Text style={{color:"#2fd471", fontWeight:"bold", textAlign:"center", textAlignVertical:"center", width:"100%", height:"100%", fontSize:20}}>Save</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
    backgroundColor: "white",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "#fff",
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    minHeight: 400,
    paddingBottom: 20,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: "#bbb",
    borderRadius: 3,
  },
  text: {
    color: "#bbb",
    fontSize: 24,
    marginTop: 100,
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 500,
  },
});
