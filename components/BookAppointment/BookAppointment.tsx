import React from "react";
import Contact from "../Contact/Contact";

const BookAppointment: React.FC = () => {
  return (
    <div className="bookAppointment">
      <div className="photo">
        <div className="title">
          <span>BOOK APPOINTMENT</span>
        </div>
      </div>
      <div className="sub-title">For Appointments</div>
      <Contact/>
    </div>
  );
};

export default BookAppointment;
