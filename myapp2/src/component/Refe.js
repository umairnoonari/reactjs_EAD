import { useRef,useState } from "react"

const Refe=()=>{
    const luckyname=useRef('');
    const count=useRef(0);
    const [show,setShow]=useState(false);
    function click()
    {
        count.current+=1;
        console.log(count.current)
    }
    function submitform(e)
    {
        e.preventDefault();
        setShow(true);
        console.log(luckyname.current.value)
        console.log(show)
        // luckyname.current.focus()
    }
    return<>
    <form action="" onSubmit={submitform}>
        <div>
        <input type="text" id="umair" ref={luckyname}></input>
        </div>
        <br />
        
        <button>Submit</button>
        
    </form>
    <h1>{show ?`you lucky name is ${luckyname.current.value}` :''}</h1>
    <button onClick={click}>Click Me</button>
    </>
}
export default Refe;