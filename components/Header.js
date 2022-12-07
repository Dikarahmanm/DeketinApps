import { View, Text, TouchableOpacity } from 'react-native'
import { React } from 'react'
import { Foundation, Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Header = ({title, callEnabled}) => {
  const navigation = useNavigation();
  return (
    <View classname = 'p-2 flex-row items-center justify-between' >
      <View sclassname = "flex flex-row items-center" 
      style={{
          flexDirection: "row",
          marginRight:"auto",
          marginTop: 40,
        }}>
        <TouchableOpacity onPress={()=>navigation.navigate("Home")} classname = "p-2">
            <Ionicons name="chevron-back-outline" size={34} color="#FF5864"/>
        </TouchableOpacity>
        <Text classname = "text-2xl font-bold pl-2">{title}</Text>
        {callEnabled && (
        <TouchableOpacity classname = "rounded-full mr-4 p-3 bg-red-200">
            <Foundation classname = "" name="telephone" size={20} color="red"/>
        </TouchableOpacity>
      )}
      </View>
      
    </View>
  )
}

export default Header