import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { FaRegEye } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa';

const Register = () => {

     const {CreateUser} = useContext(AuthContext);

     const [ErrorMsg , setErrorMsg] = useState('')

     const [ShowPassword, SetShowPassword] = useState(false)
    

     const handleRegister = e =>{

         

          e.preventDefault()


     const email = e.target.email.value;
     const password = e.target.password.value;
     console.log(email,password);
     if (password.length < 6) {
          alert("Please enter at least 6 character password");
          return;
     }
      
        else if (!/(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\-])/.test(password))
        {
            alert("Please enter a password with at least one special letter and one upper case letter");
            return;
          }
          
     CreateUser(email,password)
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
          setErrorMsg(error.message)
     })
      

     }
    return (
        <div>
           <p className="text-3xl font-bold mb-6 text-center mt-[200px]">
                    Register your account
               </p>
               <form onSubmit={handleRegister} className="w-[250px] md:w-[500px] lg:w-[500px] mx-auto">
                    <div className="form-control">
                         <label className="label">
                              <span className="label-text">Name</span>
                         </label>
                         <input
                              type="text"
                              name="name"
                              placeholder="Your name"
                              className="input input-bordered"
                         />
                    </div>
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
                     <span className="relative" onClick={ () => SetShowPassword(!ShowPassword)    
                     }>
                         <div className=" relative left-[220px] md:left-[460px] lg:left-[460px] bottom-[30px]">
                         {
                              ShowPassword ? <FaRegEye></FaRegEye> : <FaRegEyeSlash></FaRegEyeSlash>
                         }
                         </div>
                         
                         </span>        
                     
                    <p>The account is already exist please go <Link className="text-blue-600" to ={'/login'}>Login</Link> </p>
                              {
                                   ErrorMsg && <p className=" text-red-600">
                                        {ErrorMsg}
                                   </p>
                              }
                    
                    <div className="form-control mt-6">
                         <button className="btn bg-orange-400 font-bold text-black">Register</button>
                    </div>
               </form>
        </div>
    );
};

export default Register;