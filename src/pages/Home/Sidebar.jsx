import { CgFeed } from "react-icons/cg";
import { FaUserFriends } from "react-icons/fa";
import { BiMessageRounded, BiLogOut } from "react-icons/bi";
import {BsInfoSquare,BsBookmarkHeartFill } from "react-icons/bs";
import { FcSettings } from "react-icons/fc";
import profileImg from "../../asset/profile.png"
import { useContext } from "react";
import { ProfileContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
export default function Sidebar() {

	const {logOut, user} = useContext(ProfileContext);

	const userLogOut = () =>{
		logOut()
		.then()
		.catch(err =>console.log(err))
	}
  return (
    <div>
        <div className="h-full p-3 space-y-2 w-full bg-gray-50 text-gray-800">
	<div className="flex items-center p-2 space-x-4">
		<img src={user?.profilePicture ==="" ? profileImg : user?.photoURL} alt="" className="w-12 h-12 rounded-full bg-gray-500 object-cover" />
		<div>
			<h2 className="text-lg font-semibold">{user?.displayName}</h2>
			<span className="flex items-center space-x-1">
				<p className="text-xs hover:underline text-gray-600">{user?.email}</p>
			</span>
		</div>
	</div>
	<div className="divide-y divide-gray-300">
		<ul className="pt-2 pb-4 space-y-1 text-sm">
<Link to="/">    <li className="flex text-md items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white"> <span className="mr-2 bg-orange-100 p-2 text-orange-500 font-bold rounded-lg hover:scale-150 duration-200"><CgFeed/></span> Feeds</li></Link>
<Link to="/friends">    <li className="flex text-md items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white"> <span className="mr-2 bg-orange-100 p-2 text-orange-500 font-bold rounded-lg hover:scale-150 duration-200"><FaUserFriends/></span> Friends</li></Link>
<Link to="/message">    <li className="flex text-md items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white"> <span className="mr-2 bg-orange-100 p-2 text-orange-500 font-bold rounded-lg hover:scale-150 duration-200"><BiMessageRounded/> </span> Message</li></Link>
<Link to="/about">    <li className="flex text-md items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white"> <span className="mr-2 bg-orange-100 p-2 text-orange-500 font-bold rounded-lg hover:scale-150 duration-200"><BsInfoSquare/> </span>About</li></Link>
		</ul>
		<ul className="pt-4 pb-2 space-y-1 text-sm">
			<Link to={`/profile/${user?.uid}`}>
			<li className="flex text-md items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white">
        <span className="mr-2 bg-orange-100 p-2 text-orange-500 font-bold rounded-lg hover:scale-150 duration-200 hover:rounded-full hover:animate-bounce"><FcSettings/></span>
					<span>Settings</span>
			</li>
			</Link>
			<li onClick={userLogOut} className="flex text-md items-center mt-3 cursor-pointer p-3 hover:bg-orange-600 hover:text-white">
      <span className="mr-2 bg-orange-100 p-2 text-orange-500 font-bold rounded-lg hover:scale-150 duration-200 "><span><BiLogOut/></span></span>
					<span>Logout</span>
			</li>
		</ul>
	</div>
</div>
    </div>
  )
}
