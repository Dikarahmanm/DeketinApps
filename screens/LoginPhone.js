import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  StatusBar,
  KeyboardAvoidingView,
  Button,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import { SelectList } from "react-native-dropdown-select-list";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";

const LaunchScreen_3 = () => {
  const navigation = useNavigation();

  const [selected, setSelected] = React.useState("");
  const headerHeight = useHeaderHeight();

  const data = [
    { key: "1", value: "ID +62" },
    { key: "2", value: "AF +93" },
    { key: "3", value: "ZA +27" },
    { key: "4", value: "US +1" },
    { key: "5", value: "SA +966" },
    { key: "6", value: "MY +60" },
    { key: "7", value: "EG +20" },
  ];

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <ImageBackground
      resizeMode="cover"
      source={{
        uri: "https://i.ibb.co/wzyz667/Frame-3-2.png",
      }}
      style={{
        flex: 1,
      }}>
      <View>
        <SafeAreaView style={{ position: "relative" }}>
          <StatusBar hidden={true} />
          <View
            style={{
              flex: 1,
              padding: 10,
            }}>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                borderRadius: 10,
                width: 52,
                height: 52,
                marginLeft: 20,
                top: 40,
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
            {/* Button Back */}

            <View
              style={{
                position: "absolute",
                alignSelf: "center",
                padding: 20,
              }}>
              <Text
                style={{
                  fontWeight: "550",
                  fontStyle: "normal",
                  color: "white",
                  top: 120,
                  textAlign: "justify",
                  fontSize: 24,
                }}>
                Input your number
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                position: "absolute",
                justifyContent: "center",
                paddingLeft: 39,
                top: 200,
              }}>
              <SelectList
                setSelected={setSelected}
                data={data}
                defaultOption={{ key: "1", value: "ID +62" }}
              />
              <TextInput
                style={{
                  height: 48,
                  borderWidth: 1,
                  marginLeft: 20,
                  width: 200,
                  borderColor: "gray",
                  borderRadius: 12,
                  alignItems: "center",
                  alignContent: "center",
                  justifyContent: "center",
                }}
                placeholder="Phone Number"
                placeholderTextColor={"black"}
              />
            </View>

            <View
              style={{
                position: "absolute",
                alignSelf: "center",
                padding: 20,
              }}>
              <Text
                style={{
                  fontWeight: "400",
                  fontStyle: "normal",
                  color: "white",
                  top: 250,
                  textAlign: "justify",
                }}>
                When you tap Continue. Deketin will send a text with
                verification code. Message and data rates may apply. The
                verified phone number can be used to login. Learn what happens
                when your number changes.
              </Text>
            </View>

            <View
              style={{
                width: 300,
                backgroundColor: "white",
                position: "absolute",
                alignSelf: "center",
                borderRadius: 25,
                height: 42,
                top: 400,
              }}>
              <Text
                style={{
                  color: "#2FA99D",
                  fontSize: 16,
                  fontWeight: "500",
                  textAlign: "center",
                  paddingTop: 10,
                }}>
                CONTINUE
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ImageBackground>
  );
};

export default LaunchScreen_3;

const styles = StyleSheet.create({});
