import React from "react";
import Experience from "./Experience";
import Projects from "./Projects";

function Home() {
  return (
    <div className="p-5 flex flex-col items-center justify-center gap-10">
      <Experience />  
      <Projects />
    </div>
  );
}

export default Home;
