import React from 'react';
import Card from '../components/Card';

const LostItems = () => {
    return (
        <div className="w-[90vw] mx-auto lg:grid lg:grid-cols-12 relative gap-4">
            {/* Sticky Sidebar */}
            <div className="col-span-3 sticky top-4 h-fit">
                <input type="text" className="input w-full" placeholder="Search..." />
                <label htmlFor="">From</label>
                <input type="date" className="input" />
                <label htmlFor="">To</label>
                <input type="date" className="input" />
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