const Hoverme=(props)=>{
    const {count,handelChange}=props;
    return<>
    <p>{count}</p>
    <button onMouseEnter={()=>handelChange()}>Hover</button>
    </>
}
export default Hoverme;