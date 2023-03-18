import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaEarlybirds, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='text-white bg-gray-800 p-16 flex items-center mx-auto justify-center'>
            <div className='border-r-2 border-white pr-10'>
            <h2 className='flex items-center text-4xl font-semibold text-slate-100'><FaEarlybirds/> socia</h2>
            <p>social media to connect everyone</p>
            </div>
            <div className='ml-10'>
                <h1 className='text-xl font-bold'>
                    Md Soliman Alam
                </h1>
                <p>Email: mdsolimansoad@gmail.com</p>
                <div className='flex text-xl mb-3 mt-2'>
                    <a href="https://www.linkedin.com/in/md-soliman-alam/" target="_blank" className='mr-2'><FaLinkedinIn/></a>
                    <a href="https://github.com/Soliman-soad" target="_blank"><AiFillGithub/></a>
                </div>
                <p>© Copy right issue all reserve by <a href="https://github.com/Soliman-soad">Md Soliman Alam</a></p>
            </div>
            
        </div>
    );
};

export default Footer;