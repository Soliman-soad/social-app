import React from 'react'
import {AiOutlineComment, AiFillLike, AiOutlineShareAlt } from "react-icons/ai";

export default function Post() {
  return (
    <div className=' rounded-xl p-4 my-5 bg-white'>
        <div className='flex my-8 '>
        <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R81466279&ga=GA1.2.31902201.1666701009&semt=ais" alt="" className='rounded-full object-cover w-12 h-12'/>
            <div className='ml-2'>
                <h2 className='font-semibold'>MD Soliman Alam</h2>
                <p>12 jan, 2023</p>
            </div>
        </div>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut nulla maiores aperiam cupiditate! Non atque labore numquam adipisci vitae. Soluta enim libero sint aliquam reprehenderit explicabo veniam omnis quam officia.
        </p>
        <img src="https://img.freepik.com/free-photo/cloud-computing-banner-background-smart-city_53876-108504.jpg?size=626&ext=jpg&uid=R81466279&ga=GA1.1.31902201.1666701009&semt=sph" alt="" className='max-w-[620px] my-5' />
        <div className='grid grid-cols-3 justify-center text-lg font-semibold'>
            <div className='flex justify-center items-center bg-slate-100 p-1 rounded-full mx-2'>
                <AiFillLike/> Like
            </div>
            <div className='flex justify-center items-center bg-slate-100 p-1 rounded-full mx-2'>
                <AiOutlineComment/> Comment
            </div>
            <div className='flex justify-center items-center bg-slate-100 p-1 rounded-full mx-2'>
                <AiOutlineShareAlt/> Share
            </div>
        </div>
    </div>
  )
}
