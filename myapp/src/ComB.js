import { useContext } from 'react';
import {useformik} from 'formik'
import ComC from './ComC';
import { Firstname,Lastname } from './Contextapi';
const ComB=()=>{
    const fname=useContext(Firstname);
    const lname=useContext(Lastname);
    return<>
        <h1>i am {fname} and My Last name is {lname}</h1>
        <ComC />
    </>
}
export default ComB;