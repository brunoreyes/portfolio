import React, { Component } from 'react';
import {
  withStyles,
  // FormControl,
  // Input,
  // InputLabel,
  // FormHelperText,
  Button,
  // Link,
  // Form,
  // Paper,
  Grid,
  GridList,
  GridListTile,
  // IconButton,
} from '@material-ui/core';

import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Fade from 'react-reveal/Fade';
import styles from '../themes/homeTheme';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
//

class HomePage extends Component {
  state = {
    darkMode: false,
    // toggleLogo: false,
    dialog: false,
    // show1: false,
    // show2: false,
    // show3: false,
    // show4: false,
    // show5: false,
    // show6: false,
  };
  toggleDarkMode = () => {
    // console.log('You clicked the preview icon');
    this.setState({
      darkMode: !this.state.darkMode,
    });
  };
  // toggleModal = () => {
  //   // console.log('You clicked the preview icon');
  //   this.setState({
  //     modal: !this.state.modal,
  //   });
  // };

  handleClickOpen = () => {
    this.setState({ dialog: true });
  };

  handleClose = () => {
    this.setState({ dialog: false });
    console.log('cancel');
  };

  // toggleLogo = () => {
  //   // console.log('You clicked the preview icon');
  //   this.setState({
  //     toggleLogo: !this.state.toggleLogo,
  //   });
  // };
  // toggleProjectText1 = () => {
  //   this.setState({
  //     show1: !this.state.show1,
  //   });
  // };
  // toggleProjectText2 = () => {
  //   this.setState({
  //     show2: !this.state.show2,
  //   });
  // };
  // toggleProjectText3 = () => {
  //   this.setState({
  //     show3: !this.state.show3,
  //   });
  // };
  // toggleProjectText4 = () => {
  //   this.setState({
  //     show4: !this.state.show4,
  //   });
  // };
  // toggleProjectText5 = () => {
  //   this.setState({
  //     show5: !this.state.show5,
  //   });
  // };
  // toggleProjectText6 = () => {
  //   this.setState({
  //     show6: !this.state.show6,
  //   });
  // };
  render() {
    const { classes } = this.props;

    // const triggerText = 'send a message';
    // const onSubmit = (event) => {
    //   event.preventDefault(event);
    //   console.log(event.target.name.value);
    //   console.log(event.target.email.value);
    // };

    return (
      <div
        // className={classes.root}
        className={this.state.darkMode ? classes.darkModeRoot : classes.root}
      >
        <Grid
          container
          justify="space-around"
          className={this.state.darkMode ? classes.darkMode : classes.lightMode}
          spacing={0}
        >
          <Grid
            item
            className={classes.content}
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={4}
          >
            {' '}
            <Fade>
              <h1
                className={
                  this.state.darkMode
                    ? classes.introductionLight
                    : classes.introduction
                }
              >
                {/* I uploaded images via the images folder and accessed their links through Github */}
                Hola, I'm Bruno.{' '}
              </h1>
              <p
                className={
                  this.state.darkMode ? classes.storyLight : classes.story
                }
              >
                <br></br> <br></br>I'm a software engineer based in the Twin
                Cities and a recent graduate of Prime Digital Academy. I have
                developed projects using React, Redux, Sagas, Node.js, Ajax,
                Express, PostgreSQL, SQL, jQuery, AWS S3, and CSS. Prior to
                coding, I held various roles within UX and marketing for 4+
                years, creating websites, social media platforms, photography
                and editing, branding kits, promotional campaigns, templates,
                usability reports, and market research. I chose to learn
                full-stack development to be able to build out user-centered
                designs into fully functional applications and to learn how my
                designs affect developers, designers and stakeholders alike.
                When I'm not creating or designing products, I enjoy exploring
                new foods, locations, activities and cultures as well as sharing
                ideas. <br></br> <br></br>
                Download my{' '}
                <a
                  href="resume-Bruno_Reyes.pdf"
                  target="_blank"
                  className={classes.hrefLink}
                >
                  <span
                    className={
                      this.state.darkMode
                        ? classes.underlineLight
                        : classes.underline
                    }
                  >
                    resume
                  </span>
                </a>
                <span> </span> or email me at{' '}
                <a
                  href="mailto:bruno619reyes@gmail.com"
                  className={
                    this.state.darkMode
                      ? classes.underlineLight
                      : classes.underline
                  }
                >
                  bruno619reyes@gmail.com
                </a>{' '}
                <br></br>
                if you have any questions or want to set up a time to chat.
                {/* <Container
                  className={classes.formContainer}
                  triggerText={triggerText}
                  onSubmit={onSubmit}
                /> */}
                {/* </a>{' '} */}
                <br></br>
                {/* <Button
                  className={
                    this.state.darkMode
                      ? classes.projectsButtonLight
                      : classes.projectsButton
                  }
                  onClick={this.handleClickOpen}
                >
                  Send Message
                </Button> */}
                {/* {this.state.modal ? : <></>} */}
                <Dialog
                  open={this.state.dialog}
                  onClose={this.handleClose}
                  aria-labelledby="form-dialog-title"
                >
                  <DialogTitle className={classes.dialogTitle}>
                    <span className={classes.dialogMessage}>Let's Chat</span>
                  </DialogTitle>
                  <DialogContent onSubmit={this.sendEmail}>
                    {/* <DialogContentText>
                      To subscribe to this website, please enter your email
                      address here. We will send updates occasionally.
                    </DialogContentText> */}

                    <TextField
                      autoFocus
                      margin="dense"
                      label={
                        <span className={classes.dialogLabels}>
                          Email Address
                        </span>
                      }
                      name="user_email"
                      type="email"
                      fullWidth
                      variant="outlined"
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      label={
                        <span className={classes.dialogLabels}>Full Name</span>
                      }
                      name="user_name"
                      type="text"
                      fullWidth
                      variant="outlined"
                    />
                    <TextField
                      autoFocus
                      variant="outlined"
                      margin="dense"
                      label={
                        <span className={classes.dialogLabels}>Message</span>
                      }
                      name="message"
                      type="text"
                      fullWidth
                      multiline
                      rows={4}
                    />
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={this.handleClose}
                      className={classes.dialogButton}
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={this.handleClose}
                      className={classes.dialogButton}
                      type="submit"
                      value="Send"
                    >
                      Send
                    </Button>
                  </DialogActions>
                </Dialog>
              </p>
              <div
                className={
                  this.state.darkMode
                    ? classes.socialIconsContainerLight
                    : classes.socialIconsContainer
                }
              >
                <div className={classes.linkedinSocialIconContainer}>
                  <a
                    href="https://www.linkedin.com/in/brunoreyes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      this.state.darkMode
                        ? classes.hrefLinkLight
                        : classes.hrefLink
                    }
                  >
                    <LinkedInIcon className={classes.linkedinSocialIcons} />
                  </a>
                </div>
                <div>
                  <a
                    href="https://medium.com/@bruno619reyes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      this.state.darkMode
                        ? classes.hrefLinkLight
                        : classes.hrefLink
                    }
                  >
                    <img
                      src="/social_media_logo_medium-512.png"
                      alt="medium logo"
                      className={classes.mediumIcon}
                    ></img>
                  </a>
                </div>
                <div>
                  {' '}
                  <a
                    href="https://github.com/brunoreyes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      this.state.darkMode
                        ? classes.hrefLinkLight
                        : classes.hrefLink
                    }
                  >
                    <GitHubIcon className={classes.githubSocialIcons} />
                  </a>
                </div>
                <div>
                  {this.state.darkMode ? (
                    <WbSunnyIcon
                      onClick={this.toggleDarkMode}
                      className={classes.darkModeIcon}
                    />
                  ) : (
                    <Brightness3Icon
                      onClick={this.toggleDarkMode}
                      className={classes.darkModeIcon}
                    />
                  )}
                </div>
              </div>{' '}
            </Fade>
          </Grid>
          <Grid
            item
            className={classes.contentRight}
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={8}
          ></Grid>
          {/* <Grid
            item
            className={classes.contentRight}
            xs={0}
            sm={0}
            md={0}
            lg={0}
          >
            {this.state.darkMode ? (
              <img
                alt="Bruno Reyes"
                src="images/bruno_9452.jpg"
                className={classes.profilePicture}
                // onClick={this.toggleDarkMode}
              ></img>
            ) : (
              <img
                alt="Bruno Reyes Logo"
                className={classes.logoPicture}
                // onClick={this.toggleDarkMode}
                src="https://tinyurl.com/yxnwsqfk"
              ></img>
            )}

            <h1
              className={
                this.state.darkMode
                  ? classes.projectsHeaderLight
                  : classes.projectsHeader
              }
            >
              Projects
            </h1>

            <div className={classes.GridListRoot}>
              <GridList
                cols={1.5}
                cellHeight={'90%'}
                className={
                  this.state.darkMode ? classes.gridListLight : classes.gridList
                }
              >
                <GridListTile className={classes.gridListTile}>
                  <div className={classes.projectContainerOne}> */}
          {/* <Fade up when={this.state.show1}>
                      <h3
                        className={
                          this.state.darkMode
                            ? classes.projectTitleLight
                            : classes.projectTitle
                        }
                      >
                        UNiQUE
                      </h3>
                      </Fade>*/}
          {/* <div className={classes.imageTextContainer}> */}
          {/* <img
                      alt="unique mobile app"
                      className={
                        this.state.darkMode
                          ? classes.projectPictureLightMobile
                          : classes.projectPictureMobile
                      }
                      onClick={this.toggleProjectText1}
                      src="https://tinyurl.com/y2j2nmu6"
                    ></img>

                    <Fade down when={this.state.show1}>
                      <h3
                        className={
                          this.state.darkMode
                            ? classes.projectTitleLight
                            : classes.projectTitle
                        }
                      >
                        UNiQUE
                      </h3>
                      <p
                        className={
                          this.state.darkMode
                            ? classes.projectDescriptionLightMobile
                            : classes.projectDescriptionMobile
                        }
                      >
                        Unique is a mobile/desktop education app that allows
                        users to engage with content and admins to download data
                        and continuously modify content.
                      </p>
                    </Fade>
                    <a
                      href="https://github.com/brunoreyes/TODO-app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.hrefLink}
                    >
                      <Button
                        variant="contained" */}
          {/* // color="primary"
                        className={
                          this.state.darkMode
                            ? classes.buttonLight
                            : classes.button
                        }
                        endIcon={
                          <GitHubIcon className={classes.projectSocialIcon}>
                            <span className={classes.buttonText}>Explore</span>
                          </GitHubIcon>
                        }
                      >
                        Explore
                      </Button>
                    </a>
                  </div>
                </GridListTile>
                <GridListTile className={classes.gridListTile}>
                  <div className={classes.projectContainerOne}>
                    <Fade up when={this.state.show2}>
                      <h3
                        className={
                          this.state.darkMode
                            ? classes.projectTitleLight
                            : classes.projectTitle
                        }
                      >
                        TODO
                      </h3>
                    </Fade> */}
          {/* <div className={classes.imageTextContainer}> */}
          {/* <img
                      alt="TODO app"
                      className={
                        this.state.darkMode
                          ? classes.projectPictureLight
                          : classes.projectPicture
                      }
                      onClick={this.toggleProjectText2}
                      src="https://tinyurl.com/yxdammdx"
                    ></img> */}
          {/* <div className={classes.overlay}></div> */}
          {/* <Fade down when={this.state.show2}>
                      <p
                        className={
                          this.state.darkMode
                            ? classes.projectDescriptionLight
                            : classes.projectDescription
                        }
                      >
                        TODO, in Spanish meaning "all", manages all of a user's
                        tasks, reminders, ideas & memories.
                      </p>{' '}
                    </Fade>
                    <a
                      href="https://github.com/brunoreyes/TODO-app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classes.hrefLink}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        className={
                          this.state.darkMode
                            ? classes.buttonLight
                            : classes.button
                        }
                        endIcon={
                          <GitHubIcon className={classes.projectSocialIcon}>
                            <span className={classes.buttonText}>Explore</span>
                          </GitHubIcon>
                        }
                      >
                        Explore
                      </Button>{' '}
                    </a>
                  </div>
                </GridListTile> */}
          {/* <GridListTile className={classes.gridListTile}>
                  <div className={classes.projectContainerTwo}> */}
          {/* <Paper elevation={3} className={classes.projectPaper}> */}
          {/* <h3 className={classes.projectTitle}>
                      Server-Side Calculator
                    </h3>
                    <div className={classes.imageTextContainer}>
                      <img
                        className={classes.projectPicture}
                        src="https://tinyurl.com/yyu4pp2p"
                        alt="Server-Side Calculator"
                      ></img>
                      <div className={classes.overlay}>
                        <a
                          href="https://github.com/brunoreyes/TODO-app"
                          target="_blank"
                          alt="TODO app"
                          rel="noopener noreferrer"
                          className={classes.hrefLink}
                        >
                          {' '}
                          <div className={classes.imageText}>
                            View Project On
                            <GitHubIcon className={classes.projectSocialIcon} />
                          </div>
                        </a>
                      </div> */}
          {/* <p className={classes.projectDescription}>
                          Spanish for 'all', TODO is an application that
                          allows users to manage all of their tasks,
                          reminders, ideas, and memories.
                        </p> */}
          {/* </div> */}
          {/* </Paper> */}
          {/* </div>
                </GridListTile>

                <GridListTile cols={1}>
                  <div className={classes.projectContainerTwo}>
                    <img
                      className={classes.projectPicture}
                      src="https://tinyurl.com/yyu4pp2p"
                      alt="Server-Side Calculator"
                    ></img> */}
          {/* </Paper> */}
          {/* </div>
                </GridListTile>
                <GridListTile>
                  <div className={classes.projectContainerThree}>
                    <img
                      className={classes.projectPicture}
                      src="https://tinyurl.com/yyd7ffm7"
                      alt="Server-Side Calculator"
                    ></img>
                    {/* </Paper> */}
          {/* </div>
                </GridListTile>
              </GridList>
            </div>
          </Grid> */}{' '}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
