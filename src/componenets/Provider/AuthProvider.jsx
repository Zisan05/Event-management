import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase.config";

export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();

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


  const GoogleUser = (value) => {
   return signInWithPopup(auth, provider)
    
  }
  const UpdateProfile = (name,photo) =>{
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })


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

    const AuthInfo = {User,CreateUser,LoginUser,LogoutUser,GoogleUser ,UpdateProfile,Loading}
    return (
        <AuthContext.Provider value={AuthInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;