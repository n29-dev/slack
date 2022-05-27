import React, { useContext, useState } from "react";
import {auth} from '../firebase';
import {GoogleAuthProvider, signInWithPopup} from 'firebase/auth';

const authContext = React.createContext({
    user: {}
});


export default function AuthProvider ({children}){

    const [user, setUser] = useState({})
    
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

    return (
        <authContext.Provider value={{
            user: user,
            signIn: signIn
        }}>

            {children}
        </authContext.Provider>
    )
}

const useAuth = () => {
    
    console.log(useContext(authContext))

    return useContext(authContext);
}

export {useAuth};