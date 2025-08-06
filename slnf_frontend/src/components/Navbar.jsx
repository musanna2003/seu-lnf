import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const user = true;
    const navcontent = <>
                        <li><NavLink className="nav-link" to={"/"}>Home</NavLink></li>
                        <li><NavLink className="nav-link" to={"/lost-items"} >Lost & Found Items</NavLink></li>
                        <li><NavLink className="nav-link" to={"/found-items"} >Found Items</NavLink></li>
                        <li><NavLink className="nav-link" to={"/report-lost"} >Report Lost</NavLink></li>
                        <li><NavLink className="nav-link" to={"/report-found"} >Report Found</NavLink></li>
                        <li><NavLink className="nav-link" to={"/my-listing"}>My-Listing</NavLink></li>
                        
                    </>        
    return (
        <div className="navbar bg-base shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            navcontent
                        }
                    </ul>
                </div>
                <a className="btn hidden lg:block btn-ghost text-xl">SEU.l&f</a>
            </div>
            <div className="navbar-center">
                <a className="btn lg:hidden btn-ghost text-xl">SEU.l&f</a>
                <ul className="menu menu-horizontal px-1 hidden lg:flex">
                        {
                            navcontent
                        }
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                    :
                    <Link className='btn bg-base-300'>Login</Link>
                
                }
            </div>
        </div>
    );
};

export default Navbar;