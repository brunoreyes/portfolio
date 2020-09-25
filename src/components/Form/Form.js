// import React, { Component } from 'react';
// import {
//   Button,
//   // FormControl
//   withStyles,
//   TextField,
// } from '@material-ui/core';
// import './Form.css';
// import styles from '../themes/homeTheme';

// class HomePage extends Component {
//   render() {
//     const { classes } = this.props;
//     return (
//       <>
//         <form
//           onSubmit={this.sendEmail}
//           className="gform pure-form pure-form-stacked"
//           method="POST"
//           data-email="bruno619reyes@gmail.com"
//           action="https://script.google.com/macros/s/AKfycbxtcbHlRFTg6H0rcFU2dNnHZNdyabfR3uKLE7Tv06TyA71Cy6Y/exec"
//         >
//           {' '}
//           <span className={classes.dialogMessage}>Let's Chat</span>
//           <div className="form-elements" id="form-elements">
//             <TextField
//               autoFocus
//               margin="dense"
//               label={
//                 <span className={classes.dialogLabels}>Email Address</span>
//               }
//               name="email"
//               id="email"
//               type="email"
//               fullWidth
//               variant="outlined"
//               className="pure-group"
//             />
//             <TextField
//               autoFocus
//               margin="dense"
//               label={<span className={classes.dialogLabels}>Name</span>}
//               id="name"
//               name="name"
//               type="text"
//               fullWidth
//               variant="outlined"
//               className="pure-group"
//             />
//             <TextField
//               autoFocus
//               variant="outlined"
//               margin="dense"
//               label={<span className={classes.dialogLabels}>Message</span>}
//               name="message"
//               id="message"
//               type="text"
//               fullWidth
//               multiline
//               rows={4}
//               className="pure-group"
//             />{' '}
//             <input
//               id="honeypot"
//               type="text"
//               name="honeypot"
//               className="pure-group honeypot-field"
//               hidden
//             />
//             {/* {JSON.stringify(this.props.task.id)} */}
//             <div
//               style={{ display: 'none' }}
//               id="thankyou_message"
//               className="thankyou_message"
//             >
//               <h2>
//                 <em>Thanks</em> for contacting us! We will get back to you soon!
//               </h2>
//             </div>
//           </div>
//           {/* </DialogContent> */}
//           {/* <DialogActions> */}
//           <Button onClick={this.handleClose} className={classes.dialogButton}>
//             Cancel
//           </Button>
//           <button
//             // onClick={this.handleClose}
//             className={classes.dialogButtonRight}
//             type="submit"
//             value="Send"
//           >
//             Send
//           </button>
//         </form>
//         <script
//           data-cfasync="false"
//           type="text/javascript"
//           src="formSubmissionHandler.js"
//         ></script>
//       </>
//     );
//   }
// }

// export default withStyles(styles)(HomePage);
