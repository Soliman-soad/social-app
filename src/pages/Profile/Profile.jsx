import React from "react";
import Sidebar from "../Home/Sidebar";
import { HiLocationMarker } from "react-icons/hi";
import { FaUserFriends } from "react-icons/fa";
import { SlUserFollowing } from "react-icons/sl";
import Navber from "../CommonItem/Navber";
import CreatePost from "../Items/CreatePost";
import Post from "../Items/Post";
import Rightbar from "../Home/Rightbar";
import Footer from "../CommonItem/Footer";

const Profile = () => {
  return (
    <>
    <div className="sticky top-0 w-full z-10">
    <Navber/>
    </div>
    <div className="grid grid-cols-12 ">
      <div className="col-span-3">
        <div className="sticky top-24">
        <Sidebar />
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
              src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R81466279&ga=GA1.2.31902201.1666701009&semt=ais"
              className=" rounded-full w-[230px] h-[230px] object-cover -mt-40 ml-20"
              alt=""
            />
          </div>
        </div>
        <div>
            <div className="ml-10 mt-5 pt-3 mb-5">
            <h1 className="text-3xl font-semibold mb-3">Soliman Alam</h1>
            <p className="flex items-center text-lg mb-2"> <span className="mr-1 text-orange-500"><HiLocationMarker/></span> <span className="font-semibold mr-1">lives at</span> Dhaka, Bangladesh</p>
            <p className="flex items-center text-lg mb-2"> <span className="mr-1 text-orange-500"><FaUserFriends/></span> <span className="font-semibold mr-1">Friends: </span> 60 </p>
            <p className="flex items-center text-lg mb-2"> <span className="mr-1 text-orange-500"><SlUserFollowing/></span> <span className="font-semibold mr-1">Following: </span> 60 </p>
            </div>
            <div className="grid grid-cols-5 bg-gray-100 pt-8">
                <div className="col-span-3 px-5">
                    <CreatePost/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
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
