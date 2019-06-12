import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Context from "./components/ContextApi";
import ContextApiHook from "./components/ContextApiHook";
import ClassRef from "./components/ClassRef";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Context /> */}
        <ContextApiHook />
        <ClassRef />
      </header>
    </div>
  );
}
