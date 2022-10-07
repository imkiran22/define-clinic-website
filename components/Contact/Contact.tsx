import React from "react";
import { ADDRESS, MAP, CLINIC_NAME } from "../../constants/clinic-details";
import {
  CLINIC_ADDRESS,
  CONTACT_US,
} from "../../constants/appointment-contact";
import ContactHelper from "../Helper/ContactHelper";

const Contact: React.FC = () => {
  return (
    <div className="content">
      <div className="wrapper">
        <div className="contact">
          <span>{CONTACT_US}</span>
        </div>
        <div className="address">
          <div>
            <span>{CLINIC_ADDRESS}</span>
          </div>
          <div className="name">{CLINIC_NAME}</div>
          <span>{ADDRESS}</span>
        </div>
        <ContactHelper />
      </div>
      <div className="communication wrapper">
        <div className="map">
          <iframe
            src={MAP}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
