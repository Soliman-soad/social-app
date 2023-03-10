import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProfileContext } from "../../context/UserContext";
import Navber from "../CommonItem/Navber";
import Sidebar from "../Home/Sidebar";
import CommentLayout from "../Items/CommentLayout";
import Post from "../Items/Post";
const PostPage = () => {
    const {user} = useContext(ProfileContext)
    const [item, setItem] = useState(null);
    const {id} = useParams()
    useEffect(()=>{
        axios.get(`https://social-app-server-soliman-soad.vercel.app/api/post/timelinePost/${id}`)
        .then(data =>{
            console.log(data)
            setItem(data.data)
        })
        .catch(err => console.log(err))
    },[])
    const handleForm =(e)=>{
        e.preventDefault();
        const text = e.target.text.value;
        if(text){
            axios.put(`https://social-app-server-soliman-soad.vercel.app/api/post/${id}/comment`,{
            user: user?.uid,
            comment: text,
            createdAt: item?.createdAt
        })
        .then(data=> console.log(data))
        .catch(err => console.log(err))
        }
        

    }
  return (
    <>
      <div className="sticky top-0 w-full z-10">
        <Navber />
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-3  ">
          <div className="sticky top-20 min-h-screen border-r-2  w-full bg-gray-50">
            <Sidebar />
          </div>
        </div>
        <div className="col-span-9">
            <Post item={item}/>
            <form onSubmit={handleForm} className="flex border-t border-gray-200 py-8 ">
                <img src={user.photoURL} alt="" className="w-14 h-14 rounded-full object-cover border-2 border-orange-500" />
        <input type="text" name="text" placeholder="Write your comment" className="px-3 bg-slate-100 rounded-md w-full ml-2 border border-orange-500 py-2"/>
        <button type="submit" className="btn bg-orange-500 text-white rounded-md px-3 py-2  text-lg">Comment </button>
            </form>
            {
                item?.comments?.map((data,i)=>{
                    return <CommentLayout data={data}/>
                })
            }
        </div>
      </div>
      
    </>
  );
};

export default PostPage;
