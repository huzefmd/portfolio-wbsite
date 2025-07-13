import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  return (
    <div
      className="h-screen w-screen bg-neutral-950 flex md:flex-col flex-row items center justify-center text-white"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(128,128,128,0.2)  2px, transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App
