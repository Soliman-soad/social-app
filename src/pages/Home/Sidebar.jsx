import { CgFeed } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { HiOutlinePhoto } from "react-icons/hi2";
import {BsInfoSquare } from "react-icons/bs";
export default function Sidebar() {
  return (
    <div>
      <ul className="ml-5">
        <li className="flex text-lg items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white font-medium"> <span className="mr-2 bg-orange-100 p-2 text-orange-500 font-bold rounded-lg"><CgFeed/></span> Feeds</li>
        <li className="flex text-lg items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white font-medium"> <span className="mr-2 bg-orange-100 p-2 text-orange-500 font-bold rounded-lg"><FaUserFriends/></span> Friends</li>
        <li className="flex text-lg items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white font-medium"> <span className="mr-2 bg-orange-100 p-2 text-orange-500 font-bold rounded-lg"><BiMessageRounded/> </span> Message</li>
        <li className="flex text-lg items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white font-medium"> <span className="mr-2 bg-orange-100 p-2 text-orange-500 font-bold rounded-lg"><HiOutlinePhoto/> </span> Photos</li>
        <li className="flex text-lg items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white font-medium"> <span className="mr-2 bg-orange-100 p-2 text-orange-500 font-bold rounded-lg"><BsInfoSquare/> </span>About</li>
      </ul>
    </div>
  )
}
