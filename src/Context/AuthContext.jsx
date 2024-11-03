import React, { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { useGlobalContext } from './GlobalContext';

export const AuthContext = createContext();

export const useAuthContext = ()=>{
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const {openToast} = useGlobalContext();
  console.log(Cookies.get('flowChangerAuthToken'));
  const [isAuthenticated , setIsAuthenticated] = useState(Cookies.get('flowChangerAuthToken')?true:false);
  const [step, setStep] = useState(1);

  const [adminInfo, setAdminInfo] = useState({
      email: '',
      first_name: '',
      last_name: '',
      mobile: '',
      password: '',
  });
  const [extraInfo , setExtraInfo] = useState({
      time_formate: '',
      time_zone: '',
      date_formate: '',
      week_formate: '',
      package_id: '',
      company_name: '',
      profile_image: '',
      company_logo: '',
  });
 

  const updateExtraInfo = (data) =>{
    setExtraInfo(prev => {
      const newExtraInfo = { ...prev, ...data };
      return newExtraInfo;
    });
}

const updateAdminInfo = (data) => {
    setAdminInfo(prev=>  ({...prev , ...data}) );
  };



  
  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <AuthContext.Provider value={{
      step,
      setStep,
      setIsAuthenticated,
      adminInfo,
      extraInfo,
      isAuthenticated,
      updateAdminInfo,
      updateExtraInfo,
       nextStep,
      prevStep
    }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;