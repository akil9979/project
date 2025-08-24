import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
     return (
          <header className="bg-gray-800 text-yellow-300">
               <nav>
                    <div className="flex justify-between items-center p-4 bg-gray-900">
                         <div>
                              <h1 className="text-3xl font-bold text-white  p-4">Movie Explorer</h1>

                         </div>
                         <ul className="flex space-x-6 ">
                              <li >
                                   <NavLink to='' >
                                        Home
                                   </NavLink>
                              </li>
                              <li >
                                   <NavLink to='/favmovie'>
                                        FavMovie
                                   </NavLink>
                              </li>
                              <li >
                                   <NavLink to='/login'>
                                        Login
                                   </NavLink>
                              </li>
                              <li >
                                   <NavLink to='/Signup'>
                                        Signup
                                   </NavLink>
                              </li>
                         </ul>
                    </div>
               </nav>
          </header>

     );
}
export default Header;