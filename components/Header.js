import { View, Text, TouchableOpacity, Image } from "react-native";
import { React, useState } from "react";
import { Foundation, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, callEnabled, photoURL, CurrentPageName }) => {
  const navigation = useNavigation();
  const [loggedInProfile, setLoggedInProfile] = useState();
  return (
    <View
      classname="p-2 flex-row items-center justify-between"
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
      }}>
      <View
        style={{
          marginTop: 10,
          flexDirection: "row",
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()} classname="p-2">
          <Ionicons name="chevron-back-outline" size={34} color="black" />
        </TouchableOpacity>
        {photoURL && (
          <Image
            source={{ uri: photoURL }}
            style={{
              alignSelf: "center",
              width: 50,
              height: 50,
              bottom: 10,
              resizeMode: "cover",
              borderRadius: 100,
            }}
          />
        )}
        <View style={{}}>
          <Text
            style={{
              fontSize: 24,
            }}>
            {title}
          </Text>
        </View>

        {callEnabled && (
          <TouchableOpacity style={{ left: "290%", top: 5 }}>
            <Foundation classname="" name="telephone" size={20} color="black" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
