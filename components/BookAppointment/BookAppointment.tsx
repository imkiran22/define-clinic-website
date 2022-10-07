import React from "react";
import {
  WhatsAppOutlined,
  MailOutlined,
  PhoneTwoTone,
} from "@ant-design/icons";
import {
  ADDRESS,
  MAP,
  MOBILE,
  EMAIL,
  CLINIC_NAME,
} from "../../constants/clinic-details";
import {
  BOOK_APPOINTMENT,
  FOR_APPOINTMENTS,
  MAIL_US,
  REACH_US,
  ADDRESS_US,
  WHATSAPP_LINK,
} from "../../constants/appointment-contact";

const BookAppointment: React.FC = () => {
  return (
    <div className="bookAppointment book">
      <div className="photo">
        <div className="title">
          <span>{BOOK_APPOINTMENT}</span>
        </div>
      </div>
      <div className="sub-title">{FOR_APPOINTMENTS}</div>
      <div className="content">
        <div className="wrapper">
          <div className="contact">
            <span>{REACH_US}</span>
          </div>
          <div className="phone cell">
            <a href={`tel:${MOBILE}`}>
              <PhoneTwoTone /> <span className="value">{MOBILE}</span>
            </a>
          </div>
          <div className="phone whatsapp">
            <a href={WHATSAPP_LINK} target="_blank">
              <WhatsAppOutlined />
              <span className="value whatsapp-val">{MOBILE}</span>
            </a>
          </div>
          <div className="email">
            <div>{MAIL_US}</div>
            <a href={`mailto:${EMAIL}`}>
              <MailOutlined />
              <span className="value email-val">{EMAIL}</span>
            </a>
          </div>
          <div className="address">
            <div>{ADDRESS_US}</div>
            <div className="name">{CLINIC_NAME}</div>
            <span>{ADDRESS}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
