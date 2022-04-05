import { useState } from "react"

const Computed=()=>{
    // const [fname,setFname]=useState('')
    // const [lname,setLname]=useState('')
    const [obj,setObj]=useState({fname:'',lname:''})
    function handleChange(event)
    {
        const {name,value}=event.target
        setObj({[name]:value})
        // if(name==='fname')
        // {
        //     setFname(value)
        // }
        // if(name==='lname')
        // {
        //     setLname(value)
        // }
    }
    return<>
    {JSON.stringify(obj.fname)}
    {JSON.stringify(obj.lname)}
    <form>
        <input type="text" name='fname' onChange={handleChange} value={obj.fname}/>
        <input type="text" name='lname' onChange={handleChange} value={obj.lname}/>
    </form>
    </>
}
export default Computed;