import { NavLink } from "react-router-dom";

const Nav = () => {
    return ( <div>
      <NavLink to='/' style={ ({isActive })=> isActive ? {color:"gray"} : {color:"white"} }>Home |</NavLink>  
      <NavLink to='/about' style={ ({isActive })=> isActive ? {color:"gray"} : {color:"white"} }> About  | </NavLink>
      <NavLink to='/product' style={ ({isActive })=> isActive ? {color:"gray"} : {color:"white"} }> Product  </NavLink>   

      <hr />

    </div> );
}
 
export default Nav;