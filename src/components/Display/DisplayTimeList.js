import { useState, useEffect, useCallback } from 'react';

import MedItem from './MedItem';

import './med-display.css';

const DisplayTimeList = props => {
  const { medList, time } = props;

  const [beforeItems, setBefore] = useState([]);
  const [afterItems, setAfter] = useState([]);

  const capitalize = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

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
        <MedItem
          key={med.id}
          id={med.id}
          name={med.name}
          frequency={med.frequency}
          amount={med.amount}
          time={time}
        />
      );
    });
  };

  const renderAfterItems = () => {
    return afterItems.map(med => {
      //   console.log(findTimeOfDay(med));
      return (
        <MedItem
          key={med.id}
          id={med.id}
          name={med.name}
          frequency={med.frequency}
          amount={med.amount}
          time={time}
        />
      );
    });
  };

  return (
    <div className={`med-display__container ${time}`}>
      <h2>{capitalize(props.time)}</h2>
      <span className='med-display__columns'>
        <section className='med-display__col left'>
          <h3>Before eating</h3>
          {renderBeforeItems()}
        </section>
        <section className='med-display__col'>
          <h3>After eating</h3>
          {renderAfterItems()}
        </section>
      </span>
    </div>
  );
};

export default DisplayTimeList;
