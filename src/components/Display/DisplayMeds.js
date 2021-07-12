import { useSelector } from 'react-redux';

import DisplayTimeList from './DisplayTimeList';

const DisplayMeds = () => {
  const items = useSelector(state => state.prescription.items);

  const findTimeOfDay = item => {
    const dosageList = item.dosages;
    let timesList = [];

    for (const element of dosageList) {
      timesList.push(element.time);
    }

    return timesList;
  };

  // const renderItems = () => {
  //   return items.map(med => {
  //     console.log(findTimeOfDay(med));
  //     return (
  //       <div key={med.id}>
  //         <h3>{med.name}</h3>
  //         <p>{med.use}</p>
  //         <p>Per day: {med.totalPerDay}</p>
  //       </div>
  //     );
  //   });
  // };

  // const renderItems = () => {
  //   return items.map(med => {
  //     return (
  //       <div key={med.id}>
  //         <h3>{med.name}</h3>
  //         <p>{med.use}</p>
  //         <p>Per day: {med.totalPerDay}</p>
  //       </div>
  //     );
  //   });
  // };

  return (
    <div>
      <DisplayTimeList />
    </div>
  );
};

export default DisplayMeds;
