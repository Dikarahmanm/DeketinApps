import { View, Text, TextInput, SafeAreaView, Keyboard } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import { useLayoutEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import useAuth from '../hooks/useAuth';
import getMatchedUserInfo from '../lib/getMatchedUserInfo';
import { useState } from 'react';
import { Button } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import { FlatList } from 'react-native';
import ReceiverMessage from '../components/ReceiverMessage';
import SenderMessage from '../components/SenderMessage';
import { addDoc, collection, doc, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import { serverTimestamp } from 'firebase/firestore';
import { useEffect } from 'react';

const MessageScreen = () => {
    const navigation = useNavigation();
    const {user} = useAuth();
    const {params} = useRoute();
    const {matchDetails} = params;
    const [input, setInput] = useState("");

    const [messages, setMessages] = useState([]);
    useEffect(() => 
        onSnapshot(
            query(
                collection(db, 'matches', matchDetails.id, 'messages'),
                orderBy("timestamp", "desc")
            ),
            (snapshot) =>
                setMessages(
                    snapshot.docs.map((dat) => ({
                        id:dat.id, 
                        ...dat.data(),
                    }))
                    )
            
        )
    , [matchDetails, db]);
            
    const sendMessage = ()=>{ 
        addDoc(collection(db, "matches", matchDetails.id, 'messages'), {
            timestamp:serverTimestamp(),
            userId: user.uid,
            displayName: user.displayName,
            photoURL:matchDetails.users[user.uid].photoURL,
            message:input
        });
        
        setInput('');
    };

    useLayoutEffect(() => {
        navigation.setOptions({
        headerShown: false,
        });
    }, []);
  return (
    <SafeAreaView style={{flex:1}}>
    <Header title={getMatchedUserInfo(matchDetails?.users, user.uid).displayName} callEnabled={true}/>

        {
            messages.length > 0 ? <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <FlatList 
            data={messages} 
            style={{paddingHorizontal:10}}
            keyExtractor={(item) => item.id}
            inverted={true}
            renderItem={({item : message}) => 
                message.userId === user.uid ? (
                    <SenderMessage key={message.id} msg={message}/>
                ):(
                    <ReceiverMessage key={message.id} msg={message}/>
                )
            
            }
            />
        </TouchableWithoutFeedback>
        :
        <Text>No Messages Yet</Text>
        }
        
        
        <View style={{height:50,flexDirection:"row", alignContent:"space-between", alignItems:"center"}}>
            <TextInput
            style={{fontSize:18, paddingLeft:"5%", paddingRight:"5%",height:"100%", borderWidth:1,width:"80%", textDecorationLine:"none", borderColor:"#e3e3e3",borderRadius:100}}
            placeholder="Send Message"
            onChangeText={setInput}
            value={input}
            />
            <TouchableOpacity onPress={sendMessage} style={{flexDirection:"row", alignItems:"center", alignContent:"space-between", width:"20%", height:"100%"}}>
                <Text style={{textAlign:"center", width:"100%", fontSize:20, color:"#00b591", fontWeight:"bold"}}>Send</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default MessageScreen