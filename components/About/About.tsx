import React from "react";
import { ABOUT_CONTENT, FUNCTIONING_DAYS, FUNCTIONING_TITLE, TITLE } from "../../constants/about";

const About: React.FC = () => {
    return <div className='about'>
        <div className='title'>{TITLE}</div>
        <div className='content'>
            <div className="photo">
                <img src="doctor-saranya.jpg" />
            </div>
            <div className='description'>{ABOUT_CONTENT}</div>
        </div>
        <div className='functioning'>
            <div className='functioningTitle'>{FUNCTIONING_TITLE}</div>
            <div className='functioningDays'>{
            FUNCTIONING_DAYS.map(day => (
            <div className={'wrapper'} key={day.key}>
                <span className={'day'}>{day.label}</span>
                <span className={'time'}>{day.value}</span> 
            </div> 
            ))
            }</div>
        </div>
    </div>
}


export default About;