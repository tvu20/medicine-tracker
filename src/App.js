import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddForm from './components/AddItem/AddForm';
import DisplayMeds from './components/Display/DisplayMeds';

import './App.css';

import {
  sendPrescription,
  fetchPrescription,
} from './store/prescription-actions';

function App() {
  const dispatch = useDispatch();
  const prescription = useSelector(state => state.prescription);

  useEffect(() => {
    console.log('hi there!');
    dispatch(fetchPrescription());
  }, [dispatch]);

  return (
    <div className='App'>
      <h1>Medicine Tracker</h1>
      <AddForm />
      {/* <DisplayMeds /> */}
    </div>
  );
}

export default App;
