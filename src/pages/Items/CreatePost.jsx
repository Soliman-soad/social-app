import React, { useContext, useEffect, useState } from "react";
import { IoMdPhotos } from "react-icons/io";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { ProfileContext } from "../../context/UserContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const {user} = useContext(ProfileContext);
  const [selectedFile, setSelectedFile] = useState();
  const [img, setImg] = useState();
  const [load, setLoad] = useState(false)
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();  
  const formSubmit = data =>{
    const postText = data.postText;
    if(data.img){
      const image = data.img[0];
    const formData = new FormData();
    formData.append("image",image);
    axios.post('https://api.imgbb.com/1/upload?key=89b36a1573d5114380d55398de49d11b', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
  })
  .then(data => {
    // ------------------------------
  if(data.data.data.url){
    setImg(data.data.data.url)
    axios.post('https://social-app-server-soliman-soad.vercel.app/api/post/',{
      userId: user?.uid,
      image: data.data.data.url,
      desc: postText ? postText : ''
    })
    .then(data=>navigate('/'))
    .catch(err => console.log(err))
  }
  // ------------------------------
  })
  .catch(err => console.log(err))
    }
    if(data.desc){
      axios.post('https://social-app-server-soliman-soad.vercel.app/api/post/',{
      userId: user?.uid,
      image: "",
      desc: postText ? postText : ''
    })
    .then(data=>navigate('/'))
    .catch(err => console.log(err))
    }
    setLoad(!load)
}
useEffect(()=>{
  if (!selectedFile) {
    setImg(undefined)
    return
}
const objectUrl = URL.createObjectURL(selectedFile)
setImg(objectUrl)
console.log(objectUrl)
   return () => URL.revokeObjectURL(objectUrl)
},[selectedFile], load)
const imgData =(e)=>{
  if (!e.target.files || e.target.files.length === 0) {
    setSelectedFile(undefined)
    return
}
setSelectedFile(e.target.files[0])
}
  return (
    <form onSubmit={handleSubmit(formSubmit)} className="bg-white p-5 rounded-lg m-1">
      <div className="flex ">
        <img
          src={user?.photoURL}
          alt=""
          className="rounded-full object-cover w-12 h-12"
        />
        <input  {...register("postText")} type="text" placeholder="What is your mind?" className="bg-gray-50 w-full boarder-none outline-none p-2 mx-5" />
      </div>
      <div>
        {
          selectedFile && <img src={img} alt="" className='max-w-lg mx-auto my-5'/>
        }
        
      </div>
      <div className="grid grid-cols-2 text-center gap-3">
        <div>
          <label htmlFor="img" className="flex items-center font-semibold p-3 m-2 justify-center bg-emerald-50 text-emerald-600 rounded-lg hover:text-white hover:bg-emerald-600">
            <input onInput={imgData}  {...register("img")} type="file" id="img" accept="image/png, image/jpg, image/gif, image/jpeg" className="hidden"/>
                <IoMdPhotos/>
                Image
          </label>
        </div>
        <div>
            <button type="submit" className="flex bg-blue-50 w-full justify-center items-center p-3 m-2 text-blue-600 font-semibold rounded-lg hover:text-white hover:bg-blue-500">
                <BsFillFileEarmarkPostFill/>
                Share
            </button>
        </div>
      </div>
    </form>
  );
};

export default CreatePost;
