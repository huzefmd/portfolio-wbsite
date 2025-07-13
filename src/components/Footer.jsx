import React from "react";

function Footer() {
  const now = new Date();

  return (
    <footer className="w-full  text-white py-6 px-4">
      <div className="max-w-6xl  mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
        <p className="text-sm">
          &copy; {now.getDate()}/{now.getMonth() + 1}/{now.getFullYear()} <br />
          {now.getHours()}:{now.getMinutes().toString().padStart(2, "0")}
        </p>

        <div className="flex space-x-4">
          <a
            href="#"
            className="hover:underline hover:text-blue-500 hover:scale-110 transition-transform duration-300"
          >
            Github
          </a>
          <a
            href="#"
            className="hover:underline hover:text-blue-500 hover:scale-110 transition-transform duration-300"
          >
            X
          </a>
          <a
            href="#"
            className="hover:underline hover:text-blue-500 hover:scale-110 transition-transform duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
