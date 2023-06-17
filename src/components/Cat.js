import React, { Component } from "react";
import img from "./1.jpg";
export default function Cat({ x, y }) {
  return (
    <div>
      <img
        src={img}
        style={{
          left: x,
          top: y,
          position: "absolute",
          width: 300,
          height: 300,
        }}
        alt=""
      />
    </div>
  );
}
