import { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

import DisplayTimeList from './DisplayTimeList';
import DisplayTimeNight from './DisplayTimeNight';

const DisplayMeds = () => {
  const items = useSelector(state => state.prescription.items);
  const [morningItems, setMorningItems] = useState([]);
  const [noonItems, setNoonItems] = useState([]);
  const [eveningItems, setEveningItems] = useState([]);
  const [nightItems, setNightItems] = useState([]);
  // need to add nighttime items
  // const [eveningItems, setEveningItems] = useState([]);

  const findTimeOfDay = item => {
    const dosageList = item.dosages;
    let timesList = [];

    for (const element of dosageList) {
      timesList.push(element.time);
    }

    return timesList;
  };

  const filterItemsByTimes = useCallback(() => {
    let morning = [];
    let noon = [];
    let evening = [];
    let night = [];

    let tempElement;

    for (const element of items) {
      const elementTimes = findTimeOfDay(element);

      if (elementTimes.includes('morning')) {
        tempElement = {
          ...element,
          dosages: element.dosages.filter(e => e.time === 'morning'),
        };

        morning.push(tempElement);
      }

      if (elementTimes.includes('noon')) {
        tempElement = {
          ...element,
          dosages: element.dosages.filter(e => e.time === 'noon'),
        };

        noon.push(tempElement);
      }

      if (elementTimes.includes('evening')) {
        tempElement = {
          ...element,
          dosages: element.dosages.filter(e => e.time === 'evening'),
        };

        evening.push(tempElement);
      }

      if (elementTimes.includes('night')) {
        tempElement = {
          ...element,
          dosages: element.dosages.filter(e => e.time === 'night'),
        };

        night.push(tempElement);
      }
    }

    setMorningItems(morning);
    setNoonItems(noon);
    setEveningItems(evening);
    setNightItems(night);
    // console.log(morningItems);
  }, [items]);

  useEffect(() => {
    filterItemsByTimes();
  }, [filterItemsByTimes]);

  return (
    <div>
      <DisplayTimeList medList={morningItems} time='morning' />
      <DisplayTimeList medList={noonItems} time='noon' />
      <DisplayTimeList medList={eveningItems} time='evening' />
      <DisplayTimeNight medList={nightItems} time='night' />
    </div>
  );
};

export default DisplayMeds;
