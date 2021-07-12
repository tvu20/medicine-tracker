import { useState, useEffect, useCallback } from 'react';

import './med-display.css';

const DisplayTimeList = props => {
  const { medList, time } = props;

  const [beforeItems, setBefore] = useState([]);
  const [afterItems, setAfter] = useState([]);

  const sortItems = useCallback(() => {
    let before = [];
    let after = [];

    for (const element of medList) {
      let b = element.dosages.filter(e => e.meal === 'before');
      let a = element.dosages.filter(e => e.meal === 'after');

      if (b.length !== 0) {
        before.push({ ...element, amount: b[0].amount, dosages: null });
      }

      if (a.length !== 0) {
        after.push({ ...element, amount: a[0].amount, dosages: null });
      }
    }

    setBefore(before);
    setAfter(after);
  }, [medList]);

  useEffect(() => {
    sortItems();
  }, [sortItems]);

  const renderBeforeItems = () => {
    return beforeItems.map(med => {
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

  const renderAfterItems = () => {
    return afterItems.map(med => {
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
    <div className={`med-display__container ${time}`}>
      <h1>Before items</h1>
      {renderBeforeItems()}
      <h1>After items</h1>
      {renderAfterItems()}
    </div>
  );
};

export default DisplayTimeList;
