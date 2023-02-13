import { CgFeed } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { HiOutlinePhoto } from "react-icons/hi2";
import { FcAbout } from "react-icons/fc";
export default function Sidebar() {
  return (
    <div>
      <ul className="ml-5">
        <li className="flex text-lg items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white"> <span className="mr-2"><CgFeed/></span> Feeds</li>
        <li className="flex text-lg items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white"> <span className="mr-2"><FaUserFriends/></span> Friends</li>
        <li className="flex text-lg items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white"> <span className="mr-2"><BiMessageRounded/> </span> Message</li>
        <li className="flex text-lg items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white"> <span className="mr-2"><HiOutlinePhoto/> </span> Photos</li>
        <li className="flex text-lg items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white"> <span className="mr-2"><FcAbout/> </span>About</li>
      </ul>
    </div>
  )
}
