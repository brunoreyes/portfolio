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
// import WorkIcon from '@material-ui/icons/Work';
// import ImageIcon from '@material-ui/icons/Image';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
// import EmailIcon from '@material-ui/icons/Email';
import Fade from 'react-reveal/Fade';
import styles from '../themes/homeTheme';

class HorizontalScroll extends Component {
  state = {
    darkMode: false,
    toggleLogo: false,
    // show: false,
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    show6: false,
  };
  render() {
    const { classes } = this.props;
    // const triggerText = 'send a message';
    // const onSubmit = (event) => {
    //   event.preventDefault(event);
    //   console.log(event.target.name.value);
    //   console.log(event.target.email.value);
    // };

    return (
      <div className={classes.GridListRoot}>
        {/* cellHeight controls the height of each tile */}

        <GridList
          cols={1.5}
          cellHeight={540}
          className={
            this.state.darkMode ? classes.gridListLight : classes.gridList
          }
        >
          <GridListTile className={classes.gridListTile}>
            <div className={classes.projectContainerTwo}>
              <Fade up when={this.state.show1}>
                <h3
                  className={
                    this.state.darkMode
                      ? classes.projectTitleLight
                      : classes.projectTitle
                  }
                >
                  UNiQUE
                </h3>
              </Fade>
              {/* <div className={classes.imageTextContainer}> */}
              <img
                alt="unique mobile app"
                className={
                  this.state.darkMode
                    ? classes.projectPictureLightMobile
                    : classes.projectPictureMobile
                }
                onClick={this.toggleProjectText1}
                src="https://tinyurl.com/y2j2nmu6"
              ></img>
              <div className={classes.overlay}></div>
              <Fade down when={this.state.show1}>
                <p
                  className={
                    this.state.darkMode
                      ? classes.projectDescriptionLightMobile
                      : classes.projectDescriptionMobile
                  }
                >
                  Unique is a mobile/desktop education app that allows users to
                  engage with content and admins to download data and
                  continuously modify content.
                </p>
              </Fade>
              <a
                href="https://github.com/brunoreyes/TODO-app"
                target="_blank"
                rel="noopener noreferrer"
                className={classes.hrefLink}
              >
                <Button
                  variant="contained"
                  // color="primary"
                  className={
                    this.state.darkMode ? classes.buttonLight : classes.button
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
              </Fade>
              {/* <div className={classes.imageTextContainer}> */}
              <img
                alt="TODO app"
                className={
                  this.state.darkMode
                    ? classes.projectPictureLight
                    : classes.projectPicture
                }
                onClick={this.toggleProjectText2}
                src="https://tinyurl.com/yxdammdx"
              ></img>
              <div className={classes.overlay}></div>
              <Fade down when={this.state.show2}>
                <p
                  className={
                    this.state.darkMode
                      ? classes.projectDescriptionLight
                      : classes.projectDescription
                  }
                >
                  TODO, in Spanish meaning "all", manages all of a user's tasks,
                  reminders, ideas & memories.
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
                    this.state.darkMode ? classes.buttonLight : classes.button
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
          </GridListTile>

          <GridListTile className={classes.gridListTile}>
            <div className={classes.projectContainerTwo}>
              {/* <Paper elevation={3} className={classes.projectPaper}> */}

              <h3 className={classes.projectTitle}>Server-Side Calculator</h3>
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
                </div>
                {/* <p className={classes.projectDescription}>
                          Spanish for 'all', TODO is an application that
                          allows users to manage all of their tasks,
                          reminders, ideas, and memories.
                        </p> */}
              </div>
              {/* </Paper> */}
            </div>
          </GridListTile>

          <GridListTile cols={1}>
            <div className={classes.projectContainerTwo}>
              <img
                className={classes.projectPicture}
                src="https://tinyurl.com/yyu4pp2p"
                alt="Server-Side Calculator"
              ></img>
              {/* </Paper> */}
            </div>
          </GridListTile>
          <GridListTile>
            <div className={classes.projectContainerThree}>
              <img
                className={classes.projectPicture}
                src="https://tinyurl.com/yyd7ffm7"
                alt="Server-Side Calculator"
              ></img>
              {/* </Paper> */}
            </div>
          </GridListTile>
        </GridList>
      </div>
    );
  }
}

export default withStyles(styles)(HorizontalScroll);
