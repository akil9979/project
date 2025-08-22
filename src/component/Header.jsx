import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
    return (
      <header>
         <nav>
           <div >
            <h1 className="text-3xl font-bold">Movie Explorer</h1>
           
            </div>
            <ul>
                <li>
                   <NavLink to='' >
                        Home
                   </NavLink> 
                </li>
                <li>
                     <NavLink to='/favmovie'>
                            FavMovie
                     </NavLink>
                </li>
                <li>
                     <NavLink to='/login'>
                            Login
                     </NavLink>
                </li>
                <li>
                     <NavLink to='/Signup'>
                            Signup
                     </NavLink>
                </li>
            </ul>
       </nav>
      </header>
        
    );
}
export default Header;