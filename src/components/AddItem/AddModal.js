import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddForm from './AddForm';
import Modal from '../UI/Modal';

import { uiActions } from '../../store/ui.js';
// import prescriptionActions from '../../store/prescription';

const AddModal = () => {
  const dispatch = useDispatch();

  const showModal = useSelector(state => state.ui.toggle);

  const closeModalHandler = () => {
    dispatch(uiActions.closeModal());
  };

  //   const capitalize = text => {
  //     return text.charAt(0).toUpperCase() + text.slice(1);
  //   };

  //   const modalContent = () => {
  //     return (
  //       <section className='pokemon-modal'>
  //         <h1> HI THERE THIS IS A MODAL </h1>
  //       </section>
  //     );
  //   };

  return (
    <React.Fragment>
      {showModal && (
        <Modal onClose={closeModalHandler}>
          {/* {modalContent()} */}
          <AddForm closeHandler={closeModalHandler} />
          <div className='pokemon-modal__bottom'>
            {/* <button
              className='pokemon-modal__close'
              onClick={closeModalHandler}
            >
              Return
            </button> */}
          </div>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default AddModal;
