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

class HomePage extends Component {
  state = {
    darkMode: false,
    toggleLogo: false,
  };
  toggleDarkMode = () => {
    // console.log('You clicked the preview icon');
    this.setState({
      darkMode: !this.state.darkMode,
    });
  };
  toggleLogo = () => {
    // console.log('You clicked the preview icon');
    this.setState({
      toggleLogo: !this.state.toggleLogo,
    });
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
      <div className={classes.root}>
        <Grid
          container
          justify="space-around"
          className={
            this.state.darkMode ? classes.darkModeScreen : classes.lightMode
          }
          spacing={0}
        >
          <Grid item className={classes.content} xs={12} sm={12} md={12} lg={6}>
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
                <br></br> <br></br>I'm a mexican-american software developer at
                Prime Digital Academy based in the Twin Cities. I have created
                projects using React, Redux, Sagas, Node.js, Ajax, Express,
                PostgreSQL, SQL, jQuery, AWS S3, and CSS. Prior to my time in
                tech, I worked in UX and marketing for 3+ years, creating
                websites, social media platforms, branding kits, promotional
                campaigns, creative content, memos, and research reports. I
                chose to learn full-stack development to be able to build out my
                user-centered designs into fully functional applications and to
                learn how my designs affect developers and stakeholders alike.
                When I'm not creating or designing products I enjoy exploring
                and sharing ideas. <br></br> <br></br>
                Feel free to download my <span> </span>{' '}
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
                <span> </span> or send me an email at<span> </span>{' '}
                <a
                  href="mailto:bruno619reyes@gmail.com"
                  className={
                    this.state.darkMode
                      ? classes.underlineLight
                      : classes.underline
                  }
                >
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
                      className={classes.darkMode}
                    />
                  ) : (
                    <Brightness3Icon
                      onClick={this.toggleDarkMode}
                      className={classes.darkMode}
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
            md={12}
            lg={6}
          >
            <Fade>
              {this.state.darkMode ? (
                <img
                  alt="Bruno Reyes"
                  src="images/bruno_9452.jpg"
                  className={classes.profilePicture}
                  onClick={this.toggleDarkMode}
                ></img>
              ) : (
                <img
                  alt="Bruno Reyes Logo"
                  className={classes.logoPicture}
                  onClick={this.toggleDarkMode}
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
                {/* cellHeight controls the height of each tile */}
                <GridList
                  cols={1.5}
                  cellHeight={500}
                  className={
                    this.state.darkMode
                      ? classes.gridListLight
                      : classes.gridList
                  }
                >
                  <GridListTile className={classes.gridListTile}>
                    <div className={classes.projectContainerOne}>
                      {' '}
                      <h3
                        className={
                          this.state.darkMode
                            ? classes.projectTitleLight
                            : classes.projectTitle
                        }
                      >
                        TODO
                      </h3>
                      {/* <div className={classes.imageTextContainer}> */}
                      <img
                        alt="TODO app"
                        className={
                          this.state.darkMode
                            ? classes.projectPictureLight
                            : classes.projectPicture
                        }
                        src="https://tinyurl.com/yxdammdx"
                      ></img>
                      <div className={classes.overlay}></div>
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
                      <a
                        href="https://github.com/brunoreyes/TODO-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classes.hrefLink}
                      >
                        <Button
                          variant="contained"
                          color="primary"
                          className={classes.button}
                          className={
                            this.state.darkMode
                              ? classes.buttonLight
                              : classes.button
                          }
                          endIcon={
                            <GitHubIcon className={classes.projectSocialIcon}>
                              <span className={classes.buttonText}>
                                Explore
                              </span>
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

                      <h3 className={classes.projectTitle}>
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
                              <GitHubIcon
                                className={classes.projectSocialIcon}
                              />
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
            </Fade>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
