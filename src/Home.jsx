import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import bgImg from "./assets/meeting.jpg";
import Navbar from "./components/Navbar";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaRegCopy } from "react-icons/fa";
import copy from "copy-to-clipboard";
import toast from "react-hot-toast";
import About from "./components/About";

const Home = () => {
  const navigate = useNavigate();
  const [RoomCode, SetRoomCode] = useState("");
  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  };
  
  const copyToClipbord = () => {
    let url = `${process.env.REACT_APP_BASE_URL}${RoomCode}`;
    copy(url);
    toast.success("url coppied successfully");
  };
  return (
    <div className="  ">
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <div className="relative pt-[2rem]  h-screen overflow-hidden max-h-[50rem] max-md:min-h-[35rem]  ">
        {/* Image */}
        <div className="absolute  w-full h-full flex overflow-hidden left-0 z-2  ">
          <img
            src={bgImg}
            alt="bgImage"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="AddCover "></div>
        {/* Hero infoo */}
        <div className="relative z-10 px-5 h-full flex flex-col justify-center max-md:text-[10px]  ">
          <div className=" ">
            <p className="text-[3em] text-white font-bold  ">
              <b className="text-blue-500">Sam</b>
              <u>Video Chat</u> <b className="text-blue-500">App</b>
            </p>
            <div className="text-[3em] -mt-2 text-white font-bold">
              With <b className="text-orange-500"> Sameer</b>
            </div>
          </div>
          <form
            action=""
            onSubmit={submitCode}
            className=" flex flex-col text-white justify-center mt-8 "
          >
            <label htmlFor="" className="font-bold text-[2em] pt-4 mb-3">
              Enter The Room Code
            </label>
            <input
              type="text"
              required
              placeholder="Enter Room Code"
              value={RoomCode}
              id=""
              onChange={(e) => SetRoomCode(e.target.value)}
              className="bg-blue-500 placeholder:text-white py-2 w-[16rem] rounded-full  text-center text-black focus:outline-none "
            />
            <div className="flex gap-2 ">
              <button
                type="button"
                className="bg-white flex items-center justify-center text-blue-500 font-bold w-[10rem]  rounded-full p-2 mt-4 align-center hover:text-white hover:bg-cyan-500 transition-all "
                onClick={copyToClipbord}
              >
                Copy Link <FaRegCopy />
              </button>
              <button
                type="submit"
                className="bg-white flex items-center justify-center  text-red-500 font-bold w-[10rem]  rounded-full p-2 mt-4 align-center hover:text-white hover:bg-red-500 transition-all "
              >
                GoTo Room <AiOutlineArrowRight />
              </button>
            </div>
          </form>
        </div>
      </div>
      <About />
    </div>
  );
};
export default Home;
