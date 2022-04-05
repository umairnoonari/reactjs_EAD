import React from "react";
import withComponent from "./HOC"

// const Click=(props)=>
// {
//     return<>
//     <h1>{props.count}</h1>
//     <button onClick={props.increament()}>+</button>
//     </>
// }
class Click extends React.Component{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return<>
        <p>{this.props.count}</p>
        <button onClick={()=>this.props.increment()}></button>
        </>
    }
}
export default withComponent(Click);