import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

  const [User,setUser] = useState({})

  const [Loading,setLoading] = useState(true)


    const CreateUser = (email,password) =>{
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const LoginUser = (email,password) => {

      setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

  const LogoutUser = () => {
      setLoading(true);
    return signOut(auth);
  }

  useEffect( () => {
    const unsubscribe =  onAuthStateChanged(auth , currentUser => {
         setUser(currentUser);
         setLoading(false);
     })
return () => {
 unsubscribe();
}

 },[])

    const AuthInfo = {User,CreateUser,LoginUser,LogoutUser,Loading}
    return (
        <AuthContext.Provider value={AuthInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;