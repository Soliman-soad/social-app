import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { ProfileContext } from '../../context/UserContext';

export default function Rightbar() {
  const {user} = useContext(ProfileContext);
  const [users, setUsers] = useState([]);
  const [currentProfile, setCurrentProfile] = useState(null)
  const navigate = useNavigate()
  const [userData,setUserData] = useState(null);


  useEffect(()=>{
    axios.get(`https://social-app-server-soliman-soad.vercel.app/api/users/${user.uid}/allUser`)
    .then(data => setUsers(data?.data))
    .catch(err => console.log(err))
  },[currentProfile])


    useEffect(()=>{
        axios.get(`https://social-app-server-soliman-soad.vercel.app/api/users/${user.uid}`)
        .then(data => {
          setCurrentProfile(data.data)
        })
        .catch(err =>{console.log(err)})
      
    },[userData])

    useEffect(()=>{
      if(user.uid){
        axios.get(`https://social-app-server-soliman-soad.vercel.app/api/users/${user?.uid}`)
        .then(data => {          
          if(data.data){
            setUserData(data.data)
          }else if(data.data ===""){
            navigate("/error")
          }
        })
        .catch(err =>{
          navigate("/error")
          console.log(err)
        })
      }
    },[])
  const handleFollow = (Friend) =>{
    axios.put(`https://social-app-server-soliman-soad.vercel.app/api/users/${user.uid}/follow`,{
      userId : Friend
    })
    .then(data=> console.log(data))
    .catch(err => console.log(err))
  }
  return (
    <div >
      <div >
      {
        users.map((item, i) => {
          if((userData?.friend)?.includes(item?.singleUserData?.uid)){
            return( <div key={i} className='border-b mb-4'>
              <h3 className='text-xl font-semibold'>Following</h3>
              <div className='flex items-center justify-between'>
              <Link to={`/profile/${item?.singleUserData?.uid}`}>
              <div className='text-xl font-semibold flex items-center my-5'>
        <img src={item?.singleUserData?.photoURL} alt="" className='rounded-full object-cover w-12 h-12 mr-2'/>
        {item?.singleUserData?.displayName}
        </div>
          </Link>
        <div>
          {
            (currentProfile?.friend)?.includes( item?.singleUserData?.uid)
            ?
            <></>
            : 
          <button onClick={()=> handleFollow(item?.singleUserData?.uid)} className='bg-orange-500 text-white px-3 py-2 rounded-md btn hover:bg-slate-900'>Follow</button>
          }
        </div>
              </div>
            </div>)
          }
          return <div key={i}></div>
         
        })
      }
      </div>
      <div className="mt-4">
      {
        users.map((item, i) => {
          if(item?.singleUserData?.uid !== user.uid && !(userData?.friend)?.includes(item?.singleUserData?.uid)){
            return( <div key={i} className={`${item?.singleUserData?.uid === user.uid ?"": "hidden"}`}>
              <h3 className='text-xl font-semibold'>Suggest to follow</h3>
              <div className='flex items-center justify-between'>
              <Link to={`/profile/${item?.singleUserData?.uid}`}>
              <div className='text-xl font-semibold flex items-center my-5'>
        <img src={item?.singleUserData?.photoURL} alt="" className='rounded-full object-cover w-12 h-12 mr-2'/>
        {item?.singleUserData?.displayName}
        </div>
          </Link>
        <div>
          {
            (currentProfile?.friend)?.includes( item?.singleUserData?.uid)
            ?
            <></>
            : 
          <button onClick={()=> handleFollow(item?.singleUserData?.uid)} className='bg-orange-500 text-white px-3 py-2 rounded-md btn hover:bg-slate-900'>Follow</button>
          }
        </div>
              </div>
            </div>)
          }
          
          return <div key={i}></div>
        })
      }
      </div>
    </div>
  )
}
