import React from "react";
import "./App.css";
import MenuBar from "./components/MenuBar";
import WelcomeMessage from "./components/WelcomeMessage";
import Items from "./components/Items";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <MenuBar />
      <WelcomeMessage />
      <Items />
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
}

export default App;
