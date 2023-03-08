import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ProfileContext } from '../../context/UserContext';

export default function Rightbar() {
  const {user} = useContext(ProfileContext);
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    axios.get(`https://social-app-server-soliman-soad.vercel.app/api/users/${user.uid}/allUser`)
    .then(data => setUsers(data?.data))
    .catch(err => console.log(err))
  },[])
  return (
    <div >
      <h3 className='text-xl font-semibold'>Active Friend</h3>
      {
        users.map((item, i) => {
         return( <div key={i}>
            <Link to={`/profile/${item?.singleUserData?.uid}`}>
            <div className='flex items-center justify-between'>
            <div className='text-xl font-semibold flex items-center my-5'>
      <img src={item?.singleUserData?.photoURL} alt="" className='rounded-full object-cover w-12 h-12 mr-2'/>
      {item?.singleUserData?.displayName}
      </div>
      <div>
        {
          item?.singleUserData?.uid === user.uid 
          ?
          <></>
          : 
        <button className='bg-orange-500 text-white px-3 py-2 rounded-md btn hover:bg-slate-900'>Follow</button>
        }
      </div>
            </div>
            </Link>
          </div>)
        })
      }
    </div>
  )
}
