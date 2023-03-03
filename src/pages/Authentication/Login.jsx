import React, { useContext } from "react";
import { FaEarlybirds } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useForm } from "react-hook-form";
import { ProfileContext } from "../../context/UserContext";

const Login = () => {
  const {user, setUser} = useContext(ProfileContext)
  const { register, handleSubmit, formState: { errors } } = useForm();  
  const formSubmit = data =>{
    console.log(data)
  }
  console.log(user);
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className="flex min-h-screen items-center max-w-screen-2xl mx-auto">
      <div className="max-w-[600px] bg-orange-600 text-white p-10 h-screen ">
      <Slider {...settings}>
          <div className="text-center mt-20">
            <img src="https://img.freepik.com/free-photo/silhouette-group-people-have-fun-top-mountain-near-tent-during-sunset_146671-18472.jpg?size=626&ext=jpg&uid=R81466279&ga=GA1.1.31902201.1666701009&semt=sph" alt="" className="w-96 mx-auto"/>
            <h3 className="text-2xl font-bold">Connect with the world</h3>
            <p>Build your connection with the world and make your friends</p>
          </div>
          <div className="text-center mt-20">
            <img src="https://img.freepik.com/free-photo/happy-young-people-giving-high-five-slapping-each-others-hand-congratulation-during-meeting-cafe-creative-entrepreneurs-informal-wear-laughing-celebrating-success-start-up-project_273609-662.jpg?size=626&ext=jpg&uid=R81466279&ga=GA1.1.31902201.1666701009&semt=sph" alt="" className="w-96 mx-auto"/>
            <h3 className="text-2xl font-bold">Power up your friendship</h3>
            <p>Friend ship is power, That thing can make your life full of adventure</p>
          </div>
          <div className="text-center mt-20">
            <img src="https://img.freepik.com/premium-photo/friends-friendship-fist-togetherness-concept_53876-60794.jpg?size=626&ext=jpg&uid=R81466279&ga=GA1.1.31902201.1666701009&semt=sph" alt="" className="w-96 mx-auto"  />
            <h3 className="text-2xl font-bold">Together is better</h3>
            <p>Connect with people around the world</p>
          </div>
        </Slider>
      </div>
      <div className="mx-auto h-screen p-5">
        <div className="flex items-center justify-center flex-col p-10">
          <h2 className="flex items-center text-4xl font-semibold mb-2 text-orange-600">
            <FaEarlybirds /> socia
          </h2>
          <p className="font-semibold ">Welcome to socia, a platform to connect with the social world</p>
        </div>
        <from onSubmit={handleSubmit(formSubmit)}>
        <div className="mb-5">
            <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
            <input placeholder="Enter your email" {...register("email", {required: true})} className="w-full p-3 bg-gray-100 rounded-sm"/>
            {errors.exampleRequired && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
            <input placeholder="Enter your password"  {...register("password", {required: true})} className="w-full p-3 bg-gray-100 rounded-sm"/>
            {errors.exampleRequired && <span className="text-red-500">{errors.password.message}</span>}
          </div>
          
          <button className="btn bg-orange-600 rounded-sm  hover:bg-gray-900 ease-in-out duration-200 hover:border-orange-600 text-white w-full p-3 my-4 text-xl">Log in </button>
          <p className="text-center font-medium">
            Don't have account? <a href="#" className="text-orange-600">sign up</a>
          </p>
        </from>
      </div>
    </div>
  );
};

export default Login;
