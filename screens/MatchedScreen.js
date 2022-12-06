import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/core";
import { SafeAreaView } from "react-native";
import { StatusBar } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

const image = { uri: "https://i.ibb.co/y6kt0Fb/Rectangle-1.png" };

const MatchedScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        resizeMode="cover"
        className="flex-1 justify-center"
        style={{ flex: 1 }}
        source={image}>
        <View>
          <Text
            style={{
              fontSize: 42,
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
              alignContent: "center",
              top: 152,
            }}>
            Its' a Match!
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: "medium",
              color: "white",
              textAlign: "center",
              alignContent: "center",
              top: 152,
            }}>
            User likes you too
          </Text>
          <View style={{ top: 200, flexDirection: "row" }}>
            <Image
              source={require("../assets/zaskia.jpg")}
              style={{
                alignSelf: "center",
                width: 122,
                height: 122,
                resizeMode: "cover",
                borderRadius: 100,
                marginLeft: 100,
              }}></Image>
            <Image
              source={require("../assets/ali.jpg")}
              style={{
                alignSelf: "center",
                width: 122,
                height: 122,
                resizeMode: "cover",
                borderRadius: 100,
                marginLeft: 190,
                position: "absolute",
                borderColor: "white",
                borderWidth: 1,
              }}></Image>
          </View>
          <View
            style={{
              backgroundColor: "#2A9287",
              top: 200,
              width: 300,
              height: 50,
              textAlign: "center",
              borderRadius: 50,
              elevation: 10,
              marginLeft: 52,
              marginTop: 40,
              paddingTop: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "500",
                  fontSize: 20,
                }}>
                Send a Message
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              top: 200,
              width: 300,
              height: 50,
              textAlign: "center",
              marginLeft: 52,
              marginTop: 20,
              paddingTop: 10,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "300",
                  fontSize: 20,
                }}>
                Keep Swiping
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default MatchedScreen;

const styles = StyleSheet.create({});

// import { useRoute, useNavigation } from "@react-navigation/core";
// import React from "react";
// import { View, Text, Image, TouchableOpacity } from "react-native";
// import useAuth from "../hooks/useAuth";

// const MatchedScreen = () => {
//   const navigation = useNavigation();
//   const { params } = useRoute();
//   // const { loggedInProfile, userSwiped } = params;

//   return (
//     <View
//       className="h-full pt-20"
//       style={{ opacity: 1, backgroundColor: "#2BBDAF" }}>
//       <View>
//         {/* <Image source={{ uri: "https://links.papareact.com/mg9" }} /> */}
//         <Text
//           style={{
//             justifyContent: "center",
//             paddingLeft: 40,
//             paddingRight: 40,
//             paddingTop: 80,
//             top: "10%",
//             color: "white",
//             alignSelf: "center",
//             fontSize: 40,
//             fontWeight: "bold",
//           }}>
//           It's a Match!
//         </Text>
//         <Text
//           style={{
//             alignSelf: "center",
//             top: "11%",
//             color: "white",
//             fontSize: 14,
//           }}>
//           {/* {userSwiped.displayName}  */}likes you too
//         </Text>
//         <View className="flex-row justify-evenly mt-5">
//           <Image
//             className="h-32 w-32 rounded-full"
//             source={{ uri: "../assets/zaskia.jpg" }}
//             // source={{ uri: loggedInProfile.photoURL }}
//           />
//           <Image
//             className="h-32 w-32 rounded-full"
//             source={{ uri: "../assets/ali.jpg" }}
//             // source={{ uri: userSwiped.photoURL }}
//           />
//           {/* Image1 Here */}
//           {/* Image2 Here */}
//         </View>
//         <TouchableOpacity
//           style={{
//             top: "80%",
//             width: "80%",
//             height: 45,
//             marginLeft: "11%",
//             marginRight: "10%",
//             backgroundColor: "#21726A",
//           }}
//           className="bg-white m-5 px-8 rounded-full mt-0">
//           <Text
//             style={{
//               alignSelf: "center",
//               position: "relative",
//               top: "18%",
//               color: "white",
//             }}>
//             SEND A MESSAGE{" "}
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => navigation.goBack()}
//           style={{
//             top: "81%",
//             width: "80%",
//             height: 45,
//             marginLeft: "11%",
//             marginRight: "10%",
//             backgroundColor: "transparent",
//             borderBottomColor: "#2BBDAF",
//             borderTopColor: "#2BBDAF",
//           }}
//           className="bg-white m-5 px-8 rounded-full mt-0">
//           <Text
//             style={{
//               alignSelf: "center",
//               position: "relative",
//               top: "18%",
//               color: "white",
//             }}>
//             KEEP SWIPING{" "}
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };
// export default MatchedScreen;
