import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProfileContext } from "../../context/UserContext";
import Navber from "../CommonItem/Navber";
import Sidebar from "../Home/Sidebar";
import CommentLayout from "../Items/CommentLayout";
import Post from "../Items/Post";
import Footer from "../CommonItem/Footer"
import Spinner from "../Items/Spinner";

const PostPage = () => {
    const {user} = useContext(ProfileContext)
    const [item, setItem] = useState([]);
    const {id} = useParams()
    const [pageLoad, setPageLoad] =useState(null)
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)

    useEffect(()=>{
        axios.get(`https://social-app-server-soliman-soad.vercel.app/api/post/timelinePost/${id}`)
        .then(data =>{
            setItem(data?.data)             
            setLoader(false)
            if(data.data ===""){          
              navigate("/error")
            }
        })
        .catch(err => {
          navigate("/error")
          console.log(err)
        })
    },[pageLoad])
    const handleForm =(e)=>{
        e.preventDefault();
        const text = e.target.text.value;
        if(text){
            axios.put(`https://social-app-server-soliman-soad.vercel.app/api/post/${id}/comment`,{
            user: user?.uid,
            comment: text,
            createdAt: item?.createdAt
        })
        .then(data=> {
            setPageLoad(data)
            e.target.text.value =""
        })
        .catch(err => console.log(err))
        }
    }
    
  return (
    <>
      <div className="sticky top-0 w-full z-10">
        <Navber />
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-3 hidden md:block ">
          <div className="sticky top-20 min-h-screen border-r-2  w-full bg-gray-50">
            <Sidebar />
          </div>
        </div>
        {
          loader
          ?
          <div className="col-span-9 mx-auto">
             <Spinner />             
           </div>
          :
        <div className="col-span-12 md:col-span-9">
            <Post item={item} profileUser={item?.userId} setLiking={setPageLoad}/>
            <div className="bg-gray-200 p-4 md:px-16 md:py-10">
            <form onSubmit={handleForm} className="md:flex border-t border-gray-200 py-4 bg-white md:px-8 px-4 md:py-8 mb-5">
                <img src={user.photoURL} alt="" className="w-14 h-14 hidden md:block rounded-full object-cover border-2 border-orange-500" />
        <input type="text" name="text" placeholder="Write your comment" className="px-3 bg-slate-200 rounded-md w-full ml-2 border mr-2 active:border-orange-500 py-2"/>
        <button type="submit" className="btn bg-orange-500 text-white mx-auto mt-3 md:mt-0 rounded-md px-3 py-2  text-lg">Comment </button>
            </form>
            <h3 className="text-xl font-semibold">
                All comments:
            </h3>
            {
                item?.comments?.map((data,i)=>{
                    return <CommentLayout key={i} data={data} id={id} setPageLoad={setPageLoad}/>
                })
            }
            </div>
        </div>
        }
      </div>
      <Footer/>
    </>
  );
};

export default PostPage;
