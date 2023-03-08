import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, signInWithPopup, GoogleAuthProvider, updatePassword } from "firebase/auth";
import app from '../firebase/firebase.init';


export const ProfileContext =createContext()
const auth =getAuth(app);
const UserContext = ({children}) => {
    const [loading,setLoading] = useState(true)
    // this is email and password signUp function
    const registerUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    // this is email and password signIn function
    const logIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    // this is  signOut function
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth);
    }


    // this user data 
    const [user ,setUser] = useState(null)
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
    return () =>{
        unsubscribe()
    }
    },[])
    // this profile update function
    const changeProfile =(name , img)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: img
        })
    }

    // password update
    

    const passwordUpdate = (newPassword) =>{
        return updatePassword(auth.currentUser, newPassword)
    }


    // this google pop up signUp system
    const googleAuthProvider = new GoogleAuthProvider;
    const popUpSignIn = () => {
        return signInWithPopup(auth,googleAuthProvider)
    }
    
    const authInfo ={registerUser,logIn,logOut,user,changeProfile,popUpSignIn,loading, passwordUpdate};
    return (
        <ProfileContext.Provider value={authInfo}>
            {children}
        </ProfileContext.Provider>
    );
};

export default UserContext;