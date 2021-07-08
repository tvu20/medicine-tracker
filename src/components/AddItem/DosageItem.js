import { useRef } from 'react';

const DosageItem = props => {
  const timeRef = useRef('morning');
  const mealRef = useRef('before');
  const amountRef = useRef('');

  const changeHandler = () => {
    // console.log('changed something');
    props.updateHandler({
      id: props.item.id,
      time: timeRef.current.value,
      meal: mealRef.current.value,
      amount: amountRef.current.value,
    });
  };

  return (
    <div className='dosage-item'>
      <div className='dosage-item__control'>
        <label htmlFor='time'>Type</label>
        <select name='time' onChange={changeHandler} ref={timeRef}>
          <option value='morning'>Morning</option>
          <option value='noon'>Noon</option>
          <option value='evening'>Evening</option>
        </select>
      </div>

      <div className='dosage-item__control'>
        <label htmlFor='meal'>Meal</label>
        <select name='meal' onChange={changeHandler} ref={mealRef}>
          <option value='before'>Before</option>
          <option value='after'>After</option>
        </select>
      </div>

      <div className='dosage-item__control'>
        <label htmlFor='amount'>Amount</label>
        <input
          type='text'
          name='amount'
          onChange={changeHandler}
          ref={amountRef}
        />
      </div>
    </div>
  );
};

export default DosageItem;
