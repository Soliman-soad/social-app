import React from 'react';
import { FaEarlybirds } from 'react-icons/fa';

const LoadingItem = () => {
    return (
        <div className='min-h-screen animate-pulse flex items-center justify-center text-8xl text-orange-500'>
            <FaEarlybirds/>
        </div>
    );
};

export default LoadingItem;