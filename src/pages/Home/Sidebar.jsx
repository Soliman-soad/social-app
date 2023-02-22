import { CgFeed } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import { BiMessageRounded, BiLogOut } from "react-icons/bi";
import { HiOutlinePhoto } from "react-icons/hi2";
import {BsInfoSquare,BsBookmarkHeartFill } from "react-icons/bs";
import { FcSettings } from "react-icons/fc";
export default function Sidebar() {
  return (
    <div>
        <div className="h-full p-3 space-y-2 w-full bg-gray-50 text-gray-800">
	<div className="flex items-center p-2 space-x-4">
		<img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full bg-gray-500" />
		<div>
			<h2 className="text-lg font-semibold">Leroy Jenkins</h2>
			<span className="flex items-center space-x-1">
				<a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-600">View profile</a>
			</span>
		</div>
	</div>
	<div className="divide-y divide-gray-300">
		<ul className="pt-2 pb-4 space-y-1 text-sm">
    <li className="flex text-md items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white"> <span className="mr-2 bg-orange-100 p-2 text-orange-500 font-bold rounded-lg"><CgFeed/></span> Feeds</li>
    <li className="flex text-md items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white"> <span className="mr-2 bg-orange-100 p-2 text-orange-500 font-bold rounded-lg"><FaUserFriends/></span> Friends</li>
    <li className="flex text-md items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white"> <span className="mr-2 bg-orange-100 p-2 text-orange-500 font-bold rounded-lg"><BiMessageRounded/> </span> Message</li>
    <li className="flex text-md items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white"> <span className="mr-2 bg-orange-100 p-2 text-orange-500 font-bold rounded-lg"><BsBookmarkHeartFill/> </span> Wishlist</li>
    <li className="flex text-md items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white"> <span className="mr-2 bg-orange-100 p-2 text-orange-500 font-bold rounded-lg"><BsInfoSquare/> </span>About</li>
		</ul>
		<ul className="pt-4 pb-2 space-y-1 text-sm">
			<li className="flex text-md items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white">
        <span className="mr-2 bg-orange-100 p-2 text-orange-500 font-bold rounded-lg"><FcSettings/></span>
					<span>Settings</span>
			</li>
			<li className="flex text-md items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white">
      <span className="mr-2 bg-orange-100 p-2 text-orange-500 font-bold rounded-lg"><BiLogOut/></span>
					<span>Logout</span>
			</li>
		</ul>
	</div>
</div>
    </div>
  )
}
