import React, { Component } from 'react';
import {
  withStyles,
  FormControl,
  Input,
  InputLabel,
  FormHelperText,
  Button,
  Link,
  Paper,
  Grid,
  Tabs,
  Tab,
  Typography,
  // IconButton,
} from '@material-ui/core';
// import WorkIcon from '@material-ui/icons/Work';
// import ImageIcon from '@material-ui/icons/Image';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
// import EmailIcon from '@material-ui/icons/Email';
import Fade from 'react-reveal/Fade';
// import PersonIcon from '@material-ui/icons/Person';
// import LockIcon from '@material-ui/icons/Lock';

const styles = (theme) => ({
  // allContainer: {},
  // leftSide: { 'background-color': '#161616', flexGrow: 1, height: 860 },
  // rightSide: { 'background-color': 'white', flexGrow: 1, height: 860 },
  // infinityIcon: {
  //   color: '#ffffff',
  //   // justify: 'center',
  //   // 'text-align': 'center',
  //   alignContent: 'center',
  //   alignItems: 'center',
  //   // width: 'auto',
  //   width: '100%',
  //   // height: '100%',
  //   // 'text-align': 'center',
  //   margin: '90px auto 20px auto',
  //   // display: 'inline-block',
  //   'font-size': '500px',

  //   display: 'block',
  // },
  // padding: {
  //   padding: theme.spacing(3),
  // },
  // infinityControl: { 'text-align': 'center', width: 'auto' },
  // infinitytext: {
  //   font: '500 30px Montserrat, sans-serif',
  //   color: 'white',
  //   margin: '-100px auto 20px auto',
  // },
  // formContainer: {
  //   'background-color': 'white',
  //   'text-align': 'center',
  // },
  // logoControl: {
  //   font: '700 50px Montserrat, sans-serif',
  //   margin: '0px 0px 20px 0px',
  // },
  // formControl: { margin: '0px 0px 15px 0px', width: '100%' },
  // inputControl: { margin: '0px 0px 15px 0px', width: '100%' },
  // inputLabel: {
  //   font: '  500 15px Montserrat, sans-serif',
  // },
  // inputHelper: { font: '500 12px Montserrat, sans-serif' },
  // submitButton: {
  //   color: '#fff',
  //   'background-color': '#161616',
  //   'font-size': '15px',
  //   'font-family': ' Montserrat',
  //   'text-transform': 'capitalize',
  //   border: '#161616 solid 1px',
  //   margin: '10px 0px 80px 0px',
  //   padding: '8px 16px 8px 16px',
  //   'border-radius': '25px',
  //   '&:hover': {
  //     color: '#161616',
  //     'background-color': '#fff',
  //     border: '#161616 solid 1px',
  //   },
  //   'text-align': 'center',
  //   width: '100%',
  //   alignContent: 'center',
  //   alignItems: 'center',
  // },
  // register: {
  //   'text-align': 'center',
  //   margin: '0px 0px 0px 0px',
  //   font: '500 15px Montserrat, sans-serif',
  //   color: '#161616',
  // },
  optionTabs: {
    borderBottom: '2px solid #ffffff',
    textAlign: 'center',
    transition: '.5s',
  },
  optionTab: {
    textTransform: 'capitalize',
    textAlign: 'center',
    minWidth: '16%', // a number of your choice
    width: '16%',
    maxWidth: 40,
    font: '400 14px Montserrat, sans-serif',
    '&:hover': {
      color: '#161616',
      opacity: 1,
      transition: '.5s',
      borderBottom: '#161616 solid 2px',
      position: 'relative',
      font: '500 14px Montserrat, sans-serif',
    },
    // So focus only works until you click something else
    '&:focus': {
      color: '#161616',
      font: '500 14px Montserrat, sans-serif',
      borderBottom: '#161616 solid 2px',
      opacity: 1,
      // transition: '.5s',
    },
    '&:not(focus)': {
      color: '#525459',
      font: '500 14px Montserrat, sans-serif',
      borderBottom: '#b8b8b8 solid 2px',
      opacity: 1,
      transition: '.5s',
    },
  },
  root: {
    flexGrow: 1,
  },
  content: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    // alignContent: 'center',
    // justify: 'center',
    'text-align': 'center',
    // alignContent: 'center',
    // alignItems: 'center',
    // width: 'auto',
    // width: '100%',
  },
  socialIconsContainer: {
    // '&:hover': {
    //   color: '#161616',
    //   opacity: 1,
    //   transition: '.5s',
    //   position: 'relative',
    // },
  },
  socialIcons: {
    '&:hover': {
      color: '#2196f3',
    },
    '&:not(hover)': {
      color: '#808080',
      color: '#161616',
      // opacity: 1,
    },
  },
  introduction: { color: '#262a30', font: '500 50px Montserrat, sans-serif' },
  story: { color: '#525459', font: '500 14px Montserrat, sans-serif' },
});

