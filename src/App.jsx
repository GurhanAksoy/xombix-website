import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Whitepaper from "./Whitepaper";
import XombixAnthem from "./XombixAnthem";

function App() {
  return (
    <div>
      <audio src="/xombix.mp3" autoPlay loop muted style={{ display: "none" }}></audio>
      <Navbar />
      <Home />
      <Whitepaper />
      <XombixAnthem />
    </div>
  );
}

export default App;
