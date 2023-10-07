import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import {Navigate} from 'react-router-dom'


const PrivetRoute = ({children}) => {

    const {User , Loading} = useContext(AuthContext)

     if(Loading){
        return <span className="loading loading-spinner loading-lg"></span>
     }
   

    if(User){
        return children;
    }
    return (
        <Navigate to = {'/login'}></Navigate>
    );
};

export default PrivetRoute;