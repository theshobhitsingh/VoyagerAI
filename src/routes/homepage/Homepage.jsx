import { Link } from "react-router-dom";
import "./homepage.css";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import {Particles} from "react-tsparticles";  // Import Particles component
import { loadFull } from "tsparticles";   // Import for better particle configuration

const Homepage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

  // Particles setup function
  const particlesInit = async (main) => {
    await loadFull(main);  // Loading the full particle configuration
  };

  // Particle options configuration
  const particlesOptions = {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    particles: {
      number: {
        value: 100,  // Number of particles
        density: {
          enable: true,
          value_area: 800,
        },
      },
      shape: {
        type: "circle",  // Shape of particles
      },
      size: {
        value: 3,  // Size of the particles
      },
      links: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        outModes: {
          default: "out",
        },
      },
      opacity: {
        value: 0.5,
        random: true,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
        },
      },
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
  };

  return (
    <div className="homepage">
      {/* Particles background */}
      <Particles init={particlesInit} options={particlesOptions} />

      <img src="/orbital.png" alt="orbital" className="orbital" />
      <div className="left">
        <h1>VoyagerAI</h1>
        <h2>Building the ultimate AI from India 🚀</h2>
        {/* <h3>Building the ultimate AI from India 🚀</h3> */}
        <Link to="/dashboard" className="get-started-btn">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="bot" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt="human"
            />
            <TypeAnimation
              sequence={[
                "Human: We produce food for Mice",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: We produce food for Hamsters",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Human2: We produce food for Guinea Pigs",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Bot: We produce food for Chinchillas",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
