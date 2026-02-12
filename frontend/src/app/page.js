"use client";

import { useState } from "react";
import { appConstants } from "@/utils/constants/app-constants";

import Link from "next/link";

const EnterAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="flex-column-relative center w-100"
      style={
        {
          /* backgroundColor: "#ffffff", */
        }
      }
    >
      <Link
        onMouseEnter={() => {
          setHovered(true);
        }}
        onMouseLeave={() => {
          setHovered(false);
        }}
        href="/"
        rel="noopener noreferrer"
        className="flex-column-relative w-100 text-center"
        style={{
          backgroundColor: hovered ? "#62f59bff" : "#ffffffff",
          width: "30vw",
          height: "10vw",
          borderRadius: "20vh",
          marginTop: "32px",
          fontSize: "350%",
          lineHeight: "10vw",
          color: "#5a6367ff",
          boxShadow: hovered
            ? "0 0 8px 4px #8cf4b4ff"
            : "0 0 4px 4px #636d70ff",
          transform: `scale(${hovered ? 1.05 : 1})`,
          transition: "transform 0.1s",
        }}
      >
        Enter
      </Link>
    </div>
  );
};

export default function Home() {
  return (
    <article
      className="flex-column-relative w-100 justify-start"
      style={{
        padding: "2vh 2vw",
        minHeight: `calc(100vh - ${appConstants.dimensions.header.height}px)`,
      }}
    >
      <div className="flex-column-relative w-100 align-center justify-start">
        {/*  <h1 className="text-center" style={{ marginTop: "20px" }}>
          Measure and{" "}
          <span style={{ fontFamily: '"Lilita One", sans-serif' }}>
            maximize
          </span>{" "}
          your drinking experience
        </h1> */}

        {/*  <EnterAppButton /> */}
      </div>
    </article>
  );
}
