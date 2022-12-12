import { useState } from "react";
import {Outlet, useNavigate } from "react-router-dom";


const Product = () => {
    const navigate = useNavigate();
    const [input, setinput ] = useState();
    
    return ( <div>

        <h3>값을 입력받아 페이지를 이동</h3>
        <div> <input type="text"  onChange={(e)=>{setinput(e.target.value)}} required/> 
       <button onClick={()=>{navigate(`/product/${input}`)}}> {input} 페이지 이동 </button></div>
       <hr />
      
               
            <Outlet outletname="아울렛" />
    

    </div> );
}
 
export default Product;