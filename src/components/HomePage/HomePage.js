import React, { Component } from 'react';
import {
  withStyles,
  // FormControl,
  // Input,
  // InputLabel,
  // FormHelperText,
  // Button,
  // Link,
  // Form,
  Paper,
  Grid,
  GridList,
  GridListTile,
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
// import { Container } from '../Container/Container';

const styles = (theme) => ({
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
    font: '500 55px Montserrat, sans-serif',
    padding: '0px 20px 0px 20px',
  },

  story: {
    color: '#262a30',
    font: '400 23px Hind, sans-serif',

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
  logoPicture: { width: '40px', margin: '0px 10px -3px 0px' },
  underline: { 'text-decoration': 'underline', color: '#262a30' },
  gridListTile: {
    '&:hover': {
      backgroundColor: 'white',
      color: 'white',
    },
  },
  projectContainerOne: {
    margin: '-15px 0px 20px 0px',
    padding: '10px 20px 0px 20px',
    // '&:hover': {
    //   backgroundColor: 'white',
    //   color: 'white',
    //   '&:hover > div:hover': {
    //     color: 'white',
    //   },
    // },
  },
  projectContainerTwo: {
    marginTop: '10px',
    padding: '10px 20px 0px 20px',
  },
  projectContainerThree: {
    marginTop: '0px',
    padding: '10px 20px 0px 20px',
  },
  imageTextContainer: {
    '&:hover > div': {
      opacity: 1,
      // border: '#161616 solid 3px',
      // 'border-radius': '5px',
    },
    position: 'relative',
    // width: '50%',
  },
  projectPicture: {
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '0',
    right: '0',
    height: '100%',
    width: '100%',
    opacity: '0',
    transition: '.5s ease',
    // 'background-color': '#252525',
    'background-color': 'white',
    padding: '0px 0px 0px 0px',
  },
  imageText: {
    // color: 'white',
    color: '#252525',
    font: '500 22px Montserrat, sans-serif',
    position: 'absolute',
    top: '50%',
    left: '50%',
    // '-webkit-transform': 'translate(-50%, -50%)',
    // '-ms-transform': 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
    // 'text-align': 'center',
    marginTop: '-5px',
  },
  hrefLink: { 'text-decoration': 'none', color: '#262a30' },
  projectSocialIcon: { 'font-size': '50px', paddingTop: '10px' },
  projectTitle: {
    marginTop: '30px',
    padding: '10px 20px 10px 20px',
    marginBottom: '0px',
  },
  projectDescription: {
    padding: '0px 10px 15px 10px',
    marginTop: '7px',
    font: '400 18px Hind, sans-serif',
    // fontWeight: 'bold',
  },
  projectPaper: {
    // 'border-radius': '0px',
    '&:hover': {
      opacity: 1,
      backgroundColor: 'white',
    },
  },

  GridListRoot: {
    display: 'grid',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    alignItems: 'flex-end',
  },
  gridList: {
    width: 600,
    transform: 'translateZ(0)',
    flexWrap: 'nowrap',
    // 'overflow-y': 'scroll !important',
    height: '102%',
    '&::-webkit-scrollbar': {
      width: '.5em',
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
  formContainer: {
    font: '400 16px Hind, sans-serif',
    'text-transform': 'lowercase',
  },
});

class HomePage extends Component {
  state = { isShown: false };
  render() {
    const { classes } = this.props;
    // const triggerText = 'send a message';
    // const onSubmit = (event) => {
    //   event.preventDefault(event);
    //   console.log(event.target.name.value);
    //   console.log(event.target.email.value);
    // };
    return (
      <div className={classes.root}>
        <Grid container justify="space-around" spacing={0}>
          <Grid item className={classes.content} xs={12} sm={12} md={12} lg={6}>
            <h1 className={classes.introduction}>
              {/* I uploaded images via the images folder and accessed their links through Github */}
              Hola, I'm Bruno.
            </h1>
            <p className={classes.story}>
              <br></br> <br></br>I'm a mexican-american software developer at
              Prime Digital Academy based in the Twin Cities. I have created
              projects using React, Redux, Sagas, Node.js, Ajax, Express,
              PostgreSQL, SQL, jQuery, AWS S3, and CSS. Prior to my time in
              tech, I worked in UX and marketing for 3+ years, creating
              websites, social media platforms, branding kits, promotional
              campaigns, creative content, memos, and research reports. I chose
              to learn full-stack development to be able to build out my
              user-centered designs into fully functional applications and to
              learn how my designs affect developers and stakeholders alike.
              When I'm not creating or designing products I enjoy exploring and
              sharing ideas. <br></br> <br></br>
              Feel free to download my <span> </span>{' '}
              <a
                href="resume-Bruno_Reyes.pdf"
                target="_blank"
                className={classes.hrefLink}
              >
                <span className={classes.underline}>resume</span>
              </a>
              <span> </span> or send me an email at<span> </span>{' '}
              <a
                href="mailto:bruno619reyes@gmail.com"
                className={classes.underline}
              >
                {' '}
                {/* <Container
                  className={classes.formContainer}
                  triggerText={triggerText}
                  onSubmit={onSubmit}
                /> */}
                bruno619reyes@gmail.com
              </a>{' '}
              if you have any questions or want to set up a time to chat.
              <br></br> <br></br>
            </p>
            <Fade>
              <div className={classes.socialIconsContainer}>
                <div>
                  <GitHubIcon className={classes.githubSocialIcons} />
                </div>

                <div className={classes.linkedinSocialIconContainer}>
                  <LinkedInIcon className={classes.linkedinSocialIcons} />
                </div>
              </div>
            </Fade>
          </Grid>
          <Grid item className={classes.content} xs={12} sm={12} md={12} lg={6}>
            <h1 className={classes.projectsHeader}>
              <img
                alt="Bruno Reyes Logo"
                className={classes.logoPicture}
                src="https://tinyurl.com/yxnwsqfk"
              ></img>
              Projects
            </h1>
            <div className={classes.GridListRoot}>
              {/* cellHeight controls the height of each tile */}
              <GridList
                cols={1.5}
                cellHeight={370}
                className={classes.gridList}
              >
                <GridListTile className={classes.gridListTile}>
                  <a
                    href="https://github.com/brunoreyes/TODO-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.hrefLink}
                  >
                    <div className={classes.projectContainerOne}>
                      <Paper elevation={3} className={classes.projectPaper}>
                        <div className={classes.imageTextContainer}>
                          <h3 className={classes.projectTitle}>TODO</h3>
                          <img
                            alt="TODO app"
                            className={classes.projectPicture}
                            src="https://tinyurl.com/yxdammdx"
                          ></img>
                          <div className={classes.overlay}>
                            <div className={classes.imageText}>
                              View Project on
                              <GitHubIcon
                                className={classes.projectSocialIcon}
                              />
                            </div>
                          </div>
                          <p className={classes.projectDescription}>
                            Spanish for 'all', TODO is an application that
                            allows users to manage all of their tasks,
                            reminders, ideas, and memories.
                          </p>
                        </div>
                      </Paper>
                    </div>
                  </a>
                </GridListTile>

                <GridListTile className={classes.gridListTile}>
                  <a
                    href="https://github.com/brunoreyes/TODO-app"
                    target="_blank"
                    alt="TODO app"
                    rel="noopener noreferrer"
                    className={classes.hrefLink}
                  >
                    <div className={classes.projectContainerTwo}>
                      <Paper elevation={3} className={classes.projectPaper}>
                        <div className={classes.imageTextContainer}>
                          <h3 className={classes.projectTitle}>
                            Server-Side Calculator
                          </h3>
                          <img
                            className={classes.projectPicture}
                            src="https://tinyurl.com/yyu4pp2p"
                            alt="Server-Side Calculator"
                          ></img>
                          <div className={classes.overlay}>
                            <div className={classes.imageText}>
                              View Project on
                              <GitHubIcon
                                className={classes.projectSocialIcon}
                              />
                            </div>
                          </div>
                          <p className={classes.projectDescription}>
                            Spanish for 'all', TODO is an application that
                            allows users to manage all of their tasks,
                            reminders, ideas, and memories.
                          </p>
                        </div>
                      </Paper>
                    </div>
                  </a>
                </GridListTile>

                <GridListTile cols={1}>
                  <div className={classes.projectContainerTwo}>
                    <Paper className={classes.projectPaper} elevation={3}>
                      <img
                        className={classes.projectPicture}
                        src="https://tinyurl.com/yyu4pp2p"
                        alt="Server-Side Calculator"
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
                        alt="Server-Side Calculator"
                      ></img>
                    </Paper>
                  </div>
                </GridListTile>
              </GridList>
              {/* <GridListTile>
                  <div className={classes.projectContainerOne}>
                    <Paper
                      elevation={3}
                      // className={classes.projectContainerBottom}
                      className={classes.projectPaper}
                    >
                      {/* <Button> */}
              {/* <img
                        className={classes.projectPicture}
                        src="https://tinyurl.com/yxdammdx"
                      ></img>
                      {/* </Button> */}
              {/*}  </Paper>
                  </div>
                </GridListTile>  */}
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
