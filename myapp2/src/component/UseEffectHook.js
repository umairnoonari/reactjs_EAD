import { useEffect, useState } from "react"

const UseEffectHook=()=>{
    const [count,setCount]=useState(0)
    const [directors,setDirectors]=useState([])
    useEffect(()=>{
        console.log(count);
        fetch("https://www.maciejtreder.com/asynchronous-javascript/directors").then(res=>res.json()).then(res=>setDirectors(res));
        
    },[count])
    useEffect(()=>{
        console.log(count);
        fetch("https://www.maciejtreder.com/asynchronous-javascript/directors").then(res=>res.json()).then(res=>setDirectors(res));
        
    },[])

    return<>
    <button onClick={()=>(setCount(count+1))}>Click</button>
    <h1>{count}</h1>
    <h1>{directors.map(itm=>(itm.name))}</h1>
    </>
}
export default UseEffectHook