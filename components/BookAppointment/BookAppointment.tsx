import React from "react";
import {
  PhoneOutlined, MailOutlined, WhatsAppOutlined, PushpinOutlined
} from '@ant-design/icons';
import { ADDRESS, MAP, MOBILE, EMAIL } from "../../constants/clinic-details";

const BookAppointment: React.FC = () => {
  return <div className="bookAppointment">
    <div className="photo">
      <div className="title">BOOK APPOINTMENT</div>
    </div>
    <div className="title">For Appointments</div>
    <div className="content">
      <div className="wrapper">
        <div className="contact">Contact Us</div>
        <div className="address">
          <div><PushpinOutlined /><span>Address:</span></div>
          <span>{ADDRESS}</span> 
        </div>
        <div className="phone">
          <PhoneOutlined /> <span>{MOBILE}</span>
        </div>
        <div className="phone whatsapp">
          <WhatsAppOutlined /> <span>{MOBILE}</span>
        </div>
        <div className="email">
          <MailOutlined /> <span>{EMAIL}</span>
        </div>
      </div>
      <div className="communication wrapper">
        <div className="map">
          <iframe src={MAP} width="100%" height="450" style={{border:0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
};

export default BookAppointment;
