import React from "react";
import ContactUsPage from "../../pages/contact-us";
import About from "../About/About";
import AppointmentCard from "../Cards/AppointmentCard";
import Procedures from "../Procedures/Procedures";

const HomeComponent: React.FC = () =>{
  return <>
    <AppointmentCard></AppointmentCard>
    <Procedures/>
    <About/>
    <ContactUsPage className='whitesmoke-bg'/>
  </>
}


export default HomeComponent;