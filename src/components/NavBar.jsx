import React from "react";
import { TypewriterEffectSmooth } from "./typewriter-effect.jsx";

import Footer from "./Footer.jsx";
function NavBar() {
  const words = [
    {
      text: "App\u00A0",
      className: "text-3xl sm:text-5xl font-mono   ",
    },
    {
      text: "Developer",
      className: "text-blue-500 dark:text-blue-500 gap-2 text-3xl sm:text-5xl ",
    },
  ];
  const words1 = [
    {
      text: "Web\u00A0",
      className: "text-3xl sm:text-5xl font-mono  ",
    },
    {
      text: "Developer",
      className: "text-blue-500 dark:text-blue-500 text-3xl sm:text-5xl ",
    },
  ];
  return (
    <div className="  p-5  flex flex-col items-center justify-center gap-10 overflow-hidden ">
      <div>
        <div>
          <h1 className="text-center place-self-center justify-center ">
            <span className=" text-2xl md:text-6xl text-gray-400 font-mono text-center ">
              Hi, Iam{" "}
            </span>
            <span className=" text-4xl md:text-8xl text-blue-500 font-serif  ">
              Huzef dev
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-10 mt-10 sm:mt-5 items-center ">
            <img
              src="/images/profile (1).jpg"
              alt="my pic"
              className="w-40 h-40 sm:w-36 sm:h-36 rounded-full object-cover hover:scale-110 duration-1000 hover:shadow-gray-900 hover:shadow"
            />
            <p className="max-w-md sm:max-w-sm   h-auto overflow-hidden text-sm px-2 font-mono text-center sm:text-left ">
              <div className="flex items-center space-x-3 group ">
                <strong className="text-3xl text-blue-500">About</strong>
                <div className="w-3 h-3 border border-green-500 rounded-full animate-ping bg-green-500"></div>
              </div>
              <br />
              Hi, I’m Md Huzef — a passionate Full-Stack Developer. Flutter
              Developer, With a strong foundation in the MERN stack and
              experience building dynamic web and mobile applications, I love
              solving real-world problems through clean, scalable code. I'm
              currently expanding my skills in Flutter for cross-platform
              development and always eager to learn and grow in the tech world.
            </p>
          </div>
          <div className="mt-10 px-4 sm:px-10 w-full max-w-5xl mx-auto  rounded-lg">
            <div className="text-center sm:text-left">
              <span className="text-3xl sm:text-4xl text-gray-400 font-mono block">
                Hi, I am
              </span>
              <span className="text-3xl sm:text-5xl text-blue-500 flex flex-wrap gap-3 items-center justify-center sm:justify-start font-serif mt-5">
                <TypewriterEffectSmooth words={words1} />
                <img
                  src="/images/react-logo.png"
                  alt="react"
                  className="bg-black w-10 h-10 sm:w-14 sm:h-14 rounded-full"
                />
              </span>
            </div>

            <hr className=" border-gray-500 " />

          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
