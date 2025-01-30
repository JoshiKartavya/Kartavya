"use client"
import React, { useEffect, useRef } from 'react';
import baffle from 'baffle';

interface BaffleProps {
  text: string;
  className?: string;
  duration?: number;
  obfuscationSpeed?: number;
  characters?: string;
}

const Baffle: React.FC<BaffleProps> = ({
  text,
  className = '',
  duration = 1000,
  obfuscationSpeed = 50,
  characters = '!<>-_\\/[]{}—=+*^?#________'
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (elementRef.current) {
      const target = baffle(elementRef.current);
      target.set({
        characters: characters,
        speed: obfuscationSpeed
      });

      target.start();
      target.reveal(duration);
    }
  }, [text, duration, obfuscationSpeed, characters]);

  return (
    <div ref={elementRef} className={className}>
      {text}
    </div>
  );
};

export default Baffle;
