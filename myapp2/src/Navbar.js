import {Link, NavLink} from 'react-router-dom';
const Navbar=()=>{
    return<>
    <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>about</NavLink></li>
        <li><NavLink to='/contact'>Contact us</NavLink></li>
        <li><NavLink to='/categories'>Categories</NavLink></li>
        <li><NavLink to='/products'>Products</NavLink></li>
        <li><NavLink to='/refe'>useRef</NavLink></li>
        <li><NavLink to='/usereducer'>UseReducer</NavLink></li>
        <li><NavLink to='/formik'>Formik</NavLink></li>
        <li><NavLink to='/computed'>Computed</NavLink></li>
        <li><NavLink to='/useeffecthook'>UseEffectHook</NavLink></li>
        {/* <li><NavLink to='/product/:id'>Product</NavLink></li> */}
    </ul>
    {/* <nav>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact us</Link>
    </nav> */}
    </>
}
export default Navbar;