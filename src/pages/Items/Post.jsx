import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {AiOutlineComment, AiFillLike, AiOutlineShareAlt } from "react-icons/ai";

export default function Post({user, item}) {
    const [userData, setUserData] = useState(null);
    useEffect(()=>{
        axios.get(`https://social-app-server-soliman-soad.vercel.app/api/users/${item.userId}`)
        .then(data => {
          setUserData(data.data)
        })
        .catch(err =>{console.log(err)})
      
    },[])
    console.log(userData)
  return (
    <div className=' rounded-xl p-4 my-5 bg-white'>
        <div className='flex my-8 '>
        <img src={userData?.singleUserData?.photoURL} alt="" className='rounded-full object-cover w-12 h-12'/>
            <div className='ml-2'>
                <h2 className='font-semibold'>{userData?.singleUserData?.displayName}</h2>
                <p>{(item?.createdAt).slice(0,10)}</p>
            </div>
        </div>
        <p>
            {
                item?.desc
            }
        </p>
        <img src={item?.image} alt="" className='max-w-lg mx-auto my-5' />
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
