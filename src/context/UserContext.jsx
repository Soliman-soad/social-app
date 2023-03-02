import React, { createContext, useState } from 'react';

export const ProfileContext = createContext()
const UserContext = ({children}) => {
    const [user,setUser] = useState(null)
    const authInfo = {user, setUser}
    return (
        <ProfileContext.Provider value={authInfo}>
            {children}
        </ProfileContext.Provider>
    );
};

export default UserContext;