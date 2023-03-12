import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../Home/Sidebar";
import { HiLocationMarker } from "react-icons/hi";
import { FaUserFriends } from "react-icons/fa";
import { SlUserFollowing } from "react-icons/sl";
import { BiEdit } from "react-icons/bi";
import Navber from "../CommonItem/Navber";
import CreatePost from "../Items/CreatePost";
import Post from "../Items/Post";
import Rightbar from "../Home/Rightbar";
import Footer from "../CommonItem/Footer";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProfileContext } from "../../context/UserContext";


const Profile = () => {
  const {id} = useParams(); 
  const {user} = useContext(ProfileContext);
  const navigate = useNavigate()
  const [userData,setUserData] = useState(null);
  const [postItem, setPostItem] = useState(null);

  useEffect(()=>{
    if(user.uid){
      axios.get(`https://social-app-server-soliman-soad.vercel.app/api/users/${id}`)
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
  },[id])


  useEffect(()=>{
    if(user.uid){
      axios.get(`https://social-app-server-soliman-soad.vercel.app/api/post/profile/${id}`)
      .then(data => {        
        setPostItem(data.data)
      })
      .catch(err =>{
        navigate("/error")
        console.log(err)
      })
    }
  },[id])

  return (
    <>
    <div className="sticky top-0 w-full z-10">
    <Navber/>
    </div>
    <div className="grid grid-cols-12 ">
      <div className="col-span-3">
        <div className="sticky top-20">
        <Sidebar/>
        </div>
      </div>
      <div className="col-span-9">
        <div>
          <img
            src="https://img.freepik.com/free-photo/beautiful-tree-middle-field-covered-with-grass-with-tree-line-background_181624-29267.jpg?size=626&ext=jpg&uid=R81466279&ga=GA1.1.31902201.1666701009&semt=scalerv1"
            alt=""
            className="w-full max-h-96"
          />
          <div>
            <img
              src={userData?.singleUserData?.photoURL}
              className=" rounded-full w-[230px] h-[230px] object-cover -mt-40 ml-20"
              alt=""
            />
          </div>
        </div>
        <div>
            <div className="ml-10 mt-5 pt-3 mb-5 flex justify-between md:mr-16 mr-8">
            <div>
            <h1 className="text-3xl font-semibold mb-3 flex items-center">{userData?.singleUserData?.displayName} {user.uid === userData?.uId ? <span className="ml-2 text-xl text-orange-400 bg-orange-100 p-1 rounded-full" title="Edit profile"><Link to="/editProfile"><BiEdit/></Link></span> : <span></span>} </h1>
            <p className="flex items-center text-lg mb-2"> <span className="mr-1 text-orange-500"><HiLocationMarker/></span> <span className="font-semibold mr-1">lives at</span> {userData?.city ===""? "Dhaka, Bangladesh": userData?.city}</p>
            <p className="flex items-center text-lg mb-2"> <span className="mr-1 text-orange-500"><FaUserFriends/></span> <span className="font-semibold mr-1">Friends: </span> {(userData?.friend)?.length} </p>
            <p className="flex items-center text-lg mb-2"> <span className="mr-1 text-orange-500"><SlUserFollowing/></span> <span className="font-semibold mr-1">Following: </span> {(userData?.following)?.length} </p>
            </div>
            <div>
            {user?.uid === userData?.uId || (userData?.friend).includes(user?.uid)  ? <span></span> : <button className='bg-orange-500 text-lg text-white px-5 py-3 rounded-md btn hover:bg-slate-900'>Follow</button>}
            {user?.uid === userData?.uId || !(userData?.friend).includes(user?.uid)  ? <span></span> : <button className='bg-slate-900 text-lg text-white px-5 py-3 rounded-md btn hover:bg-slate-800'>Unfollow</button>}
            </div>
            </div>
            <div className="grid grid-cols-5 bg-gray-100 pt-8">
                <div className="col-span-3 px-5">
                  {
                    user?.uid === userData?.uId
                    ?
                    <CreatePost/>
                    :
                    <></>

                  }
                 {postItem?.length ===0
                 ?
                 <h2 className="text-2xl font-semibold text-center my-10">No post so far</h2>
                 :
                  postItem?.map((item,i)=>{
                    return <Post key={i} item={item}/>
                  })
                  }
                    
                </div>
                <div className="col-span-2 p-5 bg-white">
                    <div className="sticky top-24">
                    <Rightbar/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Profile;
