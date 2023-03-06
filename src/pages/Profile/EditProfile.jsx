import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import profileImg from "../../asset/profile.png"
import { ProfileContext } from '../../context/UserContext';

const Profile = () => {
  const {user,changeProfile,passwordUpdate} = useContext(ProfileContext);
    const [userData,setUserData] = useState(null);
  useEffect(()=>{
    if(user.uid){
      axios.get(`https://social-app-server-soliman-soad.vercel.app/api/users/${user.uid}`)
      .then(data => {
        console.log(data.data)
        setUserData(data.data)
      })
      .catch(err =>{console.log(err)})
    }
  },[])
  const { register, handleSubmit, formState: { errors } } = useForm();  
    const navigate = useNavigate();

    const update = (name,img) =>{
      changeProfile(name,img)
      .then(()=>{navigate("/profile")})
      .catch(error => console.log(error))
  }

  // update password start
   const newPassword = (password) =>{
    passwordUpdate(password)
    .then(()=>{
      console.log("password updated")
      navigate("/profile");
  })
    .catch(err=> console.log(err))
   }
  // update password end

    const formSubmit = data =>{
        if((data.img).length !== 0){
        const image = data.img[0];
        const formData = new FormData();
        formData.append("image",image);
        axios.post('https://api.imgbb.com/1/upload?key=89b36a1573d5114380d55398de49d11b', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
      })
      .then(dataItem => {
        update(data.name ? data.name: user?.displayName, dataItem.data.data.url)
        console.log("name update")
      })
      .catch(err => console.log(err))
        }

        if(data.name){
          update(data.name, user.photoURL)
        }

      if(data.location){
        axios.put(`https://social-app-server-soliman-soad.vercel.app/api/users/${user.uid}`,{
        "city": data?.location ? data.location: user?.city,
        "uId": user.uid
    }
    )
    .then(data => {
      console.log(data)
      navigate("/profile")
    })
    .catch(err => {
      console.log(err);
    })
      }
      if(data.password){
        newPassword(data.password)
      }
    
    }
    
    return (
        <div>
            <div className="w-full h-screen p-8 flex flex-col md:flex-row  sm:space-x-6 ">
	<div className="w-5/12 max-h-screen">
		<img src={user?.profilePicture==="" ? profileImg :user?.photoURL } alt="" className="object-fit p-5 w-full h-full rounded dark:bg-gray-500" />
	</div>
	<div className="flex flex-col space-y-4">
		<div>
			<h2 className="text-2xl font-semibold">{user?.displayName}</h2>
		</div>
		<div className="space-y-1">
			<span className="flex items-center space-x-2">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-label="Email address" className="w-4 h-4">
					<path fill="currentColor" d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"></path>
				</svg>
				<span className="text-gray-700">{user?.email}</span>
			</span>
			
            <form onSubmit={handleSubmit(formSubmit)}>
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
            <input  defaultValue={user?.displayName} {...register("name")} className="w-full p-3 bg-gray-100 rounded-sm"/>
            {errors.exampleRequired && <span className="text-red-500">{errors.name.message}</span>}
          </div>

          <div className="mb-5">
            <label htmlFor="location" className="block mb-2 font-semibold">Location</label>
            <input defaultValue={userData?.city} {...register("location")} className="w-full p-3 bg-gray-100 rounded-sm"/>
            {errors.exampleRequired && <span className="text-red-500">{errors.location.message}</span>}
          </div>
          <div>
            <label htmlFor="img" className="block mb-2 font-semibold">Image </label>
            <input type="file" {...register("img")} className="w-full p-3 bg-gray-100 rounded-sm"/>
            {errors.exampleRequired && <span className="text-red-500">This field is required</span>}
          </div>
                  
          <input type="submit" className="btn bg-orange-600 rounded-sm  hover:bg-gray-900 ease-in-out duration-200 hover:border-orange-600 text-white w-full p-3 my-4 text-xl" defaultValue="Confirm"/>
        </form>
		</div>
	</div>
			</div>
        </div>
    );
};

export default Profile;