import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signOut,signInWithEmailAndPassword } from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const SignUpUser = (email, password) =>{
        return createUserWithEmailAndPassword (auth, email, password);
    };
    const SignInUser = ( email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    const SignOutUser = () =>{
        return signOut(auth);
    };
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('user observing: ',user);
            
        });
        return ()=> unsubscribe();
    },[]);
    
    const authInfo = {
        SignUpUser, SignInUser, SignOutUser,
        user
    };

    return (
        <AuthContext.Provider
        value={authInfo}
        >
            {children}
        </AuthContext.Provider>
        );
};

export default AuthProvider;