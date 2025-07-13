import React from 'react'

function Footer() {
  function cureentTime() {
    time=new Date().getTime()
  }
  return (
    <footer className=" text-white  flex items-center justify-center md:flex-col flex-row ">
      <div className=" flex justify-between w-3xl py-7 px-8 items-center  ">
        <p className="text-sm ">
          &copy;{new Date().getDate()} / {new Date().getMonth()} /{" "}
          {new Date().getFullYear()}
          <br />
          {new Date().getHours()} : {new Date().getMinutes()}
        </p>

        <div className="flex space-x-4 mt-2 md:mt-0">
          <a
            href="#"
            className="hover:underline hover:text-blue-500  hover:scale-110 transition-transform duration-300"
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
            className="hover:underline hover:text-blue-500 hover:scale-110 transition-transform duration-300 "
          >
            Linked In
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer
