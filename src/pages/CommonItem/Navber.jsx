import React, { useContext, useEffect, useState } from 'react'
import { FaEarlybirds } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { BiSearchAlt2 } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import { ProfileContext } from '../../context/UserContext';
import axios from 'axios';

export default function Navber() {
  const {user, logOut} = useContext(ProfileContext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [notify, setNotify] =useState(false);
  const [users, setUsers] = useState([]);
  const[text, setText] = useState(false)
  const[myUser, setMyUser] = useState(null);


  const handleLogOut =()=>{
    logOut()
		.then()
		.catch(err =>console.log(err))
  }

  useEffect(()=>{
    axios.get(`https://social-app-server-soliman-soad.vercel.app/api/users/${user?.uid}/allUser`)
    .then(data => setUsers(data?.data))
    .catch(err => console.log(err))

  },[text])
  const search =(e) =>{
    setMyUser(users.filter(i => (i.singleUserData.displayName).match(e.target.value) ))
    if(e.target.value !==""){
      setText(true)
    }else{
      setText(false)
    }
  }

	let activeStyle = {
		color:"#FC6403",
		fontWeight : "600"
	  };
  return (
    <>
<div className='bg-white px-3 shadow-md'>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            className="inline-flex items-center"
          >
            <h2 className='flex items-center text-4xl font-semibold text-orange-600'><FaEarlybirds/> socia</h2>
          </Link>
		  <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
			<div className=' basis-6/12  w-full bg-gray-50 rounded-full p-2 h-10 items-center text-lg'>
			<div className='flex   w-full bg-gray-50 rounded-full p-2 h-10 items-center text-lg'>
      <BiSearchAlt2/>
			<input onChange={search} type="text" placeholder='search friends' className='px-1 h-9 w-full rounded-full border-none outline-none bg-gray-50 w-[450px]'/>
      </div>
        {
          text ?
          <div className=' mt-1 w-full p-1 bg-slate-50'>
            {
          myUser.map((item, i)=>{
            return(<div key={i}>
              <Link to={`/profile/${item?.singleUserData?.uid}`}>
              <p className='border w-full px-10 py-2 cursor-pointer'>{item?.singleUserData?.displayName}</p>
              </Link>
            </div>)
          })
            }
        </div>
          :
          <></>
        }
		</div>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">
		  <li className="flex">
				<NavLink
				style={({ isActive }) =>
				isActive ? activeStyle : undefined
			  }
				to="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
				end
				>Home</NavLink>
			</li>
			<li className="flex">
				<NavLink 
				style={({ isActive }) =>
				isActive ? activeStyle : undefined
			  }
				to="/friends" className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Friends</NavLink>
			</li>
			<li className="flex">
				<NavLink 
				style={({ isActive }) =>
				isActive ? activeStyle : undefined
			  }
				to={`/profile/${user?.uid}`} className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Profile</NavLink>
			</li>
			<li className='items-center flex-shrink-0 hidden lg:flex justify-around '>
			<div className='flex text-2xl items-center relative mr-2' >
				<IoIosNotifications onClick={()=> setNotify(!notify)}/>
				<span className='text-xs bg-orange-600 text-white rounded-full w-4 text-center h-4 absolute -top-1 -right-1'>1</span>
				<div className={`inline w-64 absolute bg-orange-100 ease-in-out delay-150 -left-28 -bottom-20 p-5 ${notify ? "":"hidden"}`}>
				<p className='text-base'>Welcome to socia</p>
				</div>
			</div>
			
			<div>
			<img src={user?.photoURL} alt="" className='rounded-full object-cover w-12 h-12'/>
			</div>
			</li>
          </ul>
          
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <h2 className='flex items-center text-4xl font-semibold text-orange-600'><FaEarlybirds/> socia</h2>
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
					<li className="flex">
				<NavLink
				style={({ isActive }) =>
				isActive ? activeStyle : undefined
			  }
				to="/" className="flex items-center px-4 -mb-1 border-b-2 border-transparent ">Home</NavLink>
			</li>
			<li className="flex">
				<NavLink  to="/friends"
				style={({ isActive }) =>
				isActive ? activeStyle : undefined
			  }
				className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Friends</NavLink>
			</li>
			<li className="flex">
				<NavLink 
				style={({ isActive }) =>
				isActive ? activeStyle : undefined
			  }
				to={`/profile/${user.uid}`} className="flex items-center px-4 -mb-1 border-b-2 border-transparent">Profile</NavLink>
			</li>
      <li >
        <button onClick={handleLogOut} className="btn w-full mt-5 bg-orange-500 text-white rounded-md py-3">
          Log out
        </button>
      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
