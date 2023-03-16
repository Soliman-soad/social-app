import React from 'react';
import { CgSpinnerTwo } from "react-icons/cg";

const Spinner = () => {
    return (
        <div className='mt-20 flex justify-center animate-spin text-3xl'>
            <CgSpinnerTwo/>
        </div>
    );
};

export default Spinner;