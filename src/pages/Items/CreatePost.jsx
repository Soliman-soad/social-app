import React from "react";
import { IoMdPhotos } from "react-icons/io";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
const CreatePost = () => {
  return (
    <div className="bg-white p-5 rounded-lg m-1">
      <div className="flex ">
        <img
          src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R81466279&ga=GA1.2.31902201.1666701009&semt=ais"
          alt=""
          className="rounded-full object-cover w-12 h-12"
        />
        <input type="text" placeholder="What is your mind?" className="bg-gray-50 w-full boarder-none outline-none p-2 mx-5" />
      </div>
      <div className="grid grid-cols-2 text-center gap-3">
        <div>
            <button className="flex bg-red-50 w-full justify-center items-center p-3 m-2 text-red-600 font-semibold rounded-lg hover:text-white hover:bg-red-500">
                <IoMdPhotos/>
                Add image
            </button>
        </div>
        <div>
            <button className="flex bg-blue-50 w-full justify-center items-center p-3 m-2 text-blue-600 font-semibold rounded-lg hover:text-white hover:bg-blue-500">
                <BsFillFileEarmarkPostFill/>
                Post
            </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
