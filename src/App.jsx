import RunningText from "./components/RunningText";
import React from "react";
import Navbar from "./components/Navbar";
import './App.css';

const quotes = [
  "Let your tomorrow thank your today.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Believe you can and you're halfway there.",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you."
];

function App() {
  return (
    <>
      <div className="bg-cover bg-center bg-fixed h-40" style={{ backgroundImage: "url('./bg.webp')" }}>
        <Navbar />
      </div>
      <div className="text-container h-96">
          <RunningText quotes={quotes} speed={100} />
        </div>
        <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start", // Aligns the content at the start of the flex container
        height: "100vh", // Full viewport height
        margin: "0px auto", 
      }}
    >
      <button className="ms-20 bg-yellow-500 text-xl">Let's get started</button>
    </div>
    </>
  );
}

export default App;