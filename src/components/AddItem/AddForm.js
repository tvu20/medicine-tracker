import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import DosageList from './DosageList';

import { prescriptionActions } from '../../store/prescription';

import './add-form.css';

const AddItem = props => {
  const dispatch = useDispatch();

  const nameRef = useRef('');
  const descRef = useRef('');
  const freqRef = useRef('');
  const totalRef = useRef('');
  const typeRef = useRef('');
  // const startRef = useRef('');
  // const stopRef = useRef('');
  const remarksRef = useRef('');

  const [dosage, setDosage] = useState([]);

  const updateDosageHandler = item => {
    let tempDosage = dosage;
    tempDosage[item.id] = item;

    setDosage(tempDosage);
  };

  const dosageHandler = () => {
    setDosage(prevState => [
      ...prevState,
      { id: prevState.length, meal: 'before', time: 'morning', amount: '' },
    ]);
  };

  const removeDosageHandler = id => {
    console.log(id);
    setDosage(prevState => prevState.filter(item => item.id !== id));
  };

  const submitHandler = e => {
    e.preventDefault();

    // need to do some verification

    const medItem = {
      id: Date.now(),
      name: nameRef.current.value,
      use: descRef.current.value,
      frequency: freqRef.current.value,
      totalPerDay: totalRef.current.value,
      form: typeRef.current.value,
      dosages: dosage,
      // start: startRef.current.value,
      // stop: stopRef.current.value,
      remarks: remarksRef.current.value,
    };

    console.log('submitted form');
    // console.log(medItem);
    dispatch(prescriptionActions.addMedicine(medItem));
  };

  return (
    <div className='add-form__container'>
      <form onSubmit={submitHandler} className='add-form'>
        <div className='add-form__controls'>
          <div className='add-form__control'>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' ref={nameRef} />
          </div>

          <div className='add-form__control'>
            <label htmlFor='desc'>Description</label>
            <input type='text' name='desc' ref={descRef} />
          </div>

          <div className='add-form__control'>
            <label htmlFor='type'>Frequency</label>
            <input type='text' name='desc' ref={freqRef} />
          </div>

          <div className='add-form__control'>
            <label htmlFor='totalPerDay'>Total Per Day</label>
            <input type='text' name='totalPerDay' ref={totalRef} />
          </div>

          <div className='add-form__control'>
            <label htmlFor='type'>Type</label>
            <select name='type' ref={typeRef}>
              <option value='tablet'>Tablet</option>
              <option value='liquid'>Liquid</option>
              <option value='packet'>Packet</option>
              <option value='topical'>Topical</option>
            </select>
          </div>

          {/* <div className='add-form__control'>
            <label htmlFor='start'>Start date</label>
            <input type='date' name='start' ref={startRef} />
          </div>

          <div className='add-form__control'>
            <label htmlFor='stop'>Stop date</label>
            <input type='date' name='stop' ref={stopRef} />
          </div> */}

          <div className='add-form__control'>
            <label htmlFor='remarks'>Additional Notes</label>
            <input type='text' name='remarks' ref={remarksRef} />
          </div>
        </div>

        <DosageList
          dosage={dosage}
          updateDosage={updateDosageHandler}
          dosageHandler={dosageHandler}
          remove={removeDosageHandler}
        />

        <div className='add-form__actions'>
          <button type='submit'>Submit</button>
          <button onClick={props.closeHandler} type='button'>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
