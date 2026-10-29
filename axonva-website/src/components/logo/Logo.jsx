import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../styles/logo.css";

const shapes = {
  A: '<line x1="480" y1="372" x2="612" y2="598" stroke-width="150" stroke-linecap="round"/>',
  Blob:
    '<circle cx="362" cy="598" r="78" stroke="none"/><line x1="362" y1="598" x2="548" y2="600" stroke-width="104" stroke-linecap="round"/>',
  B: '<line x1="716" y1="372" x2="846" y2="602" stroke-width="150" stroke-linecap="round"/>',
  Dot: '<circle cx="922" cy="392" r="54" stroke="none"/>',
};

function createLogo(k) {
  const piece = (name, className, extra = "") => `
    <mask id="m${name}${k}" maskUnits="userSpaceOnUse"
      x="200" y="200" width="900" height="600">
      <g stroke="#fff" fill="#fff">${shapes[name]}</g>
    </mask>

    <g class="p ${className}">
      <g stroke="url(#g${k})" fill="url(#g${k})">
        ${shapes[name]}
      </g>
      ${extra}
      <g mask="url(#m${name}${k})" pointer-events="none">
        <rect x="200" y="290" width="900" height="400"
          fill="url(#gl${k})"/>
        <g class="shine">
          <rect x="-120" y="270" width="110" height="440"
            fill="url(#sh${k})" transform="skewX(-22)"/>
        </g>
      </g>
    </g>
  `;

  return `
    <defs>
      <linearGradient id="g${k}" gradientUnits="userSpaceOnUse"
        x1="400" y1="300" x2="860" y2="680">
        <stop offset="0" stop-color="#ffe83a"/>
        <stop offset=".22" stop-color="#ffa21f"/>
        <stop offset=".5" stop-color="#ff3b1d"/>
        <stop offset=".8" stop-color="#d40d0d"/>
        <stop offset="1" stop-color="#6a0716"/>
      </linearGradient>

      <linearGradient id="gl${k}" gradientUnits="userSpaceOnUse"
        x1="0" y1="290" x2="0" y2="690">
        <stop offset="0" stop-color="#fff" stop-opacity=".55"/>
        <stop offset=".35" stop-color="#fff" stop-opacity="0"/>
        <stop offset=".7" stop-color="#000" stop-opacity="0"/>
        <stop offset="1" stop-color="#1a0010" stop-opacity=".5"/>
      </linearGradient>

      <linearGradient id="sh${k}">
        <stop offset="0" stop-color="#fff" stop-opacity="0"/>
        <stop offset=".5" stop-color="#fff" stop-opacity=".85"/>
        <stop offset="1" stop-color="#fff" stop-opacity="0"/>
      </linearGradient>
    </defs>

    ${piece("A", "pA")}
    ${piece("Blob", "pBlob")}
    ${piece("B", "pB", '<circle cx="720" cy="380" r="40" fill="var(--hole)"/>')}
    ${piece("Dot", "dot")}
  `;
}

export function AnimatedLogo({ stacked = false, height = 44, className = "" }) {
  const logoRef = useRef(null);
  const tiltRef = useRef(null);

  useEffect(() => {
    const element = logoRef.current;
    const tilt = tiltRef.current;

    if (!element || !tilt) return;

    const handleMouseMove = (event) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      tilt.style.animation = "none";
      tilt.style.transform = `rotateY(${x * 38}deg) rotateX(${-y * 38}deg) scale(1.06)`;
    };

    const handleMouseLeave = () => {
      tilt.style.transform = "";
      tilt.style.animation = "";
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Link
      to="/"
      ref={logoRef}
      className={`axlogo${stacked ? " stacked" : ""} ${className}`}
      style={{ "--logo-h": `${height}px` }}
      aria-label="Axonva Ventures"
    >
      <div className="tilt" ref={tiltRef}>
        <svg
          viewBox="280 290 700 400"
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html: createLogo(stacked ? "b" : "n"),
          }}
        />
      </div>

      <span className="txt font-sora">
        <b>Axonva</b>
        <i>Ventures</i>
      </span>
    </Link>
  );
}

export default function Logo({ stacked = false, height = 44, className = "" }) {
  return <AnimatedLogo stacked={stacked} height={height} className={className} />;
}
