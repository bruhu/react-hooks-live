import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Context from "./components/ContextAPI";

export default function App() {
  return (
    <div className="App">
      {" "}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Context />{" "}
      </header>{" "}
    </div>
  );
}
