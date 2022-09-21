import Image from "next/image";
import React from "react";
import {
  PhoneOutlined, MailOutlined, WhatsAppOutlined
} from '@ant-design/icons';

const BookAppointment: React.FC = () => {
  return <div className="bookAppointment">
    <div className="photo">
      <div className="title">BOOK APPOINTMENT</div>
    </div>
    <div className="title">For Appointments</div>
    <div className="content">
      <div className="wrapper">
        <div className="phone">
          <PhoneOutlined /> <span>+91 6379256207</span>
        </div>
        <div className="phone whatsapp">
          <WhatsAppOutlined /> <span>+91 6379256207</span>
        </div>
        <div className="email">
          <MailOutlined /> <span>define.skinhair.clinic@gmail.com</span>
        </div>
      </div>
      <div className="communication wrapper">
      <div className="address">
          <div>Address:</div>
       <span>Define skin hair & laser clinic
No 2, 89, Poonamallee - Avadi High Rd, Ram Nagar, Township Area, TNHB Mig V Block, Avadi, Tamil Nadu 600054</span> 
        </div>
        <div className="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.850344624979!2d80.10620691513428!3d13.108665590766073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52636845264889%3A0xb72239b67cb38c34!2sDefine%20skin%20hair%20%26%20laser%20clinic!5e0!3m2!1sen!2sin!4v1663738471657!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  </div>
};

export default BookAppointment;
