"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Loader = () => {
    const today = new Date();
    const currentYear = today.getFullYear();

    const greeting = ['Hello', 'नमस्ते', 'Hola'];
    const kartavyaTop = `Kartavya Joshi @`;
    const kartavyaBottom = `${currentYear} Portfolio`;
    
    const greetingRef = useRef(null);
    const dotRef = useRef(null); // Ref for the dot

    useEffect(() => {
        const tl = gsap.timeline();

        // Ensure that the ref is not null before starting the animation
        if (greetingRef.current) {
            // Loop through the greeting array
            greeting.forEach((greet, index) => {
                tl.to(greetingRef.current, {
                    text: greet,
                    opacity: 1,
                    duration: 0.5,
                    delay: index === 0 ? 0 : 0.5, // No delay for the first greeting
                })
                .to(greetingRef.current, {
                    opacity: 0,
                    duration: 0.5,
                    delay: 1,
                });
            });

            // After the greetings, display the "kartavya" text
            tl.to(greetingRef.current, {
                opacity: 1,
                duration: 0.5,
                delay: 0.5,
                onStart: () => {
                    // Directly setting text without using innerHTML
                    greetingRef.current.innerHTML = `
                        <div>${kartavyaTop}</div>
                        <div>${kartavyaBottom}</div>
                    `;
                }
            })
            .to(greetingRef.current, {
                opacity: 0,
                duration: 0.5,
                delay: 0.5, // Wait before fading out kartavya
            })
            // Animate the dot
            .to(dotRef.current, {
                opacity: 1,
                duration: 0.5,
                delay: 0.5,
            })
            .to(dotRef.current, {
                width: '100%',
                height: '5px', // Initial height for the line
                duration: 1,
                onStart: () => {
                    // Removed borderRadius to keep it a straight line
                    dotRef.current.style.borderRadius = '0'; 
                }
            })
            .to(dotRef.current, {
                height: '100vh', // Expand height to fill the screen
                duration: 1,
            });
        }
    }, [kartavyaTop, kartavyaBottom]);

    return (
        <div className='loader h-screen w-screen bg-[--secondary] flex flex-col justify-center items-center text-center'>
            <h1 ref={greetingRef} className="opacity-0 text-7xl font-bold">
                {greeting[0]}
            </h1>
            <div
                ref={dotRef}
                className="bg-[--primary] w-0 h-0 opacity-0 transition-all duration-300" // Initially a dot
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '0', // Ensure no rounding for a straight line
                }}
            ></div>
        </div>
    );
}

export default Loader;
