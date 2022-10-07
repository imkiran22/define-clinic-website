import React from "react";
import {
  PhoneTwoTone,
  WhatsAppOutlined,
  MailOutlined,
} from "@ant-design/icons";
import {
  ADDRESS,
  MAP,
  MOBILE,
  EMAIL,
  CLINIC_NAME,
} from "../../constants/clinic-details";
import {
  CLINIC_ADDRESS,
  CONTACT_US,
  WHATSAPP_LINK,
} from "../../constants/appointment-contact";

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
        <div className="phone cell">
          <a href={`tel:${MOBILE}`} target="_blank" rel="noreferrer">
            <PhoneTwoTone /> <span className="value">{MOBILE}</span>
          </a>
        </div>
        <div className="phone whatsapp">
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <WhatsAppOutlined />
            <span className="value whatsapp-val">{MOBILE}</span>
          </a>
        </div>
        <div className="email">
          <a href={`mailto:${EMAIL}`} target="_blank" rel="noreferrer">
            <MailOutlined />
            <span className="value email-val">{EMAIL}</span>
          </a>
        </div>
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
