import { SafeAreaView, View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Header from '../components/Header'
import ChatList from '../components/ChatList'
import { useNavigation } from '@react-navigation/core';

const ChatScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView>
      <Header title="Chat" callEnabled={true}/>
      <ChatList/>
    </SafeAreaView>
  );
};

export default ChatScreen;