import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {AiOutlineComment, AiFillLike, AiOutlineShareAlt } from "react-icons/ai";
import { ProfileContext } from '../../context/UserContext';

export default function Post({ item, setLiking}) {
    const {user} =useContext(ProfileContext);
    const [userData, setUserData] = useState(null);
    
    useEffect(()=>{
        axios.get(`https://social-app-server-soliman-soad.vercel.app/api/users/${item.userId}`)
        .then(data => {
          setUserData(data.data)
        })
        .catch(err =>{console.log(err)})
      
    },[])
    
        const liker =()=>{
            axios.put(`https://social-app-server-soliman-soad.vercel.app/api/post/${item._id}/like`,
            {
                userId : user?.uid
            }
            )
            .then(data => {
                setLiking(data)
            })
            .catch(err => console.log(err))
        }
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
            <div onClick={liker} className={`flex justify-center items-center  p-1 rounded-full mx-2 ${(item?.likes).includes(user.uid) ? "bg-sky-400 text-white": "bg-slate-100"}`}>
                <AiFillLike/> Like ({item?.likes.length})
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
