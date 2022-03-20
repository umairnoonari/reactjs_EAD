import React, { useEffect,useState } from 'react';
function Reacthook()
{
    const [count,setCount]=useState(0);
    const [directors,setDirectors]=useState([]);
    function increment1()
    {
        setCount(()=>{
            setCount(count+1);
        })
    }
    useEffect(()=>{
        console.log(count);
        fetch("https://www.maciejtreder.com/asynchronous-javascript/directors").then(res=>res.json()).then(res=>setDirectors(res));
        return function()
        {
            
        }
    },[count])
    let list=directors.map(item=><li>{item.name}</li>)
    return(
        <>
        <ul>
            {list}
        </ul>
        <button onClick={increment1}>Click Me</button>
        </>
    )
}
export default Reacthook;