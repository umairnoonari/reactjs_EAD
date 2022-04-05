import withComponent from "./HOC"

const Click=(props)=>
{
    return<>
    <h1>{props.count}</h1>
    <button onClick={props.increament}>+</button>
    </>
}
export default withComponent(Click);