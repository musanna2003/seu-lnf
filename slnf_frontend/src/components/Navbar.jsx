import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const navcontent = <>
                        <li><NavLink className="nav-link" to={"/"}>Home</NavLink></li>
                        <li><NavLink className="nav-link" to={"/lost-items"} >Lost Items</NavLink></li>
                        <li><NavLink className="nav-link" to={"/found-items"} >Found Items</NavLink></li>
                        <li><NavLink className="nav-link" to={"/report-lost"} >Report lost</NavLink></li>
                        <li><NavLink className="nav-link" to={"/report-found"} >Report Found</NavLink></li>
                        <li><NavLink className="nav-link" to={"/my-listing"}>My-Listing</NavLink></li>
                        
                    </>
        const avt = <>
                        <div className="avatar">
                            <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                                <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                            </div>
                        </div>
                    </>            
    return (
        <div className="navbar bg-base shadow-sm">
            <div className="navbar-start">
                
                <a className="btn btn-ghost text-xl">SEU.l&f</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                        {
                            navcontent
                        }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="hidden md:flex">
                    {
                        avt
                    }
                </div>
                <button className='btn bg-base-300'>Login</button>
                <div className="dropdown dropdown-left">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            navcontent
                        }
                        <li>
                            <NavLink>
                                {
                                    avt
                                }
                            </NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;