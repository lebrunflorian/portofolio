import React, { useEffect } from "react";
import gsap from "gsap";

const homeAnimation = () => {
  const t1 = gsap.timeline();
  t1.from(".overlay", {
    height: "0%",
    ease: "expo.inOut",
    duration: 0.2,
    delay: 0,
  })
    .to(".overlay", {
      height: "100%",
      ease: "expo.inOut",
      duration: 0.2,
      delay: 0,
    })
    .to(".container-text", {
      opacity: "1",
      ease: "expo.inOut",
      duration: 0.5,
      delay: 1.5,
    });
};

export default function Work() {
  useEffect(() => {
    homeAnimation();
  }, []);

  return (
    <div className="menu container-text">
      <div className="menu__item">
        <a
          href="https://www.tourisme-sud-gironde.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="menu__item-link"
        >
          SudGironde
        </a>
        <img
          className="menu__item-img"
          src={require("../img/sud-gironde.jpg")}
          alt="Sud-Gironde"
        />
      </div>
      <div className="menu__item">
        <a
          href="https://www.entreautre.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="menu__item-link"
        >
          EntreAutre
        </a>
        <img
          className="menu__item-img"
          src={require("../img/entreautre.jpg")}
          alt="Entre Autre"
        />
      </div>
      <div className="menu__item">
        <a
          href="http://3024284f74.testurl.ws/web/"
          target="_blank"
          rel="noopener noreferrer"
          className="menu__item-link"
        >
          Pasquet
        </a>
        <img
          className="menu__item-img"
          src={require("../img/pasquet.jpg")}
          alt="Pasquet Menuiseries"
        />
      </div>
      <div className="menu__item">
        <a
          href="https://www.spinelite.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="menu__item-link"
        >
          SpinElite
        </a>
        <img
          className="menu__item-img"
          src={require("../img/spinelite.jpg")}
          alt="Spin Elite"
        />
      </div>
      <div className="menu__item">
        <a href="mailto:hello@lebrunflorian.info" className="menu__item-link">
          Contact me
        </a>
        <img
          className="menu__item-img"
          src={require("../img/5.jpg")}
          alt="Contact"
        />
      </div>
    </div>
  );
}
