import React from "react";

import BannerImage1 from "../assets/meeting.jpg";
import BannerImage2 from "../assets/meeting.jpg";
import BannerImage3 from "../assets/meeting.jpg";
// import ReviewSlider from "../components/Common/ReviewSlider"
// import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
// import Quote from "../components/core/AboutPage/Quote"

const About = () => {
  return (
    <>
      <section className="bg-blue-500">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            {/* Driving Innovation in Online Education for a
            <HighlightText text={"Brighter Future"} /> */}
            <h1 className="text-cyan-500 text-[30px] bg-white">About us</h1>
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              Welcome to SamVideo Chat Web App, your premier destination for seamless
              video communication. At SamVideo, we understand the power of
              face-to-face connections in today's digital world. Our mission is
              to bring people closer, no matter the distance. With cutting-edge
              technology and a user-friendly interface, we provide a secure and
              enjoyable video chat experience. Whether you're connecting with
              friends and family or collaborating with colleagues and clients,
              our platform offers crystal-clear video and audio quality. Our
              team is dedicated to your privacy and security, ensuring your
              conversations remain confidential. We're committed to constant
              innovation, striving to make your video chats better with each
              update. Join us at SamVideo and experience the future of
              video communication. Connect, collaborate, and create memories
              with ease.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img src={"https://media.istockphoto.com/id/1333547908/photo/smiling-woman-have-webcam-online-meeting-on-computer.webp?b=1&s=612x612&w=0&k=20&c=pWzjgZAinh3rQiO-az6olDKnJx_uhXDACnecDi6fDGA="} alt="" />
            <img src={"https://cdn.pixabay.com/photo/2020/04/18/16/21/online-5059828_1280.jpg"} alt="" />
            <img src={"https://cdn.pixabay.com/photo/2020/12/09/10/34/meeting-5817031_1280.jpg"} alt="" />
          </div>
        </div>
      </section>

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          {/* <Quote /> */}
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              In the digital landscape of 2023, two visionary friends, Sameer and Sam, embarked on a journey to revolutionize human connection. Frustrated by the limitations of text-based communication, they yearned for a more immersive way to bridge distances and strengthen relationships. Fuelled by passion, they founded "SamVideoChat".
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              Their mission was clear: bring people closer through video chat, transcending borders and fostering genuine connections. With relentless dedication, they gathered a diverse team of developers, designers, and dreamers. Countless sleepless nights led to the birth of ChatWave, a user-friendly, secure platform offering seamless video interactions.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              Since its launch, SamVideo Chat has transformed countless lives, connecting loved ones, enabling remote work, and sparking new friendships worldwide. Its foundation story remains a testament to the power of innovation and human connection.
              </p>
            </div>

            <div className="max-w-[40rem]">
              <img
                src={"https://cdn.pixabay.com/photo/2020/05/28/14/21/home-office-5231389_1280.jpg"}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767] overflow-hidden"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              Our vision for the video chat website is to create a seamless and immersive online communication platform. We aim to foster connections, transcending distances, by providing high-quality, secure, and user-friendly video chat experiences that enhance personal and professional relationships.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
                Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              Our mission is to connect people worldwide through seamless, secure, and user-friendly video chat experiences. We aim to foster meaningful connections, promote communication, and bridge distances, making virtual interactions as rich and fulfilling as face-to-face encounters.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
