import React, { useRef } from "react";

const RefHook = () => {
  const nameRef = useRef(null);

  const giveMeRefs = () => {
    const theRef = nameRef.current.value;
    console.log(theRef);
  };
  return (
    <div>
      <input ref={nameRef} defaultValue="default velue" />
      <button onClick={giveMeRefs}>Click me hook</button>
    </div>
  );
};

export default RefHook;
