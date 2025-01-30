import React, { useEffect, useRef } from 'react';

const BookCall = () => {
  const circleTextRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const animate = () => {
      if (circleTextRef.current) {
        const parent = circleTextRef.current;
        const currentRotation = parseFloat(parent.getAttribute('transform')?.split('rotate(')[1] || '0');
        parent.setAttribute('transform', `rotate(${(currentRotation + 0.5) % 360})`);
      }
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 cursor-pointer hover:scale-105 transition-transform">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <path
            id="circle"
            d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          />
        </defs>
        
        <g ref={circleTextRef}>
          <text className="text-secondary fill-current text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] xl:text-[1.2rem]">
            <textPath href="#circle" textLength="230">
              BOOK A CALL • BOOK A CALL •
            </textPath>
          </text>
        </g>

        {/* Static Arrow in center */}
        <g transform="translate(50,50)" className="fill-secondary">
          <path 
            d="M-10,-5 L0,-5 L0,-10 L10,0 L0,10 L0,5 L-10,5 Z"
            className="fill-current"
          />
        </g>
      </svg>
    </div>
  );
};

export default BookCall;
