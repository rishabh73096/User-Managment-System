import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <>
         <header className="bg-blue-600 p-4">
            <nav className="container mx-auto flex justify-between items-center">
                <Link className="text-white text-xl font-bold" to="/">User Management</Link>
                <div>
                    <Link to="/create" className="text-white px-4 hover:text-blue-200">Create User</Link>
                   
                </div>
            </nav>
        </header>
      
        </>
       

    );
};

export default Header;
