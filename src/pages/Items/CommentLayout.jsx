import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { ProfileContext } from '../../context/UserContext';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CommentLayout = ({data, id, setPageLoad}) => {
    const [userData, setUserData] = useState(null);
    const{user} =useContext(ProfileContext)
    useEffect(()=>{
        axios.get(`https://social-app-server-soliman-soad.vercel.app/api/users/${data?.user}`)
        .then(data => {
          setUserData(data.data.singleUserData)
          console.log(data.data.singleUserData)
        })
        .catch(err =>{console.log(err)})
      
    },[])

    const handleDeleteComment =()=>{
        axios.put(`https://social-app-server-soliman-soad.vercel.app/api/post/${id}/deleteComment`,{
            user: userData?.uid,
            comment: data?.comment,
            createdAt: data?.createdAt
        })
        .then(data=> setPageLoad(data))
        .catch(err => console.log(err))
    }
    return (
        <div className="container flex flex-col md:w-11/12 md:p-6 p-3 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800 md:my-10 ">
	<div className="flex justify-between md:p-4 p-2">
		<div className="flex space-x-4">
			<div>
            <LazyLoadImage  effect="blur" src={userData?.photoURL} className="object-cover w-12 h-12 rounded-full bg-gray-500"/>
				
			</div>
			<div>
				<h4 className="font-bold">{userData?.displayName}</h4>
				<span className="text-xs text-gray-600">{(data?.createdAt)?.slice(0,10)}</span>
			</div>
		</div>
		{
            user?.uid === userData?.uid ? <div onClick={handleDeleteComment} className="flex items-center space-x-2 bg-red-500 text-white text-2xl font-bold rounded-full w-10 h-10 " title='delete comment'>
			<span className='mx-auto hover:scale-125 duration-200'><RiDeleteBin5Line/></span>
		</div>
        :
        <></>
        }
	</div>
	<div className="p-4 space-y-2 text-sm text-gray-600">
		<p>{data?.comment}</p>
		
	</div>
</div>
    );
};

export default CommentLayout;