import React from 'react';
import About from '../components/About/About';
import AppointmentCard from '../components/Cards/AppointmentCard';
import Procedures from '../components/Procedures/Procedures';
import ContactUsPage from './contact-us';

const HomePage = () => {
  return <><AppointmentCard/><Procedures/><About/><ContactUsPage className='whitesmoke-bg'/></>
}

export default HomePage;