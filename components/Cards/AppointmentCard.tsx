import { Card } from "antd";
import React from "react";
import Link from 'next/link';
import AppointmentCardStyles from './AppointmentCard.module.scss' 

const AppointmentCard: React.FC = () => (
  <div className={"site-card-border-less-wrapper " + AppointmentCardStyles.appointmentCard}>
    <Card className={AppointmentCardStyles.card}>
      <p className={AppointmentCardStyles.quote}>Filters are great, but great skin is better</p>
      <p className={AppointmentCardStyles.title}>
        <Link href={'/book-appointment'}>Book an appointment</Link>
      </p>
    </Card>
  </div>
);

export default AppointmentCard;
