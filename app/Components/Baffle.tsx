"use client"
import React from 'react';
import BaffleReact from 'baffle-react';

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
  return (
    <BaffleReact
      text={text}
      className={className}
      revealDuration={duration}
      revealDelay={0}
      characters={characters}
      speed={obfuscationSpeed}
    />
  );
};

export default Baffle;
