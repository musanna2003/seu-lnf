import React from 'react';

const Home = () => {
    return (
        <div>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage:
                    "url(https://i.ibb.co.com/4Zx3XBg9/south-east-university.jpg)",
                }}
                >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Southeast University Lost and Found </h1>
                        <p className='mb-5'>Lost something? Found something? Let’s connect the dots.</p>
                        
                        <div className="flex items-center gap-0 w-full">
                            <input
                                type="text"
                                placeholder="Search lost or found items..."
                                className="input focus:outline-none rounded-2xl rounded-r-none w-full backdrop-blur bg-black/10 border, border-black/20 shadow"
                            />
                            <button className="btn bg-base-100 shadow-none rounded-2xl rounded-l-none">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;