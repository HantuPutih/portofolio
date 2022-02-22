import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import down from "../../assets/down.png";
import man from "../../assets/man.png";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Front-End Engineer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          {/*  width="473" height="630" */}
          <img src={man} alt="farid's " />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I am</h2>
          <h1>Farid Juliano</h1>
          <h3>
            Fulltime <span ref={textRef}></span>
          </h3>
          <a href="#portofolio">
            <img src={down} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
