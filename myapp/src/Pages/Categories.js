
import { NavLink, Outlet } from "react-router-dom"
export default function Categories()
{
    return<>
        <li><NavLink to='Kid'>Kid 1</NavLink></li>
        <li><NavLink to='Kid2'>Kid 2</NavLink></li>
        <h1>This is Categories Page</h1>
        <Outlet />
    </>
}
