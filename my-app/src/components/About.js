import "./About.css";
import resim1 from "../1.jpg";
import React, { Text } from "react";
import { educations } from "./data";

function About() {
  return (
    <div>
      <div className="cards">
        <div className="cards-content">
          <h2 className="a-text" style={{ marginLeft: "80px" }}>
            <strong> ABOUT ME</strong>
          </h2>
          <p
            className="a-text"
            style={{ marginLeft: "80px", paddingBottom: "50px" }}
          >
            Hi, <br /> Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            <br />
            Sed ultricies magna in diam sagittis pretium. Suspendisse dictum
            orci tortor, eget faucibus eros pretium ac. <br />
            Vivamus quis mauris ut nibh elementum congue quis vel arcu. <br />
            Donec id sagittis ligula. Duis maximus mi tortor, in pretium dui
            sodales iaculis..
          </p>
        </div>
        <div className="edu-card" style={{ backgroundColor: "#4e54c8" }}>
          <h2 style={{ marginLeft: "50px" }}>
            <strong> EDUCATION</strong>
          </h2>
          {educations.map((education) => (
            <a>
              <div className="vr">
                <div style={{ marginLeft: "50px" }}>
                  <h2>{education.name}</h2>
                  <h1>{education.endDate}</h1>
                  <p className="leading-relaxed">{education.startDate}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

/* 


import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center" style={{borderRadius:'20px'}}>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Reed.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          
        </div>
      </div>
    </section>
  );
}*/
