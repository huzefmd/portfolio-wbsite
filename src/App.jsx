import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="min-h-screen w-screen bg-neutral-950 text-white overflow-auto"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(128,128,128,0.2) 2px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <div className="flex flex-col md:flex-row items-center justify-center w-full  ">
        <NavBar />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center w-full  ">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
