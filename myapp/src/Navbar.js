import {Link,NavLink} from 'react-router-dom'
function Navbar()
{
    return<>
          <ul>
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/contact'>Contact us</NavLink></li>
              <li><NavLink to='/category'>Categories</NavLink></li>

              {/* <li><Link to='/about'>About</Link></li>
              <li><Link to='/contact'>Contact us</Link></li> */}
          </ul>
    </>
}

export default Navbar;