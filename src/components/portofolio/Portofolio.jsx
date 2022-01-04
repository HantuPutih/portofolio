import "./portofolio.scss";
import PortofolioList from "../portofolioList/PotofolioList";

import {useEffect, useState} from "react";
import {
  webPortfolio,
  mobilePortfolio,
  github,
} from '../../data.js'

export default function Portofolio() {
  const [selected, setSelected] = useState('web');
  const [data, setData] = useState([]);
  const list = [
    {
      id: 'web',
      title: 'Web App'
    },
    {
      id: 'mobile',
      title: 'Mobile App'
    },
    {
      id: 'github',
      title: 'My Github'
    },
  ]

  const goToGithub = (e) => {
    e.preventDefault()
    if (selected == 'github') {
      window.open('https://github.com/HantuPutih', '_blank');

    }

  }

  useEffect(() => {
    switch (selected) {
      case 'web' :
        setData(webPortfolio)
        break;
      case 'mobile' :
        setData(mobilePortfolio)
        break;
      case 'github' :
        setData(github)
        break;
      default:
        setData(webPortfolio)
    }
  }, [selected])

  return (
    <div className="portofolio" id="portofolio">
      <h1>
        Portofolio
      </h1>
      <ul>
        {
          list.map((item ,idx ) => {
            return <PortofolioList
              id={item.id} key={idx}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
            />
          })
        }
      </ul>
      <div className="container">
        {data.map((d, idx) => {
          return (
              <div key={idx} className="item">
                <img
                  onClick={goToGithub}
                  src={d.img} alt=""/>
                <h3>{d.title}</h3>
              </div>
            )
        })}
      </div>
    </div>
  );
}
