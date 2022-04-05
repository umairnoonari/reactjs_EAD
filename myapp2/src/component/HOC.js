import React from "react";
const withComponent=function(WrappedComponent){
const withCounter=class NewComponent extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={count:0};
    }
    increment()
    {
        this.setState((prev)=>({count:prev+1}));
    }
    render()
    {
        return <>
        <WrappedComponent increment={this.increment} count={this.state} />
        </>
    }
}
return withCounter;
}
export default withComponent;