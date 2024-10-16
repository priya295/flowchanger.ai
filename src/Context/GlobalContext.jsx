import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

export const MainContext = createContext();

export const GlobalContext = ({ children }) => {

  const [selectedTab, setSelectedTab] = useState(0); 
  const baseUrl = process.env.REACT_APP_BASE_URL
  const [staffTab, setStaffTab] = useState(0); 

 
  return (
    <MainContext.Provider value={{ selectedTab,setSelectedTab,staffTab, setStaffTab,baseUrl }}>
      {children}
    </MainContext.Provider>
  );
};

export const useGlobalContext = ()=>{
    return useContext(MainContext)
}

