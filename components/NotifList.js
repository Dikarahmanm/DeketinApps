import { View, Text } from 'react-native'
import React from 'react'
import tw from "tailwind-rn";
import { useEffect, useState } from 'react';
import { collection, onSnapshot,query, where } from 'firebase/firestore';
import { db } from '../firebase';
import useAuth from '../hooks/useAuth';
import { FlatList } from 'react-native-gesture-handler';
import NotifRow from"../components/NotifRow";

const NotifList = () => {
    const [notifs, setNotifs] = useState([]);
    const {user} = useAuth();
    
    useEffect(()=>{
        onSnapshot(
                collection(db, 'users', user.uid, "notifs"), 
                (snapshot)=>
                setNotifs(
                    snapshot.docs.map((doc)=>({
                        id: doc.id,
                        ...doc.data(),
                    }))
                )
            ),
        [user]    
    });
  return notifs.length > 0 ? (
      <FlatList
        data={notifs}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=> <NotifRow notifDetails={item}/>}
      />
    ):(
      <View>
        <Text>No notification at the moment.</Text>
      </View>
    );
  
}

export default NotifList