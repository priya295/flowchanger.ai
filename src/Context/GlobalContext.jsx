import React, { createContext, useContext, useState } from 'react';

export const MainContext = createContext();

export const GlobalContext = ({ children }) => {

  const [selectedTab, setSelectedTab] = useState(0); 

  const [staffTab, setStaffTab] = useState(0); 

 
  return (
    <MainContext.Provider value={{ selectedTab,setSelectedTab,staffTab, setStaffTab }}>
      {children}
    </MainContext.Provider>
  );
};

export const useGlobalContext = ()=>{
    return useContext(MainContext)
}

