import React from 'react';
import { Button, FormControl, TextField } from '@material-ui/core';
import './Form.css';

export const Form = ({ onSubmit }) => {
  return (
    <FormControl
      className="form-controller"
      onSubmit={onSubmit}
      // action={mailto: bruno619reyes@gmail.com}
    >
      {/* <div className="form-group">
        <InputLabel className="nameLabel" htmlFor="name">
          Name
        </InputLabel>
        <Input className="form-control" id="name" />
      </div>
      <div className="form-group">
        <InputLabel id="emailLabel" htmlFor="email">
          Email address
        </InputLabel> */}

      {/* <Input
          type="email"
          className="form-control"
          id="email"
          placeholder="name@example.com"
        /> */}
      <h3 className="form-header">Let's Chat</h3>

      <div className="form-group">
        <TextField
          label="Name"
          variant="outlined"
          type="email"
          className="form-control"
          id="email"
        />
      </div>
      <div className="form-group">
        <TextField
          label="Email Address"
          variant="outlined"
          type="email"
          className="form-control"
          id="email"
        />
      </div>
      <div className="form-group">
        <TextField
          label="Subject"
          variant="outlined"
          type="email"
          className="form-control"
          id="Subject"
        />
      </div>
      <div className="form-group">
        <TextField
          label="Message"
          variant="outlined"
          type="email"
          className="form-control"
          id="Message"
          multiline
          rowsMax={4}
        />
      </div>
      <div className="form-group">
        <Button
          className="form-control btn btn-primary"
          variant="contained"
          type="submit"
        >
          Send Message
        </Button>
      </div>
    </FormControl>
  );
};
export default Form;
