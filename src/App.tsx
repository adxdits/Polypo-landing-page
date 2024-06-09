import React from "react";
import "./App.css";
import MenuBar from "./components/MenuBar";
import WelcomeMessage from "./components/WelcomeMessage";
import IntroMessage from "./components/IntroMessage";
import Items from "./components/Items";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <WelcomeMessage />
      <Items />
    </div>
  );
}

export default App;
