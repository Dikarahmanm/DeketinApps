import { View, Text } from 'react-native'
import React from 'react'

const SenderMessage = ({msg}) => {
  return (
    <View style={{
        backgroundColor:"#1be053", 
        borderRadius:100, 
        borderTopRightRadius:0, 
        paddingHorizontal:15, 
        paddingVertical:10, 
        marginHorizontal:3, 
        marginVertical:2,
        alignSelf:"flex-start", marginLeft:"auto"
        }}>
      <Text
      style={{color:"#FFFFFF"}}
      >{msg.message}</Text>
    </View>
  )
}

export default SenderMessage