"use client";

import { useEffect, useRef } from "react";
import baffle from "baffle";

interface BaffleProps {
  text: string;
  className?: string;
}

const Baffle: React.FC<BaffleProps> = ({ text, className = "" }) => {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const b = baffle(textRef.current);
      b.set({
        characters: "!<>-_\\/[]{}—=+*^?#________",
        speed: 100,
      })
        .start()
        .reveal(2000);
    }
  }, []);

  return <span ref={textRef} className={className}>{text}</span>;
};

export default Baffle;
