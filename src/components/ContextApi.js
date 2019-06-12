import React from "react";

const NumberContext = React.createContext();

export default function Context() {
  return (
    <NumberContext.Provider value={42}>
      <Display />
    </NumberContext.Provider>
  );
}

function Display() {
  return (
    <NumberContext.Consumer>
      {value => <div>The answer is {value} to everything!</div>}
    </NumberContext.Consumer>
  );
}
