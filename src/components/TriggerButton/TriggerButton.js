import React from 'react';
import { Button } from '@material-ui/core';
import './TriggerButton.css';
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <Button
      // className="btn btn-lg btn-danger center modal-button"
      className="triggerButton"
      ref={buttonRef}
      onClick={showModal}
    >
      {triggerText}
    </Button>
  );
};
export default Trigger;
