import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TextInput,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

const ProfileDetails = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
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
                top: 116,
                padding: 10,
              }}>
              Profile details
            </Text>

            <Image
              className="absolute"
              style={{
                backgroundColor: "gray",
                top: 250,
                borderRadius: 40,
                alignItems: "center",
                marginLeft: 65,
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
                top: 270,
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
              top: 290,
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
            />
          </View>

          <View style={{}}>
            <Text
              style={{
                marginTop: 12,
                marginLeft: 110,
                top: 78,
              }}>
              First Name
            </Text>

            <Text
              style={{
                marginTop: 15,
                marginLeft: 110,
                top: 112,
              }}>
              Last Name
            </Text>
            <Text
              style={{
                marginTop: 15,
                marginLeft: 110,
                top: 146,
              }}>
              Jurusan
            </Text>
          </View>
          <View
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
              }}>
              Chose Birthday Date
            </Text>
            <MaterialIcons
              name="date-range"
              size={24}
              color="#40E0D0"
              style={{ top: -22, paddingLeft: 30 }}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProfileDetails;

const styles = StyleSheet.create({});
