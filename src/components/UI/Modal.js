import React, { useEffect, useRef, useCallback } from 'react';

import './modal.css';

const Modal = props => {
  const node = useRef();
  const { onClose } = props;

  // closing the modal
  const handleClickOutside = useCallback(
    event => {
      if (node.current.contains(event.target)) {
        return;
      }
      onClose();
    },
    [onClose]
  );

  // set up event listeners upon modal opening
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className='modal-container'>
      <div className='modal' ref={node}>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
