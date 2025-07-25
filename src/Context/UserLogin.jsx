import React from 'react'
import { createContext, useState } from 'react';

export const LoginContext = createContext();

const UserLogin = ({children}) => {
  const [user, setUser] = useState(null);
   
  {
    /* Status change */
  }


  return (
    <LoginContext.Provider
     value={{
        user,
        setUser
     }}
    >
        {children}
    </LoginContext.Provider>

  )
}

export default UserLogin