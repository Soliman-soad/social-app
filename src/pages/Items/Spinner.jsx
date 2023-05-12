import React from 'react';
import { CgSpinnerTwo } from "react-icons/cg";

const Spinner = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>

        <div className='mt-20 flex justify-center animate-spin text-3xl'>
            <CgSpinnerTwo/>
        </div>
        </div>
    );
};

export default Spinner;