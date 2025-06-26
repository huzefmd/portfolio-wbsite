import React from 'react'

function Footer() {
  return (
    <footer className="bg-blue-500  place-self-center text-white p-5  items-center justify-center gap-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-10">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Huzef Portfolio. All rights
          reserved
        </p>

        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Github
          </a>
          <a href="#" className="hover:underline">
            X
          </a>
          <a href="#" className="hover:underline">
            Linked In
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer
