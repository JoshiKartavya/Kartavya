"use client"
import React, { useEffect, useRef, useState } from 'react';
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
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio only on client side
    setAudio(new Audio('/scifi.mp3'));
  }, []);

  useEffect(() => {
    if (elementRef.current) {
      const target = baffle(elementRef.current);
      target.set({
        characters: characters,
        speed: obfuscationSpeed
      });

      // Play sound when animation starts
      if (audio) {
        audio.currentTime = 0;
        audio.play().catch(err => console.log('Audio playback failed:', err));
      }

      target.start();
      target.reveal(duration);
    }
  }, [text, duration, obfuscationSpeed, characters, audio]);

  return (
    <div ref={elementRef} className={className}>
      {text}
    </div>
  );
};

export default Baffle;
