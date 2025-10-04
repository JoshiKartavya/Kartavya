"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Services = () => {
  const services = [
    { id: 1, title: "Web development", image: "/ser1.png" },
    { id: 2, title: "Web designing", image: "/ser2.png" },
    { id: 3, title: "SEO Improvement", image: "/ser3.png" },
    { id: 4, title: "Re-designing", image: "/ser4.png" },
  ];

  const formatTitle = (title: string) => {
    return title.split("").map((char, index) =>
      char.toLowerCase() === "e" ? (
        <span key={index} className="font-thin italic">
          {char}
        </span>
      ) : (
        char
      )
    );
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const titleElement = document.querySelector(".ser-title");
    if (titleElement) {
      const spans = titleElement.querySelectorAll("span");
      spans.forEach((span, index) => {
        gsap.to(span, {
          opacity: 1,
          scrollTrigger: {
            trigger: ".services-main",
            start: `top ${40 - index * 5}%`,
            end: `top ${30 - index * 5}%`,
            scrub: true,
            toggleActions: "play reverse play reverse",
          },
        });
      });
    }
  }, []);

  return (
    <div id="Experties" className="services-main h-max w-full bg-primary text-secondary">
      <div className="top w-full h-max md:h-max xl:h-[90vh] relative z-20">
        <div className="top-data w-full h-full relative flex flex-col justify-start pt-20 xl:pt-60 items-center">
          <h1 className="ser-title text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold w-4/5 xl:w-4/5 font-mono">
            My expertise help{" "}
            <span className="text-contrast font-thin opacity-50">
              businesses
            </span>{" "}
            to grow and also compete with their{" "}
            <span className="text-contrast font-thin opacity-50">
              competition
            </span>{" "}
            in the market.
          </h1>
        </div>
      </div>
      <div className="content flex flex-row w-full h-max">
        <div className="arrow hidden xl:block w-1/3 h-max px-8 xl:px-36 py-12 xl:py-24">
          <div className="arrow-img relative w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-44 aspect-square">
            <Image src="/arrow.svg" alt="arrow" fill />
          </div>
        </div>
        <div className="services h-max w-full xl:w-2/3 grid grid-cols-2 xl:grid-cols-2 gap-6 px-4 py-8 place-items-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="service w-full aspect-[232/337] relative cursor-pointer group"
            >
              <div className="service-image w-full h-full relative overflow-hidden rounded-lg">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  fill
                  priority
                />
                <div className="absolute bottom-3 left-3 px-3 py-2 rounded-lg w-4/5">
                  <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-6xl 2xl:text-7xl font-bold font-geist">
                    {formatTitle(service.title)}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
