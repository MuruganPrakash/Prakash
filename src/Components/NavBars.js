import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';
import Login from './LoginForm';
import Register from './RegisterForm';

export default function Navbar()
{
    const myStyle = {
        position:'absolute',
        left:'82%',
    };
    const stylenav={
        padding:'35px'
    }
    const navLinkHoverStyle = {
        color: 'blue', 
      };
    return(
        <BrowserRouter>
            <div>
                <nav className='navbar navbar-expand-lg navbar-light bg-light' style={stylenav}>
                    <ul className='navbar nav' style={myStyle}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/login' className='nav-link'>login</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/register' className='nav-link'>Register</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route exact path='/' ></Route>
                    <Route exact path='/login' element={<Login />}></Route>
                    <Route exact path='/register' element={<Register />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}