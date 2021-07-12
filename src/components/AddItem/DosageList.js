import DosageItem from './DosageItem';

import './dosage.css';

const Dosage = props => {
  const { dosage } = props;

  // console.log('new dosage: ', dosage);

  const renderDosages = () => {
    // console.log('rendering: ', dosage);
    return dosage.map(d => {
      return (
        <DosageItem
          key={d.id}
          item={d}
          updateHandler={props.updateDosage}
          remove={props.remove}
        />
      );
    });
  };

  return (
    <div>
      {renderDosages()}
      <button type='button' onClick={props.dosageHandler}>
        Add dosage
      </button>
    </div>
  );
};

export default Dosage;
