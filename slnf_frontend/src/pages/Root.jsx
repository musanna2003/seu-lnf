import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';

const Root = () => {
    return (
        <div className='min-h-screen'>
            <Navbar></Navbar>
            {/* main */}
            <div className=""><Outlet></Outlet></div>
            
        </div>
    );
};

export default Root;