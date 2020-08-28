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
  GridList,
  GridListTile,
  GridListTileBar,
  withTheme,
  TextareaAutosize,
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
  // optionTabs: {
  //   borderBottom: '2px solid #ffffff',
  //   textAlign: 'center',
  //   transition: '.5s',
  // },
  // optionTab: {
  //   textTransform: 'capitalize',
  //   textAlign: 'center',
  //   minWidth: '16%', // a number of your choice
  //   width: '16%',
  //   maxWidth: 40,
  //   font: '400 14px Montserrat, sans-serif',
  //   '&:hover': {
  //     color: '#161616',
  //     opacity: 1,
  //     transition: '.5s',
  //     borderBottom: '#161616 solid 2px',
  //     position: 'relative',
  //     font: '500 14px Montserrat, sans-serif',
  //   },
  //   // So focus only works until you click something else
  //   '&:focus': {
  //     color: '#161616',
  //     font: '500 14px Montserrat, sans-serif',
  //     borderBottom: '#161616 solid 2px',
  //     opacity: 1,
  //     // transition: '.5s',
  //   },
  //   '&:not(focus)': {
  //     color: '#525459',
  //     font: '500 14px Montserrat, sans-serif',
  //     borderBottom: '#b8b8b8 solid 2px',
  //     opacity: 1,
  //     transition: '.5s',
  //   },
  // },
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
    color: '#252525',
    // opacity: '1',
    // backgroundColor: '#eeeeee',
    // color: '#252525',
    width: 'fit-content',
    height: '30px',
    margin: 'auto',
    display: 'flex',
    'text-align': 'center',
    '&:hover > div': {
      // color: '#eeeee',
      opacity: 0.5,
      transition: '.5s',
      position: 'relative',
    },
    '&:hover > div:hover': {
      // color: '#eeeee',
      opacity: 1,
      transition: '.5s',
      position: 'relative',
    },
  },
  linkedinSocialIconContainer: { marginTop: '-4px' },
  githubSocialIcons: {
    'font-size': '30px',
    display: 'inline-block',
  },
  linkedinSocialIcons: {
    'font-size': '40px',
    display: 'inline-block',
    // '&:hover': {
    //   color: '#252525',
    //   opacity: '1',
    // },
  },
  introduction: {
    'text-align': 'justify',
    color: '#262a30',
    font: '500 50px Montserrat, sans-serif',
    padding: '0px 20px 0px 20px',
  },

  story: {
    color: '#262a30',
    font: '500 20px Hind, sans-serif',
    padding: '0px 20px 0px 20px',
    marginTop: '-80px',
    'text-align': 'left',
  },
  projectsHeader: {
    color: '#262a30',
    marginTop: '30px',
    font: '500 50px Montserrat, sans-serif',
    // fontWeight: 'bold',
  },
  logoPicture: { width: '50px', marginBottom: '-10px' },
  underline: { 'text-decoration': 'underline' },
  projectContainerOne: {
    marginTop: '150px',
    padding: '10px 20px 0px 20px',
  },
  projectContainerTwo: {
    marginTop: '75px',
    padding: '10px 20px 0px 20px',
  },
  projectContainerThree: {
    marginTop: '0px',
    padding: '10px 20px 0px 20px',
  },
  projectPicture: {
    width: '100%',
    'border-radius': '5px',
  },
  projectPaper: {
    '&:hover': {
      opacity: 1,
      backgroundColor: 'white',
      border: '#161616 solid 2px',
    },
  },
  projectContainerBottom: { borderBottom: '#161616 solid 4px' },

  GridListRoot: {
    display: 'grid',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    alignItems: 'flex-end',
    // borderRight: '#9898a4 solid 5px',
  },
  gridList: {
    width: 600,
    height: 460,
    transform: 'translateZ(0)',
    flexWrap: 'nowrap',
    // 'overflow-y': 'scroll !important',
    height: '102%',
    // overflow: 'visible',

    '&::-webkit-scrollbar': {
      width: '.5em',
      height: '3%',
      // height: '100vh',
      marginBottom: '10px',
      position: 'relative',
    },
    '&::-webkit-scrollbar-track': {
      // boxShadow: 'inset 0 0 6px #000',
      // border: '#252525 solid 1px',
      backgroundColor: '#eeeeee',
      // 'border-radius': '5px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#262b2f',
      // 'border-radius': '5px',
    },
  },
  gridListItem: {},
  arrow: {
    width: '430px',
    margin: '50px auto',
  },
  line: {
    'margin-top': '14px',
    width: '400px',
    background: 'blue',
    height: '10px',
    float: 'left',
  },
  point: {
    width: '0',
    height: '0',
    'border-top': '20px solid transparent',
    'border-bottom': '20px solid transparent',
    'border-left': '30px solid blue',
    float: 'right',
  },
  arrowPicture: { margin: '-130px 0px 0px 30px', width: '550px' },
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
          <Grid item className={classes.content} xs={12} sm={12} md={6} lg={6}>
            <h1 className={classes.introduction}>
              {/* I uploaded images via the images folder and accessed their links through Github */}
              {/* <img
                className={classes.logoPicture}
                src="https://tinyurl.com/yxnwsqfk"
              ></img>{' '} */}
              Hola, I'm Bruno.
            </h1>
            <p className={classes.story}>
              <br></br> <br></br>I'm a software developer at Prime Digital
              Academy based in the Twin Cities that likes drinking tea, playing
              chess, exploring and sharing ideas. I have created projects using
              React, Redux, Sagas, Node.js, Ajax, Express, PostgreSQL, SQL,
              jQuery, AWS S3, and CSS. Prior to my time in tech, I worked in UX
              and marketing for 3+ years, creating websites, social media
              platforms, branding kits, promotional campaigns, creative content,
              memos, and research reports. I choose to learn full-stack
              development to be able to build out my user-centered designs into
              fully functional applications and to learn how my designs affect
              developers and stakeholders alike. <br></br> <br></br>
              Feel free to download my <span> </span>{' '}
              <span className={classes.underline}>resume</span>
              <span> </span> or send me an <span> </span>{' '}
              <span className={classes.underline}>email</span> if you have any
              questions or want to set up a time to chat.<br></br> <br></br>
            </p>
            <div className={classes.socialIconsContainer}>
              <div>
                <GitHubIcon className={classes.githubSocialIcons} />
              </div>

              <div className={classes.linkedinSocialIconContainer}>
                <LinkedInIcon className={classes.linkedinSocialIcons} />
              </div>
            </div>
          </Grid>
          <Grid item className={classes.content} xs={12} sm={12} md={6} lg={6}>
            <h1 className={classes.projectsHeader}>
              {' '}
              <img
                className={classes.logoPicture}
                src="https://tinyurl.com/yxnwsqfk"
              ></img>{' '}
              Projects
            </h1>
            <div className={classes.GridListRoot}>
              {/* cellHeight controls the height of each tile */}
              <GridList
                cols={1.5}
                cellHeight={360}
                className={classes.gridList}
              >
                <GridListTile>
                  <div className={classes.projectContainerOne}>
                    <Paper
                      className={classes.projectContainerBottom}
                      className={classes.projectPaper}
                    >
                      <img
                        className={classes.projectPicture}
                        src="https://tinyurl.com/yxdammdx"
                      ></img>
                    </Paper>
                  </div>
                </GridListTile>
                <GridListTile cols={1}>
                  <div className={classes.projectContainerTwo}>
                    <Paper className={classes.projectPaper} elevation={3}>
                      <img
                        className={classes.projectPicture}
                        src="https://tinyurl.com/yyu4pp2p"
                      ></img>
                    </Paper>
                  </div>
                </GridListTile>
                <GridListTile>
                  <div className={classes.projectContainerThree}>
                    <Paper className={classes.projectPaper} elevation={3}>
                      <img
                        className={classes.projectPicture}
                        src="https://tinyurl.com/yyd7ffm7"
                      ></img>
                    </Paper>
                  </div>
                </GridListTile>
              </GridList>
              {/* <img src="images/arrow.png"></img> */}
              {/* <img className={classes.arrowPicture} src="images/2.png"></img> */}

              {/* <div className={classes.arrow}>
                <div className={classes.line}></div>
                <div className={classes.point}></div>
              </div> */}
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
