import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

  const [User,setUser] = useState({})


    const CreateUser = (email,password) =>{

       return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginUser = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

  const LogoutUser = () => {

    return signOut(auth);
  }

  useEffect( () => {
    const unsubscribe =  onAuthStateChanged(auth , currentUser => {
         setUser(currentUser);
     })
return () => {
 unsubscribe();
}

 },[])

    const AuthInfo = {User,CreateUser,LoginUser,LogoutUser}
    return (
        <AuthContext.Provider value={AuthInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;