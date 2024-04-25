import React, { useState } from 'react'
import { createContext } from 'react';

export const UserContext = createContext();

const Store = ({children}) => {
    const [data,setData]=useState([]);
    const cat = 'This is contaxt'
    

  return (
    <UserContext.Provider value={{data,setData,cat}}>
        
        {children}

    </UserContext.Provider>
  )
}

export default Store