import React, { useContext,  useState } from "react";
import { FaEarlybirds } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ProfileContext } from "../../context/UserContext";
import Spinner from "../Items/Spinner";

const Register = () => {
  const {registerUser,changeProfile}=useContext(ProfileContext)
  const[errorMessage, setErrorMessage] = useState(null)
  const [loadPage, setLoadPage] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();  
  const update = (name,img) =>{
    changeProfile(name,img)
    .then(()=>{})
    .catch(error => console.log(error))
}
  const formSubmit = data =>{
    setLoadPage(true)
    const email = data.email;
  const password = data.password;
  const name =data.name;
    const image = data.img[0];
    const formData = new FormData();
    formData.append("image",image);
    axios.post(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
  })
  .then(data => {
    // ------------------------------
  if(data.data.data.url){
    registerUser(email,password)
  .then(result => {
      const user = result.user;
      update(name,data.data.data.url);
      changeProfile(name,data.data.data.url)
    .then(()=>{
      axios.post("https://social-app-server-soliman-soad.vercel.app/api/auth/register",{
        singleUserData: user,
    "uId": user.uid,
    "city": data.location
},
{
  headers: {
    'Content-Type': 'application/json'
  }
}
)
.then(data => {
  console.log(data);
  navigate("/");
  setLoadPage(false)
})
.catch(err => {
  console.log(err);
  setLoadPage(false)
  setErrorMessage("Email has been already used");
})    
    })
    .catch(error => console.log(error))
      
  })
  .catch(error => {
      console.error(error);
      setErrorMessage(error.message);
  })
  }
  // ------------------------------
  })
  .catch(err => console.log(err))
 
  

}
  
  const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      if(loadPage){
        return <Spinner/>
      }

  return (
    <div className="lg:grid grid-cols-2 min-h-screen h-full items-center max-w-screen-2xl mx-auto bg-orange-600 mx-auto">
      <div className="max-w-[600px] bg-orange-600 text-white p-10 my-auto hidden md:block mx-auto hidden lg:block">
      <Slider {...settings}>
          <div className="text-center mt-16">
            <img src="https://img.freepik.com/free-photo/silhouette-group-people-have-fun-top-mountain-near-tent-during-sunset_146671-18472.jpg?size=626&ext=jpg&uid=R81466279&ga=GA1.1.31902201.1666701009&semt=sph" alt="" className="w-11/12 mx-auto rounded-lg"/>
            <h3 className="text-2xl font-bold">Connect with the world</h3>
            <p>Build your connection with the world and make your friends</p>
          </div>
          <div className="text-center mt-16">
            <img src="https://img.freepik.com/free-photo/happy-young-people-giving-high-five-slapping-each-others-hand-congratulation-during-meeting-cafe-creative-entrepreneurs-informal-wear-laughing-celebrating-success-start-up-project_273609-662.jpg?size=626&ext=jpg&uid=R81466279&ga=GA1.1.31902201.1666701009&semt=sph" alt="" className="w-11/12 mx-auto rounded-lg"/>
            <h3 className="text-2xl font-bold">Power up your friendship</h3>
            <p>Friend ship is power, That thing can make your life full of adventure</p>
          </div>
          <div className="text-center mt-16">
            <img src="https://img.freepik.com/premium-photo/friends-friendship-fist-togetherness-concept_53876-60794.jpg?size=626&ext=jpg&uid=R81466279&ga=GA1.1.31902201.1666701009&semt=sph" alt="" className="w-10/12 mx-auto rounded-lg"  />
            <h3 className="text-2xl font-bold">Together is better</h3>
            <p>Connect with people around the world</p>
          </div>
        </Slider>
      </div>
      <div className="mx-auto p-5 bg-white">
        <div className="flex items-center justify-center flex-col p-10">
          <h2 className="flex items-center text-4xl font-semibold mb-2 text-orange-600">
            <FaEarlybirds /> socia
          </h2>
          <p className="font-semibold ">Register to socia, a platform to connect with the social world</p>
        </div>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
            <input placeholder="Enter your name" {...register("name", {required: true})} className="w-full p-3 bg-gray-100 rounded-sm"/>
            {errors.exampleRequired && <span className="text-red-500">{errors.name.message}</span>}
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
            <input placeholder="Enter your email" {...register("email", {required: true})} className="w-full p-3 bg-gray-100 rounded-sm"/>
            {errors.exampleRequired && <span className="text-red-500">{errors.email.message}</span>}
            {
          errorMessage ? <p className="text-red-500 text-sm">{errorMessage}</p>:<p></p>
        }
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 font-semibold">Password</label>
            <input placeholder="Enter your password" type="password" {...register("password", {required: true})} className="w-full p-3 bg-gray-100 rounded-sm"/>
            {errors.exampleRequired && <span className="text-red-500">{errors.password.message}</span>}
          </div>
          <div className="mb-5">
            <label htmlFor="location" className="block mb-2 font-semibold">Location</label>
            <input placeholder="Enter your location" {...register("location", {required: true})} className="w-full p-3 bg-gray-100 rounded-sm"/>
            {errors.exampleRequired && <span className="text-red-500">{errors.location.message}</span>}
          </div>
          <div>
            <label htmlFor="img" className="block mb-2 font-semibold">Image </label>
            <input type="file" {...register("img", {required: true})} accept="image/png, image/jpg, image/gif, image/jpeg" className="w-full p-3 bg-gray-100 rounded-sm"/>
            {errors.exampleRequired && <span className="text-red-500">This field is required</span>}
          </div>
                  
          <input type="submit" className="btn bg-orange-600 rounded-sm  hover:bg-gray-900 ease-in-out duration-200 hover:border-orange-600 text-white w-full p-3 my-4 text-xl" defaultValue="Register"/>
          <p className="text-center font-medium">
            Already have account? <Link to="/login" className="text-orange-600">sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
