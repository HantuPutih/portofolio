import "./topbar.scss";

import ContactMailIcon from "@mui/icons-material/ContactMail";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Logo
          </a>
          <div className="itemContainer">
            <ContactMailIcon />
          </div>
        </div>
        <div className="right">this is right</div>
      </div>
    </div>
  );
}
