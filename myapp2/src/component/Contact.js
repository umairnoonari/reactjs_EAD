import { useNavigate } from "react-router-dom";
const Contact=()=>{
    const navigate=useNavigate();
    return<>
    <h1>This page is Contact us</h1>
    <button onClick={()=>navigate('/about')}>Navigate to about</button>
    </>
}
export default Contact;
