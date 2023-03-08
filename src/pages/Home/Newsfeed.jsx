import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { ProfileContext } from '../../context/UserContext';
import Post from '../Items/Post'

export default function Newsfeed() {
  const {user} =useContext(ProfileContext);
  const [postData, setPostData] = useState([]);
  
  useEffect(()=>{
    axios.get(`https://social-app-server-soliman-soad.vercel.app/api/post/allTimeline/${user.uid}`)
    .then(data=>{
      setPostData(data.data);
    
    })
    .catch(err => console.log(err))
  },[])
  console.log(postData)
  return (
    <div >
      {
        postData.map((item, i)=>{
         return <Post key={i} item={item}/>
          
        })
      }
    </div>
  )
}
