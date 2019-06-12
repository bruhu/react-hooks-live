import React, { useContext } from "react";

//create my Context
const NumberContext = React.useContext();

//create my Provider
export default function Context() {
  return (
    <NumberContext.Provider value={42}>
      <Display />
    </NumberContext.Provider>
  );
}

//use the Hook in the Consumer
function Display() {
  return <div>whot</div>;
}
