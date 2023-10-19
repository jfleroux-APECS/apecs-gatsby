import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import {isMobile} from 'react-device-detect';

export default function SocialMedia(props) {
  const location = "https://www.asso-apecs.org/";
  if(isMobile) {
    return (
      <div className="container">
        <FacebookShareButton url={location} quote={props.title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={location} title={props.title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <LinkedinShareButton url={location} title={props.title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        <WhatsappShareButton url={location} title={props.title}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    );
  }
}
