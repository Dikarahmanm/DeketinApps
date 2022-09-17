import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'
import * as Google from "expo-google-app-auth";

const AuthContext = createContext({})
const config = {
    iosClientId: '398467169577-l2kmjsts9luf34j9jcdqvo57khatdap6.apps.googleusercontent.com',
    androidClientId: '398467169577-eg9c6m7bdhsgueo8b7lu9reh2d50ftdb.apps.googleusercontent.com',
    scopes: ["prifile", "email"],
    permissions: ["public_profile", "email", "gender", "location"]
}
export const AuthProvider  = ({ children }) => {

    const signInWithGoogle = async()=>{
        await Google.logInAsync()
    }

    return (
    <AuthContext.Provider
        value={{
            user: null,
    } 
    }>
        {children}
    </AuthContext.Provider>
    )
}

export default function useAuth(){
    return useContext(AuthContext);
} 