import React from "react";
import { ADDRESS, CLINIC_NAME } from "../../constants/clinic-details";
import {
  BOOK_APPOINTMENT,
  FOR_APPOINTMENTS,
  REACH_US,
  ADDRESS_US,
} from "../../constants/appointment-contact";
import ContactHelper from "../Helper/ContactHelper";

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
          <ContactHelper displayMailTitle={true} />
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
