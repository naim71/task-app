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
                <Link to='/' class="logo">TASK<strong>APP</strong></Link>
                <ul class="links">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link href="#home">Add Task</Link></li>
                    <li><Link href="#about">My Task</Link></li>
                    <li><Link href="#work">Completed Task</Link></li>
                    {user?.uid ?
                        <>
                            <li><Link onClick={logOut}>Logout</Link></li>

                        </>
                        :
                        <>
                            <li><Link to='/signin'>Sign In</Link></li>
                            <li><Link to='/signup'>Sign up</Link></li>
                        </>
                    }

                </ul>
                <label for="nav-toggle" class="icon-burger">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </label>


            </nav>

        </div>
    );
};

export default Navbar;