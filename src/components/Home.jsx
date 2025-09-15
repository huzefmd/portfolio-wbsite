import React from "react";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";

function Home() {
  return (
    <div className="p-5 flex flex-col items-center justify-center gap-10">
      <Experience />  
      <Projects />
      <Education/>
    </div>
  );
}

export default Home;
