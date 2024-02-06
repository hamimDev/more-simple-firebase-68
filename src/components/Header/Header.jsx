import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mt-5 text-center'>
            <Link className='mr-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' to="/">Home</Link>
            <Link className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' to="/login">Login</Link>
        </div>
    );
};

export default Header;