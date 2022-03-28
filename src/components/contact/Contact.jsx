import "./contact.scss";
// import {useState} from "react";
import shake from "../../assets/shake.svg";
import { Mail } from "@material-ui/icons";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <LazyLoadImage src={shake} alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>

        <h4>
          <LinkedInIcon /> &nbsp;{" "}
          <a
            href="https://www.linkedin.com/in/farid-juliano/ "
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
        </h4>
        <h4>
          <GitHubIcon /> &nbsp;{" "}
          <a
            href="https://github.com/HantuPutih"
            rel="noreferrer"
            target="_blank"
          >
            HantuPutih
          </a>
        </h4>
        <h4>
          <Mail />
          &nbsp;{" "}
          <a href="mailto:thanatos.juliano@gmail.com" rel="noreferrer">
            {" "}
            thanatos.juliano@gmail.com{" "}
          </a>{" "}
        </h4>
        <h4>
          <PhoneIcon /> &nbsp;{" "}
          <a
            href="https://api.whatsapp.com/send?phone=6285946890069"
            rel="noreferrer"
            target="_blank"
          >
            +62 859-4689-0069
          </a>{" "}
        </h4>
        <h4>
          <LocationOnIcon /> &nbsp; Jakarta Selatan, Indonesia
        </h4>
      </div>
    </div>
  );
}
