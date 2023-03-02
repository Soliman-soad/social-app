import React from "react";
import Footer from "../CommonItem/Footer";
import Navber from "../CommonItem/Navber";
import CreatePost from "../Items/CreatePost";
import Newsfeed from "./Newsfeed";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 w-full z-10">
      <Navber />
      </div>
      <div className="grid grid-cols-12 gap-5 bg-gray-200">
        <div className="col-span-3  ">
          <div className="sticky top-24 min-h-max border-r-2 overflow-scroll scroll-auto bg-white w-full">
          <Sidebar />
          </div>
        </div>
        <div className="col-span-6 ">
          <CreatePost/>
          <Newsfeed />
        </div>
        <div className="col-span-3 bg-white min-h-screen p-5" >
          <div className="sticky top-24">
          <Rightbar />
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
