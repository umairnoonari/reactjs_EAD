import { useState } from "react"
import { propTypes } from "react-bootstrap/esm/Image";

const Counter=(props)=>{
    const [count,setCount]=useState(0);
    function handelChange()
    {
        setCount(count+1);
    }
    return <>
    {props.render(count,handelChange)}
    {/* {props.childern({count,handelChange})} */}
    </>
}
export default Counter;