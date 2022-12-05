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
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { Foundation, Ionicons, FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native";

const Profile = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
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
            <TouchableOpacity style={{ top: "-65%", marginLeft: 20 }}>
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
              source={require("../assets/ali.jpg")}
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
              Roger Sumatra, 22
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
                Name
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
                placeholder="First Name"
                placeholderTextColor={"gray"}
                defaultValue={"Roger Sumatra Nainggolan"}
              />
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
                placeholder="First Name"
                placeholderTextColor={"gray"}
                defaultValue={"+62 8123456320"}
              />
              <Text style={{ top: 33, marginLeft: 25, fontSize: 16 }}>
                Date of Birth
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
                placeholder="First Name"
                placeholderTextColor={"gray"}
                defaultValue={"12-26-2001"}
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
                placeholder="First Name"
                placeholderTextColor={"gray"}
                defaultValue={"betatest@gmail.com"}
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
                width: 370,
                height: 90,
                borderColor: "gray",
                borderWidth: 1,
                borderRadius: 7.5,
                marginLeft: 10,
                marginTop: 25,
                flexDirection: "row",
              }}>
              <Text style={{ marginLeft: "3%", top: 15, fontSize: 16 }}>
                Age Range
              </Text>
              <Text style={{ marginLeft: "64%", top: 15, fontWeight: "bold" }}>
                22-34
              </Text>
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
            <TouchableOpacity>
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
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: "center",
                  top: 15,
                  fontWeight: "bold",
                  color: "red",
                  fontSize: 16,
                }}>
                Delete Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
