import React from "react";
import { Link } from "react-router-dom";
import images from "../../constant/images"
import PictureButton from "../pictureButton/PictureButton"
const Navbar = () => {
  return (<>
     <nav className="bg-black flex flex-row w-full border-t sm:border-t-0 sm:border-r border-gray-500 sm:h-screen justify-around items-center sm:items-start bottom-0 absolute sm:top-0 sm:left-0 sm:relative sm:flex-col sm:w-24 lg:w-72 sm:p-5">
      <Link to='/'>
        <div className="hidden sm:inline-flex flex-row p-3 m-2 cursor-pointer sm:m-0 sm:mb-3 w-12  hover:bg-slate-900 bg-opacity-5 rounded-full">
          <img src={images.logo} alt="logo" draggable='false' />
        </div>
      </Link>
      <Link to='/home'>
       <div className="inline-flex flex-row p-3 m-2 sm:m-0 cursor-pointer sm:mb-3 w-12 lg:w-auto hover:bg-slate-900 bg-opacity-5 rounded-full">
         <img src={images.home} alt='home' />
         <span className="text-white mx-3 font-semibold text-lg hidden lg:block">Home</span>
       </div>
       </Link>
       <Link to='/search'>
       <div className="inline-flex flex-row p-3 m-2 cursor-pointer sm:m-0 sm:mb-3  w-12 lg:w-auto hover:bg-slate-900 bg-opacity-5 rounded-full">
         <img src={images.explorer} alt='explorer' className="hidden sm:block" />
         <img src={images.search} alt='search' className=" block sm:hidden" />
         <span className="text-white mx-3 font-semibold text-lg  hidden lg:block">Explorer</span>
       </div>
       </Link>
       <Link to='/notifications'>
       <div className="inline-flex flex-row p-3 m-2 cursor-pointer sm:m-0 sm:mb-3  w-12 lg:w-auto hover:bg-slate-900 bg-opacity-5 rounded-full">
         <img src={images.notifications} alt='notifications' />
         <span className="text-white mx-3 font-semibold text-lg  hidden lg:block">Notifications</span>
       </div>
       </Link>
       <Link to='/messages'>
          <div className="inline-flex flex-row p-3 m-2 cursor-pointer sm:m-0 sm:mb-3  w-12 lg:w-auto hover:bg-slate-900 bg-opacity-5 rounded-full">
            <img src={images.message} alt='message' />
            <span className="text-white mx-3 font-semibold text-lg  hidden lg:block">Messages</span>
          </div>
       </Link>

       <Link to='/bookmark'>
       <div className=" flex-row hidden  sm:inline-flex cursor-pointer sm:p-3 sm:mb-3  sm:w-12 lg:w-auto hover:bg-slate-900 bg-opacity-5 rounded-full">
         <img src={images.bookmark} alt='bookmark' />
         <span className="text-white mx-3 font-semibold text-lg  hidden lg:block">Bookmark</span>
       </div>
       </Link>
       <Link to='/list'>
       <div className=" flex-row hidden  sm:inline-flex cursor-pointer sm:p-3 sm:mb-3  sm:w-12 lg:w-auto hover:bg-slate-900 bg-opacity-5 rounded-full">
         <img src={images.list} alt='list' />
         <span className="text-white mx-3 font-semibold text-lg  hidden lg:block">List</span>
       </div>
       </Link>
       <Link to='/profil'>
       <div className=" flex-row hidden  sm:inline-flex cursor-pointer sm:p-3 sm:mb-3  sm:w-12 lg:w-auto hover:bg-slate-900 bg-opacity-5 rounded-full">
         <img src={images.profil} alt='profil' />
         <span className="text-white mx-3 font-semibold text-lg  hidden lg:block">Profil</span>
       </div>
       </Link>
       <Link to='/more'>
       <div className=" flex-row hidden  sm:inline-flex cursor-pointer sm:p-3 sm:mb-3  sm:w-12 lg:w-auto hover:bg-slate-900 bg-opacity-5 rounded-full">
         <img src={images.more} alt='more' />
         <span className="text-white mx-3 font-semibold text-lg  hidden lg:block">More</span>
       </div>
       </Link>
       <Link to='/tweet'>
       <div className=" flex-row hidden  sm:inline-flex cursor-pointer sm:p-3 sm:mb-3 sm:w-12 lg:w-auto justify-center hover:bg-blue-600 bg-blue-500  rounded-full">
        <img src={images.explorer} alt='tweet' />
        <span className="text-white mx-3 font-semibold text-lg  hidden lg:block">Tweet</span>
       </div>
       </Link>
      <div className="hidden sm:flex h-80 justify-center items-end">
        <PictureButton />
      </div>
     </nav>
     </>
  )
};

export default Navbar;
