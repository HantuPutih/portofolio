import "./works.scss";
import {useState} from "react";
import arrow from '../../assets/arrow.png'
import mobile from '../../assets/mobile.png'
import globe from '../../assets/globe.png'
import writing from '../../assets/writing.png'

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
    id: "1",
    icon: globe,
    title: "Front End Development",
    desc:
      "I can develop your website front end using Vue or React",
    img:
      "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",

    },
    {
      id: "2",
      icon: mobile,
      title: "mobile Development",
      desc:
        "I can develop your mobile app using React Native",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",

    },
  ]

  const handleClick =(way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 1) :
      setCurrentSlide(currentSlide <data.length - 1 ?currentSlide + 1 : 0 )
  }

  return (
    <div className="works" id="works">
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map((d, i) => (

        <div key={i} className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="phone"/>
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img
                src={d.img}
                alt=""/>
            </div>
          </div>
        </div>
          ))
        }
      </div>
      <img src={arrow} className="arrow left" alt="" onClick={() => handleClick("left") }/>
      <img src={arrow} className="arrow right" alt="" onClick={() => handleClick("right") }/>
    </div>
  );
}
