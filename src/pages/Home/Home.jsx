import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../../context/UserContext";
import Footer from "../CommonItem/Footer";
import Navber from "../CommonItem/Navber";
import CreatePost from "../Items/CreatePost";
import Newsfeed from "./Newsfeed";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";

export default function Home() {
  const {user} = useContext(ProfileContext);
  const [userData,setUserData] = useState(null);
  useEffect(()=>{
    if(localStorage.getItem("userId")){
      axios.get(`https://social-app-server-soliman-soad.vercel.app/api/users/${JSON.parse(localStorage.getItem("userId"))}`)
      .then(data => {
        setUserData(data.data);
      })
      .catch(err =>{console.log(err)})
    }
  },[])
  return (
    <>
      <div className="sticky top-0 w-full z-10">
      <Navber />
      </div>
      <div className="grid grid-cols-12 gap-5 bg-gray-200">
        <div className="col-span-3  ">
          <div className="sticky top-20 min-h-screen border-r-2  w-full bg-gray-50">
          <Sidebar />
          </div>
        </div>
        <div className="col-span-6 ">
          <CreatePost/>
          <Newsfeed />
        </div>
        <div className="col-span-3 bg-gray-50 text-gray-800" >
          <div className="sticky top-24 min-h-screen  p-5">
          <Rightbar />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
