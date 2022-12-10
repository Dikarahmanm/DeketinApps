import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/core'

const Navigation = () => {
    const navigation = useNavigation();
  return (
    <View style={{position:"absolute", bottom:0,height:65, width:"100%", backgroundColor:"#37d47e", flex:1, flexDirection:"row", paddingHorizontal:25, justifyContent:"space-between", alignContent:"center"}}>
      <TouchableOpacity style = {{borderRadius:100, width:65, backgroundColor:"#FFFFFF",justifyContent:"center"}} onPress={()=>navigation.navigate("Home")}>
        <Text>HAI</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {{borderRadius:100, width:65, backgroundColor:"#FFFFFF",justifyContent:"center"}} onPress={()=>navigation.navigate("Likes")}>
        <Text>HAI</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {{borderRadius:100, width:65, backgroundColor:"#FFFFFF",justifyContent:"center"}} onPress={()=>navigation.navigate("Chat")}>
        <Text>HAI</Text>
        </TouchableOpacity>
        <TouchableOpacity style = {{borderRadius:100, width:65, backgroundColor:"#FFFFFF",justifyContent:"center"}} onPress={()=>navigation.navigate("Profile")}>
        <Text>HAI</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Navigation