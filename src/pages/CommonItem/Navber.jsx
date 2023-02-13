import React from 'react'
import { FaEarlybirds } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { BiSearchAlt2 } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";

export default function Navber() {
  return (
    <>
    <header className="p-4 bg-gray-100 text-gray-800">
	<div className="container flex justify-between items-center h-16 mx-auto">
		
        <div className='flex items-center basis-3/12 '>
            <h2 className='flex items-center text-4xl font-semibold text-orange-600'><FaEarlybirds/> socia</h2>
        </div>
		<div className='flex basis-6/12  w-full bg-white rounded-full p-2 h-10 items-center text-lg'>
			<BiSearchAlt2/>
			<input type="text" placeholder='search friends' className='px-1 h-9 w-full rounded-full'/>
		</div>
		<div className='flex justify-around basis-3/12'>
        <ul className="items-stretch hidden space-x-3 lg:flex">
			<li className="flex">
				<Link to="" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-orange-600 border-orange-600">Home</Link>
			</li>
			<li className="flex">
				<Link  to="" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Friends</Link>
			</li>
			<li className="flex">
				<Link  to="" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Profile</Link>
			</li>
		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex justify-around ">
			<div className='flex text-2xl items-center relative'>
				<IoIosNotifications/>
				<span className='text-xs bg-orange-600 text-white rounded-full w-4 text-center h-4 absolute -top-1 -right-1'>1</span>
			</div>
			<div>
			<img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&uid=R81466279&ga=GA1.2.31902201.1666701009&semt=ais" alt="" className='rounded-full object-cover w-12 h-12'/>
			</div>
		</div>
		<button className="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
        </div>
	</div>
</header>


    </>
  )
}
