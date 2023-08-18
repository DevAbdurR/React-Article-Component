import React from "react";
import avatar from "../assets/images/avatar-michelle.jpg";
import { ReactComponent as ShareLogo } from "../assets/images/icon-share.svg";
import { ReactComponent as Facebook } from "../assets/images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../assets/images/icon-twitter.svg";
import { ReactComponent as Pinterest } from "../assets/images/icon-pinterest.svg";
import { Tooltip } from "@mui/material";

function ShareSection() {
  return (
    <div className="share-container">
      <img src={avatar} alt="avatar" />
      <div className="avatar-details">
        <h4 className="text-dark">Michelle Appleton</h4>
        <p className="text-light">28 Jun 2020</p>
      </div>
      <Tooltip
        arrow
        placement="top"
        title={
          <div className="tooltip">
            <p>SHARE</p>
            <Facebook className="cursor-pointer" />
            <Twitter className="cursor-pointer" />
            <Pinterest className="cursor-pointer" />
          </div>
        }
      >
        <div className="share-logo">
          <ShareLogo />
        </div>
      </Tooltip>
    </div>
  );
}

export default ShareSection;
