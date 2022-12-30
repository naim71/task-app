import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthProvider';
import "./Navbar.css";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <div>
            <nav>
                <input id="nav-toggle" type="checkbox" />
                <Link to='/' className="logo">TASK<strong>APP</strong></Link>
                <ul className="links">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/add'>Add Task</Link></li>
                    <li><Link to='/mytask'>My Task</Link></li>
                    <li><Link to='/completedtask'>Completed Task</Link></li>
                    {user?.uid ?
                        <>
                            <button className='border border-blue-600 rounded-md '><Link onClick={logOut}>Logout</Link></button>

                        </>
                        :
                        <>
                            <li><Link to='/signin'>Sign In</Link></li>
                            <li><Link to='/signup'>Sign up</Link></li>
                        </>
                    }

                </ul>
                <label htmlFor="nav-toggle" className="icon-burger">
                    <div className="line bg-black"></div>
                    <div className="line bg-black"></div>
                    <div className="line bg-black"></div>
                </label>


            </nav>

        </div>
    );
};

export default Navbar;