import React from "react";
import Navber from "../CommonItem/Navber";
import CreatePost from "../Items/CreatePost";
import Newsfeed from "./Newsfeed";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <>
      <Navber />
      <div className="grid grid-cols-12 gap-5 bg-gray-200">
        <div className="col-span-3 min-h-screen border-r-2 overflow-scroll bg-white">
          <Sidebar />
        </div>
        <div className="col-span-6 ">
          <CreatePost/>
          <Newsfeed />
        </div>
        <div className="col-span-3 bg-white min-h-screen p-5" >
          <Rightbar />
        </div>
      </div>
    </>
  );
}
