import { NavLink, Outlet } from "react-router-dom"

const Catogories=()=>{
    return<>
    <h1>This is Gategories Page</h1>
    <NavLink to="kid">Kid</NavLink>
    <NavLink to="mother">Mother</NavLink>
    <Outlet />
    </>
}
export default Catogories;