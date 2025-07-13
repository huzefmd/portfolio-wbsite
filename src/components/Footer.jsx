import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

function Footer() {
  const now = new Date();

  return (
    <footer className="w-full  text-white py-6 px-4  ">
      <div className="max-w-2xl  mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4   ">
        <p className="text-sm">
          &copy; {now.getDate()}/{now.getMonth() + 1}/{now.getFullYear()} <br />
          {now.getHours()}:{now.getMinutes().toString().padStart(2, "0")}
        </p>

        <div className="flex space-x-4">
          <a
            href="https://github.com/huzefmd"
            className="hover:underline hover:text-blue-500 hover:scale-110 transition-transform duration-300"
          >
            <FaGithub className="hover:text-blue-400 transition duration-300" />
          </a>
          <a
            href="https://x.com/MdHuzef1"
            className="hover:underline hover:text-blue-500 hover:scale-110 transition-transform duration-300"
          >
            <FaXTwitter className="hover:text-blue-300 transition duration-300" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-huzef-a606ba2a2/ "
            className="hover:underline hover:text-blue-500 hover:scale-110 transition-transform duration-300"
          >
            <FaLinkedin className="hover:text-blue-500 transition duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
