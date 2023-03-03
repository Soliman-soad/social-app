import React, { createContext, useEffect, useState } from 'react';

export const ProfileContext = createContext()
const UserContext = ({children}) => {
    const [user,setUser] = useState(null)
    useEffect(()=>{
        localStorage.setItem("userId", JSON.stringify(user))
    },[user])
    const authInfo = {user, setUser}
    return (
        <ProfileContext.Provider value={authInfo}>
            {children}
        </ProfileContext.Provider>
    );
};

export default UserContext;