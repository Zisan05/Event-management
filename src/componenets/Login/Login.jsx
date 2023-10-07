import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaRegEye } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa';


const Login = () => {

     const {LoginUser} = useContext(AuthContext)
     const [ErrorMsg , setErrorMsg] = useState('')

     const [ShowPassword, SetShowPassword] = useState(false)

     const handleLogin = e =>{

         

          e.preventDefault()


     const email = e.target.email.value;
     const password = e.target.password.value;
     console.log(email,password);
   
      LoginUser(email,password)
      
      .then(result => {
          console.log(result.user)
          Swal.fire(
               'success',
               'Successfully added your account',
               'success'
             )
     })
     .catch(error => {
          console.log(error.message)
          setErrorMsg("Your Email or Password is invalid please check your Email or Password")
     })

     }

    return (
        <div>
        <p className="text-3xl font-bold mb-6 text-center mt-[200px]">
                 Login your account
            </p>
            <form onSubmit={handleLogin} className="w-[250px] md:w-[500px] lg:w-[500px] mx-auto">
            
                 <div className="form-control">
                      <label className="label">
                           <span className="label-text">Email</span>
                      </label>
                      <input
                           type="email"
                           name="email"
                           placeholder="Email"
                           className="input input-bordered"
                           required
                      />
                 </div>
                 <div className="form-control">
                      <label className="label">
                           <span className="label-text">Password</span>
                      </label>
                      <input
                            type={
                              ShowPassword ? 'text' : 'password'
                         }
                           name="password"
                           placeholder="Password"
                           className="input input-bordered"
                           required
                      />
                 </div>
                 <p>First time in this website  please go <Link className="text-blue-600" to ={'/register'}>Register</Link> </p>
                 <div className="form-control mt-6">

                 {
                                   ErrorMsg && <p className="relative text-red-600">
                                        {ErrorMsg}
                                   </p>
                              }

<span className="relative" onClick={ () => SetShowPassword(!ShowPassword)    
                     }>
                         <div className=" absolute left-[210px] md:left-[460px] lg:left-[460px] bottom-[85px] md:bottom-[65px]  lg:bottom-[65px]">
                         {
                              ShowPassword ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>
                         }
                         </div>
                         
                         </span>
                              
                      <button className="btn bg-orange-400 font-bold text-black">Login</button>
                 </div>
            </form>
     </div>
    );
};

export default Login;