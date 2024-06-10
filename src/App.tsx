import React from "react";
import "./App.css";
import MenuBar from "./components/MenuBar";
import WelcomeMessage from "./components/WelcomeMessage";
import Items from "./components/Items";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <div className="MenuBar">
        <MenuBar />
      </div>
      <div className="MainContent">
        <WelcomeMessage />
        <div className="ItemsContainer">
          <Items />
        </div>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
