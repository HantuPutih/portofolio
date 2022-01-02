import "./contact.scss";
import {useState} from "react";
import shake from '../../assets/shake.svg'
import {  Mail }  from "@material-ui/icons"
// import PhoneIcon from '@mui/icons-material/Phone';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
      e.preventDefault();
    setMessage(true)
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={shake} alt=""/>
      </div>
      <div className="right">
        <h2>Contact.</h2>

        <h4><Mail/> thanatos.juliano@gmail.com </h4>
        {/*<h4> <PhoneIcon/> +62 987-8927-8098</h4>*/}
        {/*<h4> <LocationOnIcon/> Jakarta Selatan, Indonesia</h4>*/}
        {/*<form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email"/>
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span> Thanks, I will reply ASAP :)</span>}
        </form>*/}
      </div>
    </div>
  );
}
