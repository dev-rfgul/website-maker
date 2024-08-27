import React, { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            {/* Mobile menu button */}
            <div className="md:hidden p-4 bg-gray-800 flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-white">MyApp</h1>
                <button onClick={toggleSidebar} className="text-white">
                    {isOpen ? 'Close' : 'Menu'}
                </button>
            </div>

            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out md:static md:h-screen bg-gray-800 text-white w-64 p-4`}>
                <div className="space-y-4">
                    <h1 className="hidden md:block text-2xl font-semibold">MyApp</h1>
                    <nav>
                        <ul className="space-y-2">
                            <li className="p-2 rounded hover:bg-gray-700">
                                <span>Home</span>
                            </li>
                            <li className="p-2 rounded hover:bg-gray-700">
                                <span>Profile</span>
                            </li>
                            <li className="p-2 rounded hover:bg-gray-700">
                                <span>Settings</span>
                            </li>
                            <li className="p-2 rounded hover:bg-gray-700">
                                <span>Notifications</span>
                            </li>
                            <li className="p-2 rounded hover:bg-gray-700">
                                <span>Favorites</span>
                            </li>
                            <li className="p-2 rounded hover:bg-gray-700">
                                <span>Messages</span>
                            </li>
                            <li className="p-2 rounded hover:bg-gray-700">
                                <span>Logout</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
