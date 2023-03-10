import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";

const CommentLayout = ({data}) => {
    const [userData, setUserData] = useState(null);
    
    useEffect(()=>{
        axios.get(`https://social-app-server-soliman-soad.vercel.app/api/users/${data?.user}`)
        .then(data => {
          setUserData(data.data.singleUserData)
          console.log(data.data.singleUserData)
        })
        .catch(err =>{console.log(err)})
      
    },[])
    return (
        <div className="container flex flex-col w-11/12 p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800">
	<div className="flex justify-between p-4">
		<div className="flex space-x-4">
			<div>
				<img src={userData?.photoURL} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
			</div>
			<div>
				<h4 className="font-bold">{userData?.displayName}</h4>
				<span className="text-xs text-gray-600">{(data?.createdAt)?.slice(0,10)}</span>
			</div>
		</div>
		<div className="flex items-center space-x-2 bg-red-500 text-white text-2xl font-bold rounded-full w-10 h-10" title='delete comment'>
			<span className='mx-auto'><RiDeleteBin5Line/></span>
		</div>
	</div>
	<div className="p-4 space-y-2 text-sm text-gray-600">
		<p>{data?.comment}</p>
		
	</div>
</div>
    );
};

export default CommentLayout;