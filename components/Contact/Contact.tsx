import React from "react";
import {
  PhoneOutlined,
  MailOutlined,
  WhatsAppOutlined,
  PushpinOutlined,
} from "@ant-design/icons";
import {
  ADDRESS,
  MAP,
  MOBILE,
  EMAIL,
  CLINIC_NAME,
} from "../../constants/clinic-details";

const Contact: React.FC = () => {
  return (
    <div className="content">
        <div className="wrapper">
          <div className="contact">
            <span>Contact Us </span>
          </div>
          <div className="address">
            <div>
              <PushpinOutlined />
              <span>Address:</span>
            </div>
            <div className="name">{CLINIC_NAME}</div>
            <span>{ADDRESS}</span>
          </div>
          <div className="phone">
            <PhoneOutlined /> <span className="value">{MOBILE}</span>
          </div>
          <div className="phone whatsapp">
            <WhatsAppOutlined /> <span className="value">{MOBILE}</span>
          </div>
          <div className="email">
            <MailOutlined /> <span className="value">{EMAIL}</span>
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
