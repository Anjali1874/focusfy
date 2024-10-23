import React from "react";
import RunningText from "./RunningText";
import About from "./About";

const quotes = [
  "Let your tomorrow thank your today.",
  "Success is not the key to happiness. Happiness is the key to success.",
  "Believe you can and you're halfway there.",
  "Your limitation—it's only your imagination.",
  "Push yourself, because no one else is going to do it for you."
];

function Home() {
  return (
      <div style={{
        display: "flex"
      }}>
      <div className="text-container h-86 mt-48">
        <RunningText quotes={quotes} speed={100} />
      </div>
      </div>
  );
}

export default Home;
