import {Link,NavLink} from 'react-router-dom'
function Navbar()
{
    return<>
          <ul >
              <li ><NavLink to='/' style={{textDecoration:'none'}}>Home</NavLink></li>
              <li><NavLink to='/about' style={{textDecoration:'none'}}>About</NavLink></li>
              <li><NavLink to='/contact' style={{textDecoration:'none'}}>Contact us</NavLink></li>
              <li><NavLink to='/category'style={{textDecoration:'none'}}>Categories</NavLink></li>
              <li><NavLink to='/list'style={{textDecoration:'none'}}>ListView</NavLink></li>
          </ul>
    </>
}

export default Navbar;