import { View, Text, Button } from 'react-native'
import React from 'react'
import useAuth from '../hooks/useAuth'

const LoginScreen = () => {
    const{propmtAsync}=useAuth();
    return (
    <View>
        <Text>LoginScreen</Text>
        <Button title='Login' onPress={propmtAsync()}/>
    </View>
    )
}

export default LoginScreen