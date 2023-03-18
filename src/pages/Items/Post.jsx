import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {AiOutlineComment, AiFillLike, AiOutlineShareAlt } from "react-icons/ai";
import { SlOptions } from "react-icons/sl";
import { ImCross } from "react-icons/im";
import { Link, useNavigate } from 'react-router-dom';
import { ProfileContext } from '../../context/UserContext';

export default function Post({ item, setLiking}) {
    const {user} =useContext(ProfileContext);
    const [userData, setUserData] = useState(null);
    const [deleteShow, setDeleteShow] = useState(false)
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`https://social-app-server-soliman-soad.vercel.app/api/users/${item?.userId}`)
        .then(data => {
          setUserData(data.data)
          
        })
        .catch(err =>{console.log(err)})
      
    },[item])
    const deletePost = () =>{
        
        axios.put(`https://social-app-server-soliman-soad.vercel.app/api/post/${item._id}/delete`,{
            userId: user?.uid
        })
        .then(data => {
            setLiking(data);
            navigate('/');  
            setDeleteShow(false);
        })
        .catch(err => console.log(err))
    }
    
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
        <div className='flex my-8 justify-between'>
        <div className='flex'>
        <img src={userData?.singleUserData?.photoURL} alt="" className='rounded-full object-cover w-12 h-12'/>
            <div className='ml-2'>
                <h2 className='font-semibold'>{userData?.singleUserData?.displayName}</h2>
                <p>{(item?.createdAt)?.slice(0,10)}</p>
            </div>
        </div>
        {
            userData?.singleUserData?.uid === user?.uid
            ?
            <div className='flex'>
            <div onClick={deletePost} className={` flex items-center  ${deleteShow? "" :'hidden'}  bg-red-500 text-white text-md font-bold rounded-lg  `} title='delete post'>
			<span className='mx-auto hover:scale-75 cursor-pointer duration-200 p-1'>Delete post</span>
		</div>
            <div onClick={()=>setDeleteShow(false)} className={`mr-10 flex items-center  ${deleteShow? "" :'hidden'} text-md rounded-lg w-10 h-10 `} title='delete post'>
			<span className='mx-auto hover:scale-125 cursor-pointer duration-200'><ImCross/></span>
		</div>
            <div onClick={()=>setDeleteShow(true)} className={`mr-10 flex items-center space-x-2 ${deleteShow?  'hidden' : ""} text-slate-900 text-md font-bold rounded-lg w-10 h-10 `} title='delete post'>
			<span className='mx-auto hover:scale-125 cursor-pointer duration-200 text-2xl'><SlOptions/></span>
		</div>
            </div>

        :
        <></>
        }
        </div>
        <p>
            {
                item?.desc
            }
        </p>
        <img src={item?.image} alt="" className='max-w-lg mx-auto my-5' />
        <div className='grid grid-cols-2 justify-center text-lg font-semibold'>
            <div onClick={liker} className={`flex justify-center  duration-150 items-center cursor-pointer  p-1 rounded-full mx-2 ${(item?.likes)?.includes(user?.uid) ? "bg-orange-500 text-white": "bg-slate-200"}`}>
            <span className='hover:-rotate-45 hover:scale-125 duration-150'><AiFillLike/></span> Like ({(item?.likes)?.length})
            </div>
            <div >
                <Link to={`/post/${item?._id}`}>
                    <div className='flex justify-center items-center bg-slate-200 p-1 rounded-full mx-2 cursor-pointer'>
                    <span className='hover:-rotate-180 hover:scale-125 duration-150'><AiOutlineComment/></span> Comment ({(item?.comments)?.length})
                    </div>
                    </Link>
            </div>
        </div>
    </div>
  )
}
