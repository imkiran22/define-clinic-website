import React from "react";
import {
  WhatsAppOutlined,
  MailOutlined,
  PhoneTwoTone,
} from "@ant-design/icons";
import { MOBILE, EMAIL } from "../../constants/clinic-details";
import { MAIL_US, WHATSAPP_LINK } from "../../constants/appointment-contact";

const ContactHelper: React.FC<{ displayMailTitle?: boolean }> = ({
  displayMailTitle,
}) => {
  return (
    <>
      <div className="phone cell">
        <a href={`tel:${MOBILE}`} rel="noreferrer">
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
        {displayMailTitle && <div>{MAIL_US}</div>}
        <a href={`mailto:${EMAIL}`} rel="noreferrer">
          <MailOutlined />
          <span className="value email-val">{EMAIL}</span>
        </a>
      </div>
    </>
  );
};

export default ContactHelper;
