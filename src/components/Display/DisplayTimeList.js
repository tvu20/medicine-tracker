import { useState, useEffect, useCallback } from 'react';

import './med-display.css';

const DisplayTimeList = props => {
  const { medList, time } = props;

  const [beforeItems, setBefore] = useState([]);
  const [afterItems, setAfter] = useState([]);

  const sortItems = useCallback(() => {
    console.log('sorting');

    for (const element of medList) {
      // if (element.dosages.)
      console.log(element);
    }

    // const before = medList.filter()
  }, [medList]);

  useEffect(sortItems);

  const renderItems = () => {
    return medList.map(med => {
      //   console.log(findTimeOfDay(med));
      return (
        <div key={med.id}>
          <h3>{med.name}</h3>
          <p>{med.use}</p>
          <p>Per day: {med.totalPerDay}</p>
        </div>
      );
    });
  };
  return (
    <div className={`med-display__container ${time}`}>{renderItems()}</div>
  );
};

export default DisplayTimeList;
