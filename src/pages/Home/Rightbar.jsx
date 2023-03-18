import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ProfileContext } from "../../context/UserContext";
import Spinner from "../Items/Spinner";


const Rightbar = ({load,id}) => {
  const { user } = useContext(ProfileContext);
  const [users, setUsers] = useState([]);
  const [currentProfile, setCurrentProfile] = useState(null);
  const [loader, setLoader] = useState(true)
  const [pageLoader, setPageLoader] = useState(false)

  useEffect(() => {
    axios.get(
        `https://social-app-server-soliman-soad.vercel.app/api/users/${user?.uid}/allUser`
      )
      .then((data) => {
        setUsers(data?.data)
        setLoader(false)
      })
      .catch((err) => console.log(err));
  }, [currentProfile,load]);

  useEffect(() => {
    axios.get(
        `https://social-app-server-soliman-soad.vercel.app/api/users/${id}`
      )
      .then((data) => {
        setCurrentProfile(data.data);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageLoader]);
  const handleFollow = (Friend) => {
    setPageLoader(true)
    axios.put(
        `https://social-app-server-soliman-soad.vercel.app/api/users/${user?.uid}/follow`,
        {
          userId: Friend,
        }
      )
      .then((data) => {setPageLoader(false)})
      .catch((err) => console.log(err));
  };
  
  
  return (
    <>
      <div className="bg-white">
        
        {
          loader
           ?
           <div className="col-span-9 mx-auto min-h-screen">
             <Spinner />             
           </div>
              :
              <div className="min-h-screen">
          <div className="border-b mb-5">
            <h3 className="text-xl font-semibold">Following:</h3>
            {
              (currentProfile?.friend)?.length === 0
              ?
              <h2 className="text-xl font-bold text-gray-500 text-center my-10">No following so far</h2>
              :
              <></>
            }
            {users.map((item, i) => {
              if (currentProfile?.friend?.includes(item?.singleUserData?.uid)){
                return (
                    <div key={i} >
                      <div className="flex items-center justify-between hover:bg-orange-500 hover:text-white hover:px-2 duration-100">
                        <Link to={`/profile/${item?.singleUserData?.uid}`}>
                          <div className="text-md font-semibold flex items-center my-5 ">
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
                              {
                                pageLoader
                                ?
                                <div className="w-2 h-2 border-4 border-dashed rounded-full animate-spin border-sky-600"></div>
                                :
                                "Follow"
                              }
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
          {
            user?.uid === id
            ?
            <div>
          <h3 className="text-xl font-semibold">Suggest to follow </h3>
            {users.map((item, i) => {
              if (
                !(item?.singleUserData?.uid === user?.uid) &&
                !(currentProfile?.friend?.includes(item?.singleUserData?.uid))
                ) {
                  return (
                    <div key={i}>
                      
                      <div className="flex items-center justify-between">
                        <Link to={`/profile/${item?.singleUserData?.uid}`}>
                          <div className="text-md font-semibold flex items-center my-5">
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
          :
          <></>
          }
        </div>

        }
      </div>
    </>
  );
};

export default Rightbar;
