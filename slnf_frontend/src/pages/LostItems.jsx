import React from 'react';
import Card from '../components/Card';
import { BsFilterRight } from "react-icons/bs";

const LostItems = () => {

    const fltr = <div className="flex space-y-2.5 flex-col">
                    <div className="bg-base-200 p-4 rounded-lg space-y-2">
                        <h3 className="font-semibold">Status</h3>
                        <label className="flex items-center gap-2">
                        <input type="radio" name="status" className="radio radio-sm" /> Lost
                        </label>
                        <label className="flex items-center gap-2">
                        <input type="radio" name="status" className="radio radio-sm" /> Found
                        </label>
                    </div>
                    <div className="bg-base-200 p-4 rounded-lg space-y-2">
                        <h3 className="font-semibold">Filter by date</h3>
                        <label htmlFor="">From</label>
                        <input type="date" className="input" />
                        <label htmlFor="">To</label>
                        <input type="date" className="input" />
                    </div>

                    <div className="bg-base-200 p-4 rounded-lg space-y-2">
                        <label htmlFor="">category</label>
                        <select defaultValue="Select catagory" className="select">
                            <option disabled={true}>Select catagory</option>
                            <option>Books</option>
                            <option>Document</option>
                            <option>Accesoris</option>
                        </select>
                    </div>
                    
                    <div className="bg-base-200 p-4 rounded-lg space-y-2">
                        <label htmlFor="">Area</label>
                        <select defaultValue="Pick a color" className="select">
                            <option disabled={true}>Select area</option>
                            <option>Classroom</option>
                            <option>Caffeteria</option>
                            <option>Library</option>
                            <option>Multipurpus hall</option>
                        </select>
                    </div>
                    
                </div>
    return (
        <div className="w-[95vw] py-4 mx-auto lg:grid lg:grid-cols-12 relative gap-4">
            {/* Sticky Sidebar */}
            <div className="lg:col-span-3 flex justify-between lg:justify-center lg:flex-col  w-full space-y-2.5 h-fit">
                {/* serch bar */}

                <div className="flex min-w-[75%]">
                    <input type="text" className="input w-full" placeholder="Search..." />
                    <button className='btn'>search</button>
                </div>
                {/* Status Filter */}
                <div className="hidden lg:flex flex-col">
                    {
                        fltr
                    }
                </div>
                {/* Drawer */}
                <div className="drawer w-fit lg:hidden">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="btn bg-base-300 drawer-button"><BsFilterRight /></label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        {
                            fltr
                        }
                        </ul>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="col-span-6 flex flex-col items-center space-y-4">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <div className="join">
                    <button className="join-item btn">1</button>
                    <button className="join-item btn btn-active">2</button>
                    <button className="join-item btn">3</button>
                    <button className="join-item btn">4</button>
                </div>
            </div>

            {/* Right Column (empty for now) */}
            <div className="col-span-3"></div>
        </div>

    );
};

export default LostItems;