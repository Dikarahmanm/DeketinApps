import { View, Text } from 'react-native'
import React, { createContext, useContext, useEffect } from 'react'
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import {GoogleAuthProvider, onAuthStateChanged, signInWithCredential, signOut,} from '@firebase/auth';
import {auth} from "../firebase"
WebBrowser.maybeCompleteAuthSession();

const AuthContext = createContext({})

export const AuthProvider  = ({ children }) => {

    const [user, setUser] = React.useState(null)
    const [loadingInitial, setLoadingInitial] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    const [request, response, promptAsync] = Google.useAuthRequest({
        iosClientId: '398467169577-l2kmjsts9luf34j9jcdqvo57khatdap6.apps.googleusercontent.com',
        androidClientId: '398467169577-eg9c6m7bdhsgueo8b7lu9reh2d50ftdb.apps.googleusercontent.com',
        expoClientId:'398467169577-bqpj1p5rc7ktdfbeo3vda9fr6opnu0ak.apps.googleusercontent.com'
    });


    React.useEffect(
        ()=>
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUser(user)
                //Logged in
            }else{
                setUser(null)
            }
            setLoadingInitial(false)
        }),
    []);

    React.useEffect(()=>{

        if(response?.type==="success"){
            console.log(response.authentication.idToken);
            console.log(response.authentication.accessToken);
            const credential = GoogleAuthProvider.credential(response.authentication.idToken, response.authentication.accessToken);
            signInWithCredential(auth, credential);
        }

        setLoading(false);
         
    }, [response]);

    async function getUserData(){
        let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
            headers:{Authorization:`Bearer ${accessToken}`}
        })
    }


    return (
    <AuthContext.Provider
        value={{
            user: user,
            promptAsync,
            setLoading,
            loading:loading
    } 
    }>
        {!loadingInitial && children}
    </AuthContext.Provider>
    );
};

export default function useAuth(){
    return useContext(AuthContext);
} 