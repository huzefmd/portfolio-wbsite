import React from "react";
import { TypewriterEffectSmooth } from './typewriter-effect.jsx'
function NavBar() {
  const words = [
    {
      text: "Flutter",
      
    },
    {
      text: "Developer",
      className: "text-blue-500 dark:text-blue-500 gap-2",
    },
  ];
  const words1 = [
    {
      text: "Web",
    },
    {
      text: "Developer",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="bg-[#000000] min-h-screen p-5 md:p-10 flex flex-col items-center justify-center gap-10 overflow-hidden">
      <div>
        <div>
          <h1>
            <span className="text-6xl text-gray-400 font-mono">Hi, Iam </span>
            <span className="text-8xl text-blue-500 font-serif ">
              Huzef dev
            </span>
          </h1>
          <div className="flex flex-row gap-30 mt-10">
            <p className="max-w-[25rem] text-sm px-2 md:px-2 mt-10  font-mono">
              Hi, I’m Md Huzef — a passionate Full-Stack Developer. With a
              strong foundation in the MERN stack and experience building
              dynamic web and mobile applications, I love solving real-world
              problems through clean, scalable code. I'm currently expanding my
              skills in Flutter for cross-platform development and always eager
              to learn and grow in the tech world.
            </p>
            <img
              src={"/images/profile (1).jpg"}
              alt="my pic"
              className=" w-50 h-50  rounded-full object-cover"
            />
          </div>
          <div className="mt-15">
            <span className="text-4xl text-gray-400 font-mono">Hi, am </span>
            <span className="text-5xl text-blue-500 flex flex-row gap-10  font-serif mt-5">
              {/* Flutter App Developer */}
              <TypewriterEffectSmooth words={words} />
              <img
                src={"images/flutter-icon-2048x2048-ufx4idi8.png"}
                alt="flutter"
                className=" bg-black w-15 h-15 rounded-full"
              />
              <img
                src={"images/Dart.png"}
                alt="flutter"
                className=" bg-black w-15 h-15 rounded-full"
              />
            </span>
            <span className="text-5xl text-blue-500 flex flex-row gap-10 mt-10 font-serif">
              <TypewriterEffectSmooth words={words1} />
              <img
                src={"/images/react-logo.png"}
                alt="flutter"
                className=" bg-black w-15 h-15 rounded-full"
              />
              <img
                src={"/images/t1.png"}
                alt="flutter"
                className=" bg-black w-15 h-15 rounded-full "
              />
              <img
                src={"/images/Node.js.png"}
                alt="flutter"
                className="  w-15 h-15 rounded-full "
              />
            </span>
            <hr className="mt-20  border-gray-300" />

            <div className="mt-10 flex flex-row gap-5 font-mono place-self-center">
              <h1>
                {" "}
                <span
                  className="text-3xl text-gray-400
              "
                >
                  My,
                </span>
                <span className="text-5xl font-serif text-blue-500">
                  Projects
                </span>
              </h1>
            </div>

            {/* <div className="mt-10">
              <button className="p-3 w-30 bg-blue-500 rounded-xl cursor-pointer">Resume </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
