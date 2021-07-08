import { useSelector } from 'react-redux';

const DisplayMeds = () => {
  const items = useSelector(state => state.prescription.items);

  const renderItems = () => {
    return items.map(med => {
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
    <div>
      Display
      {renderItems()}
    </div>
  );
};

export default DisplayMeds;
