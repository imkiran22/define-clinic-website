import { Button } from 'antd';
import Card from 'antd/lib/card/Card';
import React from 'react';
import { PROCEDURES_LIST } from '../../constants/procedures';
import Styles from "./Procedures.module.scss";
import Image from 'next/image';

const Procedures = () => {
  return <div className={Styles.wrapper}><h3 className={Styles.title}>Our Services</h3>
  <div className={Styles.procedure}>
  {
    PROCEDURES_LIST.map(proc => (
        <Card className={Styles.card} key={proc.key}>
            <Image alt={proc.key} className={Styles.img} src={proc.img} width={'100%'} height={'75%'} layout="responsive"/>
            <div className='section'>
              <div className={Styles.subTitle}>{proc.label}</div>
              <div className={Styles.content}>{proc.content}</div>
              <div className={Styles.knowMore}><Button size='large' type='primary'>Know More</Button></div>
            </div>
        </Card>
      ))
  }
  </div>
  </div>
};

export default Procedures;