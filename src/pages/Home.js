import React, { useEffect } from "react";
import gsap from "gsap";
import WebFont from "webfontloader";

const loadFonts = () => {
  const preloadFonts = () => {
    return new Promise((resolve, reject) => {
      WebFont.load({
        typekit: {
          id: "ofv7fvi",
        },
        active: resolve,
      });
    });
  };

  preloadFonts();
};

const homeAnimation = () => {
  const t1 = gsap.timeline();
  t1.to(".container-text", {
    opacity: "0",
    ease: "expo.inOut",
    duration: 0,
    delay: 0,
  })
    .from(".overlay", {
      height: "100%",
      ease: "expo.inOut",
      duration: 0,
      delay: 0,
    })
    .to(".overlay", {
      height: "0%",
      ease: "expo.inOut",
      duration: 0.2,
      delay: 0,
    });
};

export default function Home() {
  useEffect(() => {
    loadFonts();
    homeAnimation();
  }, []);

  return (
    <>
      <div className="content home">
        <div className="fold-content" id="base-content">
          <div className="content__line">
            <span className="type type--3">Freelance</span>
            <span className="type type--2">Developer</span>
            <span className="type type--1">from</span>
            <span className="type type--4">France</span>
            <span className="type type--5">Specialized</span>
            <span className="type type--6">in</span>
            <span className="type type--7">Frontend,</span>
            <span className="type type--8">WordPress</span>
            <span className="type type--8">and</span>
            <span className="type type--1">Interaction</span>
            <span className="type type--2">Contact</span>
            <span className="type type--3">me</span>
            <span className="type type--6">at</span>
            <span className="type type--3">
              <a href="mailto:hello@lebrunflorian.info">
                hello@lebrunflorian.info
              </a>
            </span>
            <span className="type type--2">to</span>
            <span className="type type--1">work</span>
            <span className="type type--6">on</span>
            <span className="type type--4">some</span>
            <span className="type type--5">fun</span>
            <span className="type type--6">projects</span>
          </div>
        </div>
        <div className="screen" id="fold-effect">
          <div className="wrapper-3d">
            <div className="fold fold-before"></div>
            <div className="fold fold-center"></div>
            <div className="fold fold-after"></div>
          </div>
        </div>
      </div>
    </>
  );
}
