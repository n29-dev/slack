import React, { useContext, useEffect, useState } from "react";
import {auth} from '../../firebase';
import { onAuthStateChanged } from "firebase/auth";
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const AuthContext = React.createContext({
    user: {},
    channels: {}
});

const useAuth = () => useContext(AuthContext);

export {useAuth};

export default function AuthProvider ({children}){

    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);
    
    //signup function 
    async function signIn() {

    const provider = new GoogleAuthProvider();

    try{
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        setUser(user);

    }catch(error){
        console.log(error.message);
    }
}

    //signout

    async function signOut() {

        try{
            await signOut(auth);

        }catch(error){
            console.log(error.message)
        }
    }


    useEffect(() => {
        const unsubs = onAuthStateChanged(auth, (user) => {
            console.log(user)
            setUser(user)
            setLoading(false)
        })
        
        return unsubs;

    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            channels: {},
            signIn: signIn,
            logOut: signOut
        }}>

            {children}
        </AuthContext.Provider>
    )
}
