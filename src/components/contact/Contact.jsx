import "./contact.scss";
import {useState} from "react";
import shake from '../../assets/shake.svg'
import {  Mail }  from "@material-ui/icons"
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
        <h2>Contact</h2>

        <h4><LinkedInIcon/> &nbsp; <a href="https://www.linkedin.com/in/farid-juliano/" target="_blank">LinkedIn</a></h4>
        <h4><GitHubIcon/> &nbsp; <a href="https://github.com/HantuPutih" target="_blank">HantuPutih</a></h4>
        <h4><Mail/>&nbsp; <a href="mailto:thanatos.juliano@gmail.com"> thanatos.juliano@gmail.com </a> </h4>
        <h4><PhoneIcon/> &nbsp; <a href="https://api.whatsapp.com/send?phone=6287889278098" target="_blank">+62 987-8927-8098</a> </h4>
        <h4><LocationOnIcon/> &nbsp; Jakarta Selatan, Indonesia</h4>
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
