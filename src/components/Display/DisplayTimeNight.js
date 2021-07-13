import { useState, useEffect, useCallback } from 'react';

import MedItem from './MedItem';

import NightImage from '../../assets/stars.png';

import './med-display.css';

const DisplayTimeNight = props => {
  const { medList, time } = props;

  const capitalize = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const renderItems = () => {
    return medList.map(med => {
      return (
        <MedItem
          key={med.id}
          id={med.id}
          name={med.name}
          frequency={med.frequency}
          amount={med.dosages[0].amount}
          time={time}
        />
      );
    });
  };

  return (
    <div className={`med-display__container ${time}`}>
      <h2>{capitalize(props.time)}</h2>
      <span className='med-display__columns'>
        <section className='med-display__col left'>{renderItems()}</section>
        <section className='med-display__col'>
          <img
            className='med-display__night-image'
            src={NightImage}
            alt='night'
          />
        </section>
      </span>
    </div>
  );
};

export default DisplayTimeNight;
