import React, {FC} from 'react';
import Particles from "react-particles-js";

const ParticleBackground: FC = () => {
  return (
    <Particles
      style={{position: 'absolute'}}
      // height={document.body.scrollHeight.toString() + "px"}
      params={
      {
        particles: {
          number: {
            value: 10,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#13c2c2"
          },
          shape: {
            type: "polygon",
            stroke: {
              width: 0,
              color: "#000"
            },
            polygon: {
              nb_sides: 6
            },
            image: {
              src: "img/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.2,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 100,
            random: true,
            anim: {
              enable: true,
              speed: 10,
              size_min: 40,
              sync: true
            }
          },
          line_linked: {
            enable: false,
            distance: 200,
            color: "#ffffff",
            opacity: 1,
            width: 2
          },
          move: {
            enable: true,
            speed: 4,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: true,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: false,
              mode: "grab"
            },
            onclick: {
              enable: false,
              mode: "push"
            },
            resize: false
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true,
        config_demo: {
          hide_card: false,
          background_color: "#b61924",
          background_image: "",
          background_position: "50% 50%",
          background_repeat: "no-repeat",
          background_size: "cover"
        }
      }
    }/>
  );
}

export default ParticleBackground;
