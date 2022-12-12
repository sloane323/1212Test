import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const PageItem = () => {
    const { input, setinput} = useParams();
    const navigate = useNavigate();


    return ( 
        <div>
            <p> {input} 페이지입니다</p>
        
            <button onClick={()=>{ navigate(-1);}}>뒤로가기</button>
        </div>
      );
}
 
export default PageItem;