import { useRef } from 'react';

import DosageList from './DosageList';

import './add-form.css';

const AddItem = () => {
  const nameRef = useRef('');
  const descRef = useRef('');
  const durationRef = useRef('');
  const totalRef = useRef('');
  const typeRef = useRef('');

  const submitHandler = e => {
    e.preventDefault();

    // need to do some verification

    const medItem = {
      id: Date.now(),
      name: nameRef.current.value,
      use: descRef.current.value,
      duration: durationRef.current.value,
      totalPerDay: totalRef.current.value,
      form: typeRef.current.value,
    };

    console.log('submitted form');
    console.log(medItem);
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
            <label htmlFor='duration'>Duration</label>
            <input type='text' name='duration' ref={durationRef} />
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
        </div>
        <DosageList />
        <div className='add-form__actions'>
          <button type='submit'>Submit</button>
          <button>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
