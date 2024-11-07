import { useAuthContext } from "../../Context/AuthContext";
import { useEffect } from "react";

const DashBoard = () =>{

    const {isAuthenticated , setIsAuthenticated} = useAuthContext();
    useEffect(()=>{
      setIsAuthenticated(true);
    },[]); 

    return (
        <>
        <h1>
            WELCOME!!!
        </h1>
        </>
    )

}

export default DashBoard;