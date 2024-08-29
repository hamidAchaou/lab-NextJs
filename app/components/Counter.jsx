"use client";
import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <button onClick={() => setCounter((prev) => prev + 1)}>
        Clicked {counter} times
      </button>
    </>
  );
};

export default Counter;
