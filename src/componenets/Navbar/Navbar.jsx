import { useContext } from "react";
import {Link, NavLink} from "react-router-dom"

import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";



const Navbar = () => {

const {LogoutUser,User} = useContext(AuthContext)

console.log(User)

const handleLogout = () =>{
  LogoutUser()
  .then(result => {
    console.log(result)
    Swal.fire(
         'success',
         'Successfully added your account',
         'success'
       )
})

}

 
    const NavItem = <>
    <li><NavLink to ={'/'}>Home</NavLink></li>
    <li><NavLink to ={'/register'}>Register</NavLink></li>
    <li><NavLink to ={'/login'}>Login</NavLink></li>

    <li><NavLink to ={'/gallery'}>Gallery</NavLink></li>
    </>
    return (
        <div className="navbar bg-blue-300">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           
             {NavItem}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Social Events</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {NavItem}
    </ul>
  </div>
  <div className="navbar-end ">

    {
      User ?<div className="flex gap-[10px]"><p className="my-auto font-bold text-[20px] ">{User.displayName}</p><img className="h-[50px] w-[50px] rounded-[50%]" src={User.photoURL}></img><button className="btn bg-orange-400" onClick={handleLogout}>Sign out</button></div>  :
      <button className="btn bg-orange-400"><Link to ={'/login'}>Log in </Link></button>
    }
    
  </div>
</div>
    );
};

export default Navbar;