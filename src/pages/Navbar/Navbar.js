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
                <div class="logo">TASK<strong>APP</strong></div>
                <ul class="links">
                    <li><a href="#home">Add Task</a></li>
                    <li><a href="#about">My Task</a></li>
                    <li><a href="#work">Completed Task</a></li>
                    <li><a href="#work">Sign up</a></li>
                    {user?.uid ?
                        <>
                            <li><Link onClick={logOut}>Logout</Link></li>

                        </>
                        :
                        <li><Link to='/signin'>Sign In</Link></li>
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