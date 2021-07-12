import './med-item.css';

const MedItem = props => {
  return (
    <div className={`med-item__container ${props.time}`}>
      <h4 className='med-item__title'>{props.name}</h4>
      <p>{props.amount}</p>
      <p>{props.frequency}</p>
    </div>
  );
};

export default MedItem;
