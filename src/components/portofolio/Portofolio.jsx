import "./portofolio.scss";
import PortofolioList from "../portofolioList/PotofolioList";

export default function Portofolio() {
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
      id: 'featured',
      title: 'featured'
    },
    {
      id: 'branding',
      title: 'Branding'
    },
  ]

  return (
    <div className="portofolio" id="portofolio">
      <h1>
        Portofolio
      </h1>
      <ul>
        {/*<li className="active">Featured</li>*/}
        {/*<li>Web App</li>*/}
        {/*<li>Mobile App</li>*/}
        {/*<li>Design</li>*/}
        {/*<li>Branding</li>*/}
        {
          list.map(item => {
            return <PortofolioList title={item.title} />
          })
        }

      </ul>
      <div className="container">
        <div className="item">
          <img
            src="https://1.bp.blogspot.com/-HPeTAZw3ip8/XIG46d9HFwI/AAAAAAAAR0g/3VkKSjVbxcY2g-zR0HD7Mh3pKcoUlJ2KACLcBGAs/s1600/Pengertian%2Bdan%2BJenis%2BWebsite%2BBerdasarkan%2BFungsinya.jpg" alt=""/>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://1.bp.blogspot.com/-HPeTAZw3ip8/XIG46d9HFwI/AAAAAAAAR0g/3VkKSjVbxcY2g-zR0HD7Mh3pKcoUlJ2KACLcBGAs/s1600/Pengertian%2Bdan%2BJenis%2BWebsite%2BBerdasarkan%2BFungsinya.jpg" alt=""/>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://1.bp.blogspot.com/-HPeTAZw3ip8/XIG46d9HFwI/AAAAAAAAR0g/3VkKSjVbxcY2g-zR0HD7Mh3pKcoUlJ2KACLcBGAs/s1600/Pengertian%2Bdan%2BJenis%2BWebsite%2BBerdasarkan%2BFungsinya.jpg" alt=""/>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://1.bp.blogspot.com/-HPeTAZw3ip8/XIG46d9HFwI/AAAAAAAAR0g/3VkKSjVbxcY2g-zR0HD7Mh3pKcoUlJ2KACLcBGAs/s1600/Pengertian%2Bdan%2BJenis%2BWebsite%2BBerdasarkan%2BFungsinya.jpg" alt=""/>
          <h3>Banking App</h3>
        </div
        ><div className="item">
          <img
            src="https://1.bp.blogspot.com/-HPeTAZw3ip8/XIG46d9HFwI/AAAAAAAAR0g/3VkKSjVbxcY2g-zR0HD7Mh3pKcoUlJ2KACLcBGAs/s1600/Pengertian%2Bdan%2BJenis%2BWebsite%2BBerdasarkan%2BFungsinya.jpg" alt=""/>
          <h3>Banking App</h3>
        </div>
        <div className="item">
          <img
            src="https://1.bp.blogspot.com/-HPeTAZw3ip8/XIG46d9HFwI/AAAAAAAAR0g/3VkKSjVbxcY2g-zR0HD7Mh3pKcoUlJ2KACLcBGAs/s1600/Pengertian%2Bdan%2BJenis%2BWebsite%2BBerdasarkan%2BFungsinya.jpg" alt=""/>
          <h3>Banking App</h3>
        </div>
      </div>
    </div>
  );
}
