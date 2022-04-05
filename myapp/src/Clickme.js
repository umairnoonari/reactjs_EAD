const Clickme=(props)=>{
    const {count,handelChange}=props;
    return<>
    <p>{count}</p>
    <button onClick={()=>handelChange()}>Click</button>
    </>
}
export default Clickme;