class HomePage extends Component {
  state = {
    options: false,
    password: '',
  };
  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };
  handleOptionClick = () => {
    this.setState({
      options: !this.state.options,
    });
    console.log('in handleOptionClick, options is now:', this.state.options);
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container justify="space-around" spacing={0}>
          {/* <Grid className={classes.spacing} item xs={1} sm={1} md={1} lg={1}>
            <div />
          </Grid> */}
          <Grid item className={classes.content} xs={12} sm={12} md={6} lg={6}>
            <h1 className={classes.introduction}>
              {/* <img src="/public/images/brLogo.png"></img>
              <img src="https://tinyurl.com/yyu4pp2p"></img>
              <img src="https://tinyurl.com/y3khej25.com/yyu4pp2p"></img> */}
              Hey, I'm Bruno.
            </h1>
            <p className={classes.story}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className={classes.socialIconsContainer}>
              {' '}
              <GitHubIcon className={classes.socialIcons} />
              <LinkedInIcon className={classes.socialIcons} />
            </div>
          </Grid>
          <Grid item className={classes.content} xs={12} sm={12} md={6} lg={6}>
            <div></div>

            {/* <div className={classes.tabsContainer}>
              <Tabs
                // className={classes.content}
                className={classes.optionTabs}
                // value={value}
                // onChange={handleChange}
              >
                <Tab
                  // icon={<WorkIcon />}
                  disableRipple
                  className={classes.optionTab}
                  label="Projects"
                  onClick={this.handleOptionClick}
                />
                {/* <Tab
                  disableRipple
                  icon={<ImageIcon />}
                  className={classes.optionTab}
                /> */}
            {/* <Tab
                  // icon={<EmailIcon />}
                  disableRipple
                  // { this.state.options ? (className = {classes.contactSelected}) : (className = {classes.contact})}
                  className={classes.optionTab}
                  label="Contact"
                  onClick={this.handleOptionClick}
                />
              </Tabs>
              <Typography className={classes.padding} />
            // </div> */}
          </Grid>
          {/* <Grid className={classes.spacing} item xs={1} sm={1} md={1} lg={1}> */}
          {/* <div /> */}
          {/* </Grid> */}
          {/* <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>xs=6 sm=3</Paper>
          </Grid> */}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);

// <Grid container spacing={24}>
//   <Grid className={classes.leftSide} item xs={6}>
//     <div className={classes.infinityControl}>
//       <Fade>
//         <AllInclusiveIcon className={classes.infinityIcon} />{' '}
//       </Fade>
//       <p className={classes.infinitytext}>It Means Everything</p>
//     </div>
//   </Grid>
//   <Grid className={classes.rightSide} item xs={6}>
//     <div className="loginPage">
//       <form
//         className={classes.formContainer}
//         onSubmit={this.login}
//         autocomplete="off"
//       >
//         <h2 className={classes.logoControl}>TODO</h2>
//         <FormControl className={classes.formControl}>
//           <div>
//             <InputLabel className={classes.inputLabel} htmlFor="username">
//               Username
//               {/* Username */}
//             </InputLabel>
//             <Input
//               type="text"
//               name="username"
//               className={classes.inputControl}
//               value={this.state.username}
//               onChange={this.handleInputChangeFor('username')}
//             />
//             <FormHelperText className={classes.inputHelper}>
//               Required *
//             </FormHelperText>
//           </div>
//         </FormControl>
//         <FormControl className={classes.formControl}>
//           <div>
//             <InputLabel className={classes.inputLabel} htmlFor="password">
//               Password
//               {/* Password */}
//             </InputLabel>
//             <Input
//               type="password"
//               name="password"
//               className={classes.inputControl}
//               value={this.state.password}
//               onChange={this.handleInputChangeFor('password')}
//             />
//             <FormHelperText className={classes.inputHelper}>
//               Required *
//             </FormHelperText>
//           </div>
//         </FormControl>

//         <div>
//           <Button
//             disableElevation
//             className={classes.submitButton}
//             // className="log-in"
//             type="submit"
//             name="submit"
//             value="Log In"
//           >
//             Submit
//           </Button>
//           <Link
//             className={classes.register}
//             type="button"
//             // className="link-button"
//             onClick={() => {
//               this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' });
//             }}
//           >
//             Register
//           </Link>
//         </div>
//       </form>
//     </div>
//   </Grid>
// </Grid>
