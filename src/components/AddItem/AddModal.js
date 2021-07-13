import React from 'react';
import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import AddForm from './AddForm';

import Modal from '../UI/Modal';

const AddModal = () => {
  const [show, setShow] = useState(true);
  //   const dispatch = useDispatch();

  //   const showModal = useSelector(state => state.selected.show);
  //   const info = useSelector(state => state.selected);

  const closeModalHandler = () => {
    setShow(false);
    // dispatch(selectedActions.toggle());
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
      {show && (
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
