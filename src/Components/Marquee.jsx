import React from "react";

const Marquee = () => {
  return (
    <div className="marquee marquee-decorator" aria-hidden="true">
      <div
        className="marquee-content"
        style={{ animation: "scroll 30s linear infinite" }}
      >
        <span>NIKE </span>
        <span>NIKE </span>
        <span>NIKE </span>
        <span>NIKE </span>
        <span>NIKE </span>
        <span>NIKE </span>
      </div>
      <div
        className="marquee-content"
        style={{ animation: "scroll 30s linear infinite" }}
      >
        <span>NIKE </span>
        <span>NIKE </span>
        <span>NIKE </span>
        <span>NIKE </span>
        <span>NIKE </span>
        <span>NIKE </span>
      </div>
    </div>
  );
};

export default Marquee;
