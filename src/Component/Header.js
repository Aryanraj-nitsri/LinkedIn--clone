import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import SmsIcon from "@mui/icons-material/Sms";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Icons from "./Icons";
import AccountMenu from "./AccountMenu";
function Header() {
return (
    <div className="Header_container">
      <div className="header_leftpart">
        <div className="header_logo">
          <img
            src='../../logo.png.png'
            alt="network error"
          />
        </div>
        <div className="header_input">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header_rightpart">
        <Icons Logo={HomeIcon} title="Home" />
        <Icons Logo={GroupIcon} title="My Network" />
        <Icons Logo={WorkIcon} title="Jobs" />
        <Icons Logo={SmsIcon} title="Messaging" />
        <Icons Logo={NotificationsIcon} title="Notification" />
        <AccountMenu/>
      </div>
    </div>
  );
}
export default Header;
