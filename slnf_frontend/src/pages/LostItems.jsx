import React from 'react';
import Card from '../components/Card';

const LostItems = () => {
    return (
        <div className="w-[90vw] mx-auto lg:grid lg:grid-cols-12 relative gap-4">
            {/* Sticky Sidebar */}
            <div className="col-span-3 space-y-2.5 sticky top-4 h-fit">
                <div className="flex">
                    <input type="text" className="input w-full" placeholder="Search..." />
                    <button className='btn'>search</button>
                </div>
                {/* Status Filter */}
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
                
                <label htmlFor="">category</label>
                <select defaultValue="Pick a color" className="select">
                    <option disabled={true}>Pick a color</option>
                    <option>Crimson</option>
                    <option>Amber</option>
                    <option>Velvet</option>
                </select>
                <label htmlFor="">Area</label>
                <select defaultValue="Pick a color" className="select">
                    <option disabled={true}>Pick a color</option>
                    <option>Crimson</option>
                    <option>Amber</option>
                    <option>Velvet</option>
                </select>
            </div>

            {/* Main Content */}
            <div className="col-span-6 flex flex-col items-center space-y-4">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>

            {/* Right Column (empty for now) */}
            <div className="col-span-3"></div>
        </div>

    );
};

export default LostItems;