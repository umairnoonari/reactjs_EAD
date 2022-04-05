import { Formik, useFormik } from "formik"
import { useState } from "react"
const Formik1=()=>{
    const [firstName,setFirstName]=useState('')
    const formik=useFormik({
        initialValues:{fname:"",lname:'',email:''},
        onSubmit:values=>{
            setFirstName(values.fname);
        },
        validate:values=>{
            let errors={}
            if(!values.fname)
            {
                errors.fname="First name is required"
            }
            if(!values.lname)
            {
                errors.lname="Last name is required"
            }
            if(!values.email)
            {
                errors.email="email is required";
            }
            return errors;
        }
    })
    return<>
    <h1>Register</h1>
    {JSON.stringify(formik.values)}
    <form onSubmit={formik.handleSubmit}>
        <div>
            <label>First name</label>
            <input type={'text'} name='fname' value={formik.values.fname} onChange={formik.handleChange}  onBlur={formik.handleBlur}/>
            <span style={{color:"red"}}>{formik.touched.fname&&formik.errors.fname}</span>
            {/* <span style={{color:"red"}}>{formik.errors.fname&&formik.errors.fname}</span> */}
        </div>
        <br />
        <div>
            <label>Last name</label>
            <input type={'text'} name='lname' value={formik.values.lname} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            <span style={{color:"red"}}>{formik.touched.lname&&formik.errors.lname}</span>
            {/* <span style={{color:"red"}}>{formik.errors.lname&&formik.errors.lname}</span> */}
        </div>
        <br />
        <div>
            <label>Email</label>
            <input type={'text'} name='email' value={formik.values.email} onChange={formik.handleChange} />
            <span style={{color:"red"}}>{formik.touched.email&&formik.errors.email}</span>
            {/* <span style={{color:"red"}}>{formik.errors.email&&formik.errors.email}</span> */}
        </div>
        <br />
        <button type="submit">Submit</button>
        {JSON.stringify(firstName)}
    </form>
    </>
}
export default Formik1;