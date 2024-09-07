import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { ProfileContext } from '../../context/UserContext';
import Post from '../Items/Post'
import Spinner from '../Items/Spinner';

export default function Newsfeed({pageloader}) {
  const {user} =useContext(ProfileContext);
  const [postData, setPostData] = useState([]);
  const [liking, setLiking] = useState(null);
  const [loader, setLoader] = useState(true)
  useEffect(()=>{
    axios.get(`https://social-app-server-three.vercel.app/api/post/allTimeline/${user.uid}`)
    .then(data=>{
      setPostData(data.data);
      setLoader(false);
      
    })
    .catch(err => console.log(err))
  },[liking, pageloader])

    
  if(loader){
    return (
      <>
      <Spinner/>
      </>
    )
  }

  return (
    <div >
      {
        postData.map((item, i)=>{
         return <Post key={i} item={item} setLiking={setLiking}/>
          
        })
      }
    </div>
  )
}
