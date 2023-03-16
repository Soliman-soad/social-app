import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "../../context/UserContext";
import Footer from "../CommonItem/Footer";
import Navber from "../CommonItem/Navber";
import Sidebar from "../Home/Sidebar";
import Spinner from "../Items/Spinner";


const Friends = () => {
  const { user } = useContext(ProfileContext);
  const [users, setUsers] = useState([]);
  const [currentProfile, setCurrentProfile] = useState(null);
  const [loader, setLoader] = useState(true)

  useEffect(() => {
    axios.get(
        `https://social-app-server-soliman-soad.vercel.app/api/users/${user?.uid}/allUser`
      )
      .then((data) => {
        setUsers(data?.data)
        setLoader(false)
      })
      .catch((err) => console.log(err));
  }, [currentProfile]);

  useEffect(() => {
    axios.get(
        `https://social-app-server-soliman-soad.vercel.app/api/users/${user?.uid}`
      )
      .then((data) => {
        setCurrentProfile(data.data);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleFollow = (Friend) => {
    axios.put(
        `https://social-app-server-soliman-soad.vercel.app/api/users/${user?.uid}/follow`,
        {
          userId: Friend,
        }
      )
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  
  
  return (
    <>
      <div className="sticky top-0 w-full z-10">
        <Navber />
      </div>
      <div className="grid md:grid-cols-12">
        <div className="md:col-span-3 hidden md:block ">
          <div className="sticky top-20 min-h-screen border-r-2  w-full bg-gray-50">
            <Sidebar />
          </div>
        </div>
        {
          loader
           ?
           <div className="col-span-9 mx-auto min-h-screen">
             <Spinner />             
           </div>
              :
              <div className="md:col-span-9 px-10 py-8 min-h-screen">
          <div className="border-b mb-5">
            <h3 className="text-xl font-semibold">Following:</h3>
            {
              (currentProfile?.friend)?.length === 0
              ?
              <h2 className="text-2xl font-bold text-gray-500 text-center my-10">No following so far</h2>
              :
              <></>
            }
            {users.map((item, i) => {
              if (currentProfile?.friend?.includes(item?.singleUserData?.uid)){
                return (
                    <div key={i} className="ml-5">
                      <div className="flex items-center justify-between">
                        <Link to={`/profile/${item?.singleUserData?.uid}`}>
                          <div className="text-xl font-semibold flex items-center my-5">
                            <img
                              src={item?.singleUserData?.photoURL}
                              alt=""
                              className="rounded-full object-cover w-12 h-12 mr-2"
                            />
                            {item?.singleUserData?.displayName}
                          </div>
                        </Link>
                        <div>
                          {currentProfile?.friend?.includes(
                            item?.singleUserData?.uid
                          ) ? (
                            <></>
                          ) : (
                            <button
                              onClick={() =>
                                handleFollow(item?.singleUserData?.uid)
                              }
                              className="bg-orange-500 text-white px-3 py-2 rounded-md btn hover:bg-slate-900"
                            >
                              Follow
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
              }else if(!(currentProfile?.friend?.includes(item?.singleUserData?.uid))){
            return <div key={i}></div>  
            }
              return <div key={i}>
                <h1 className="text-center text-xl">No Following</h1>
              </div>
            })}
          </div>
          <div>
            {users.map((item, i) => {
              if (
                !(item?.singleUserData?.uid === user?.uid) &&
                !(currentProfile?.friend?.includes(item?.singleUserData?.uid))
                ) {
                  return (
                    <div key={i} className="ml-5">
                      <h3 className="text-xl font-semibold">Suggest to follow </h3>
                      <div className="flex items-center justify-between">
                        <Link to={`/profile/${item?.singleUserData?.uid}`}>
                          <div className="text-xl font-semibold flex items-center my-5">
                            <img
                              src={item?.singleUserData?.photoURL}
                              alt=""
                              className="rounded-full object-cover w-12 h-12 mr-2"
                            />
                            {item?.singleUserData?.displayName}
                          </div>
                        </Link>
                        <div>
                          {currentProfile?.friend?.includes(
                            item?.singleUserData?.uid
                          ) ? (
                            <></>
                          ) : (
                            <button
                              onClick={() =>
                                handleFollow(item?.singleUserData?.uid)
                              }
                              className="bg-orange-500 text-white px-3 py-2 rounded-md btn hover:bg-slate-900"
                            >
                              Follow
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }
                return <div key={i}></div>;
              
            })}
          </div>
        </div>

        }
      </div>
      <Footer />
    </>
  );
};

export default Friends;
