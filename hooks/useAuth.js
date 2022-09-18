import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

const AuthContext = createContext({})

export const AuthProvider  = ({ children }) => {

    const [accesToken, setAccesToken] = React.useState();
    const [userInfo, setUserInfo] = React.useState();
    const [request, response, propmtAsync] = Google.useAuthRequest({
        iosClientId: '398467169577-l2kmjsts9luf34j9jcdqvo57khatdap6.apps.googleusercontent.com',
        androidClientId: '398467169577-eg9c6m7bdhsgueo8b7lu9reh2d50ftdb.apps.googleusercontent.com',
        expoClientId:'398467169577-bqpj1p5rc7ktdfbeo3vda9fr6opnu0ak.apps.googleusercontent.com'
    });
    React.useEffect(()=>{
        if(response?.type==="success"){
            setAccesToken(response.authentication.accessToken);
        }
    }, [response]);

    async function getUserData(){
        let userInfoResponse = await fetch("https://www.googleapis.com/userinfo/v2/me", {
            headers:{Authorization:`Bearer ${accessToken}`}
        })
    }


    return (
    <AuthContext.Provider
        value={{
            user: false,
            //propmtAsync,
    } 
    }>
        {children}
    </AuthContext.Provider>
    );
};

export default function useAuth(){
    return useContext(AuthContext);
} 