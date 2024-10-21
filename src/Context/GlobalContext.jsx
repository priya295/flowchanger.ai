import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

export const MainContext = createContext();

export const GlobalContext = ({ children }) => {

  const [selectedTab, setSelectedTab] = useState(0); 
  const baseUrl = process.env.REACT_APP_BASE_URL
  const [staffTab, setStaffTab] = useState(0); 
  const [name, setName] = useState("");
  const [depId,setDepId] = useState("");
  const [editPermissions, setEditPermissions] = useState({
    clients_permissions: { view_global: false, create: false, edit: false, delete: false },
    projects_permissions: { view_global: false, create: false, edit: false, delete: false },
    report_permissions: { view_global: false, view_time_sheets: false },
    staff_role_permissions: { view_global: false, create: false, edit: false, delete: false },
    settings_permissions: { view_global: false, view_time_sheets: false },
    staff_permissions: { view_global: false, create: false, edit: false, delete: false },
    task_permissions: { view_global: false, create: false, edit: false, delete: false },
    sub_task_permissions: { view_global: false, create: false, edit: false, delete: false },
    chat_module_permissions: { grant_access: false },
    ai_permissions:{grant_access:false}
});

  const [roleName, setRoleName] = useState("");
  const [roleId,setRoleId] = useState("");
  const [selectedStaff,setSelectedStaff] = useState(null);
  


 
  return (
    <MainContext.Provider value={{ selectedTab,setSelectedTab,staffTab, setStaffTab,baseUrl, name,setName ,depId,setDepId, roleName,setRoleName,roleId,setRoleId,editPermissions,setEditPermissions,selectedStaff,setSelectedStaff}}>
      {children}
    </MainContext.Provider>
  );
};

export const useGlobalContext = ()=>{
    return useContext(MainContext)
}

