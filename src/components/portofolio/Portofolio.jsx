import "./portofolio.scss";
import PortofolioList from "../portofolioList/PotofolioList";
import {useEffect, useState} from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from '../../data.js'

export default function Portofolio() {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
  const list = [
    {
      id: 'featured',
      title: 'Featured'
    },
    {
      id: 'web',
      title: 'Web App'
    },
    {
      id: 'mobile',
      title: 'Mobile App'
    },
    {
      id: 'design',
      title: 'Design'
    },
    {
      id: 'content',
      title: 'Content'
    },
  ]

  useEffect(() => {
    switch (selected) {
      case 'featured' :
        setData(featuredPortfolio)
        break;
      case 'web' :
        setData(webPortfolio)
        break;
      case 'mobile' :
        setData(mobilePortfolio)
        break;
      case 'design' :
        setData(designPortfolio)
        break;
      case 'Content' :
        setData(contentPortfolio)
        break;
      default:
        setData(featuredPortfolio)
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
            return <PortofolioList id={item.id} key={idx} title={item.title} active={selected === item.id}
                                   setSelected={setSelected} />
          })
        }
      </ul>
      <div className="container">
        {data.map((d, idx) => {
          return (
              <div key={idx} className="item">
                <img
                  src={d.img} alt=""/>
                <h3>{d.title}</h3>
              </div>
            )
        })}
      </div>
    </div>
  );
}
