import { Firstname,Lastname } from "./Contextapi"

const ComC=()=>{
    return<>
        <Firstname.Consumer>
            {(fname)=>{
                return(<Lastname.Consumer>
                    {(lname)=>{
                        return <h1>I am  a {fname} and My Last name is {lname}</h1>
                    }}
                </Lastname.Consumer>)
            }}
        </Firstname.Consumer>
    </>
}
export default ComC;