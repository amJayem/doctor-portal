import React, { createContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signOut,signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const SignUpUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword (auth, email, password);
    };
    const SignInUser = ( email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const UpdateUser = (userInfo) =>{
        setLoading(true);
        return updateProfile(user, userInfo);
    }
    const SignOutUser = () =>{
        return signOut(auth);
    };
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log('user observing: ',user);
            setLoading(false);
        });
        return ()=> unsubscribe();
    },[]);
    
    const authInfo = {
        SignUpUser, SignInUser, SignOutUser,
        user, UpdateUser, loading
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