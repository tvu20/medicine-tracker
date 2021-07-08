import { useState, useEffect, useCallback } from 'react';

import DosageItem from './DosageItem';

import './dosage.css';

const Dosage = () => {
  const [dosage, setDosage] = useState([]);

  console.log('dosage: ', dosage);

  const updateDosage = item => {
    let tempDosage = dosage;
    tempDosage[item.id] = item;
    console.log(tempDosage);

    setDosage(tempDosage);
  };

  const dosageHandler = () => {
    setDosage(prevState => [
      ...prevState,
      { id: prevState.length, meal: 'before', time: 'morning', amount: '' },
    ]);
  };

  const renderDosages = useCallback(() => {
    return dosage.map(d => {
      return <DosageItem key={d.id} item={d} updateHandler={updateDosage} />;
    });
  }, [dosage]);

  return (
    <div>
      {renderDosages()}
      <button type='button' onClick={dosageHandler}>
        Add dosage
      </button>
    </div>
  );
};

export default Dosage;
