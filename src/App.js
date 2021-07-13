import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddForm from './components/AddItem/AddForm';
import AddModal from './components/AddItem/AddModal';
import DisplayMeds from './components/Display/DisplayMeds';

import {
  sendPrescription,
  fetchPrescription,
} from './store/prescription-actions';

import './App.css';

let isInit = true;

function App() {
  const dispatch = useDispatch();
  const prescription = useSelector(state => state.prescription);

  useEffect(() => {
    console.log('fetching from database');
    dispatch(fetchPrescription());
  }, [dispatch]);

  useEffect(() => {
    if (isInit) {
      isInit = false;
      return;
    }

    if (prescription.changed) {
      dispatch(sendPrescription(prescription));
    }
  }, [prescription, dispatch]);

  return (
    <div className='App'>
      <h1 className='app-title'>MedTracker</h1>
      {/* <AddForm /> */}
      <AddModal />
      <DisplayMeds />
    </div>
  );
}

export default App;
