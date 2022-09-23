import React from "react";
import { ABOUT_CONTENT, FUNCTIONING_DAYS, FUNCTIONING_TITLE, TITLE } from "../../constants/about";
import Image from 'next/image'

const About: React.FC = () => {
    return <div className='about'>
        <div className='title'><span>{TITLE}</span></div>
        <div className='content'>
            <div className="photo">
                <Image alt="doctor photo" src="/doctor-saranya.jpg" width={'100%'} height={'110%'} layout='responsive' />
            </div>
            <div className='description'>{ABOUT_CONTENT}</div>
        </div>
        <div className='functioning'>
            <div className='functioningTitle'><span>{FUNCTIONING_TITLE}</span></div>
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