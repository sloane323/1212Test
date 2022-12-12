import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    return ( <div>
        <h2> 아래의 버튼을 누르면 
            <br /> home 으로 돌아갑니다. 
        </h2>

        <button onClick={()=>{navigate('/')}}>Home 으로 돌아가기 </button>
    </div> );
}
 
export default About;