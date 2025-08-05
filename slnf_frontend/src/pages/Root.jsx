import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar></Navbar>
            <div className="flex-1"><Outlet></Outlet></div>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;