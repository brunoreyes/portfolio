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
  // Hidden,
} from '@material-ui/core';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Fade from 'react-reveal/Fade';
import styles from '../themes/homeTheme';
import TextField from '@material-ui/core/TextField';
// import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

class HomePage extends Component {
  state = {
    darkMode: false,
    toggleLogo: true,
    form: false,
    messageMode: false,
    sentMode: false,
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
  turnOffDarkMode = () => {
    // console.log('You clicked the preview icon');
    this.setState({
      darkMode: false,
    });
  };
  // toggleModal = () => {
  //   // console.log('You clicked the preview icon');
  //   this.setState({
  //     modal: !this.state.modal,
  //   });
  // };

  handleClickOpen = () => {
    this.setState({ messageMode: !this.state.messageMode });
  };

  handleClose = () => {
    this.setState({ messageMode: false });
    console.log('cancel');
  };
  handleSend = () => {
    this.setState({ sentMode: true });
    console.log('sent');
  };

  toggleLogo = () => {
    // console.log('You clicked the preview icon');
    this.setState({
      toggleLogo: !this.state.toggleLogo,
    });
  };
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

    return (
      <div
        // className={classes.root}
        className={this.state.darkMode ? classes.darkModeRoot : classes.root}
      >
        <Grid
          container
          justify="space-around"
          className={
            this.state.darkMode && this.state.messageMode
              ? classes.darkModeMessage
              : this.state.darkMode
              ? classes.darkMode
              : classes.lightMode
          }
          spacing={0}
        >
          <Grid
            className={classes.content}
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={4}
          >
            {' '}
            <Fade>
              {' '}
              {this.state.messageMode ? (
                <></>
              ) : (
                <>
                  {' '}
                  <h1
                    className={
                      this.state.darkMode
                        ? classes.introductionLight
                        : classes.introduction
                    }
                  >
                    {' '}
                    {this.state.darkMode ? (
                      <img
                        alt="Bruno Reyes"
                        // src="images/bruno_9452.jpg"
                        src="https://tinyurl.com/y5aqqxzj"
                        className={classes.logoPictureLight}
                        onClick={this.toggleDarkMode}
                      ></img>
                    ) : (
                      <img
                        alt="Bruno Reyes Logo"
                        className={classes.logoPicture}
                        src="images/bruno_9452.jpg"
                        // src="https://tinyurl.com/y5aqqxzj"
                        onClick={this.toggleDarkMode}
                      ></img>
                    )}{' '}
                    {/* I uploaded images via the images folder and accessed their links through Github */}
                    Hola, {window.screen.width > 425 ? <></> : <br></br>}I'm
                    Bruno.{' '}
                  </h1>{' '}
                  <p
                    className={
                      this.state.darkMode ? classes.storyLight : classes.story
                    }
                  >
                    <br></br> <br></br>I'm a Mexican-American full-stack
                    software developer and recent graduate of the University of
                    Minnesota and Prime Digital Academy. Prior to coding I held
                    various roles within UX for four years creating websites,
                    reports, and creative content. <br></br> <br></br>I enjoy
                    sketching out designs into apps that help engineers,
                    designers, stakeholders, and consumers. When I'm not
                    creating products, I like exploring and sharing ideas.{' '}
                    <br></br> <br></br>
                    Download my{' '}
                    {/* I have developed projects using React, Redux,
                    Sagas, Node.js, Ajax, Express, PostgreSQL, SQL, jQuery, AWS
                    S3, and CSS.  */}
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
                    <span> </span> or say hola at
                    <span> </span>
                    bruno619reyes@gmail.com
                    <br></br>
                    if you have any questions or want to set up a time to chat.
                    <br></br>
                    {this.state.sentMode ? (
                      <Fade>
                        <p
                          className={
                            this.state.darkMode
                              ? classes.sentMessageLight
                              : classes.sentMessage
                          }
                        >
                          Your message has been successfully sent <br></br> and
                          will be responded to shortly.
                        </p>
                      </Fade>
                    ) : (
                      <Button
                        className={
                          this.state.darkMode
                            ? classes.projectsButtonLight
                            : classes.projectsButton
                        }
                        onClick={this.handleClickOpen}
                      >
                        Say Hola
                      </Button>
                    )}
                    {/* <br></br> */}
                    <Button
                      className={
                        this.state.darkMode
                          ? classes.projectsButtonLightRight
                          : classes.projectsButtonRight
                      }
                      onClick={this.handleClickOpen}
                    >
                      See Apps
                    </Button>
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
                          src="https://tinyurl.com/yx96xdko"
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
                  </div>
                </>
              )}
              <div style={this.state.messageMode ? {} : { display: 'none' }}>
                <div className={classes.form}>
                  <form
                    onSubmit={this.sendEmail}
                    className="gform "
                    method="POST"
                    data-email="bruno619reyes@gmail.com"
                    action="https://script.google.com/macros/s/AKfycbxtcbHlRFTg6H0rcFU2dNnHZNdyabfR3uKLE7Tv06TyA71Cy6Y/exec"
                  >
                    {' '}
                    <span
                      className={
                        this.state.darkMode
                          ? classes.formTitleLight
                          : classes.formTitle
                      }
                    >
                      Let's Chat
                    </span>
                    <div className="form-elements" id="form-elements">
                      <TextField
                        autoFocus
                        margin="dense"
                        label={
                          <span
                            className={
                              this.state.darkMode
                                ? classes.formLabelsLight
                                : classes.formLabels
                            }
                          >
                            Email Address
                          </span>
                        }
                        name="email"
                        id="email"
                        type="email"
                        fullWidth
                        variant="outlined"
                        className="pure-group"
                        InputProps={
                          this.state.darkMode
                            ? {
                                classes: {
                                  input: classes.inputLight,

                                  notchedOutline: classes.notchedOutlineLight,
                                },
                              }
                            : {
                                classes: {
                                  input: classes.input,
                                  notchedOutline: classes.notchedOutline,
                                },
                              }
                        }
                      />
                      <TextField
                        autoFocus
                        margin="dense"
                        label={
                          <span
                            className={
                              this.state.darkMode
                                ? classes.formLabelsLight
                                : classes.formLabels
                            }
                          >
                            Name
                          </span>
                        }
                        id="name"
                        name="name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        className="pure-group"
                        InputProps={
                          this.state.darkMode
                            ? {
                                classes: {
                                  input: classes.inputLight,
                                  notchedOutline: classes.notchedOutlineLight,
                                },
                              }
                            : {
                                classes: {
                                  input: classes.input,
                                  notchedOutline: classes.notchedOutline,
                                },
                              }
                        }
                      />
                      <TextField
                        autoFocus
                        variant="outlined"
                        margin="dense"
                        label={
                          <span
                            className={
                              this.state.darkMode
                                ? classes.formLabelsLight
                                : classes.formLabels
                            }
                          >
                            Message
                          </span>
                        }
                        name="message"
                        id="message"
                        type="text"
                        fullWidth
                        multiline
                        rows={4}
                        className="pure-group"
                        InputProps={
                          this.state.darkMode
                            ? {
                                classes: {
                                  input: classes.inputLight,
                                  notchedOutline: classes.notchedOutlineLight,
                                },
                              }
                            : {
                                classes: {
                                  input: classes.input,
                                  notchedOutline: classes.notchedOutline,
                                },
                              }
                        }
                      />
                      <input
                        id="honeypot"
                        type="text"
                        name="honeypot"
                        className="pure-group honeypot-field"
                        hidden
                      />
                      {/* {JSON.stringify(this.props.task.id)} */}
                    </div>
                    {/* </DialogContent> */}
                    {/* <DialogActions> */}
                    <div className={classes.formButtonContainer}>
                      <Button
                        onClick={this.handleClose}
                        className={
                          this.state.darkMode
                            ? classes.formButtonLight
                            : classes.formButton
                        }
                      >
                        Cancel
                      </Button>
                      <Button
                        onClick={() => {
                          this.handleClose();
                          this.handleSend();
                        }}
                        className={
                          this.state.darkMode
                            ? classes.formButtonRightLight
                            : classes.formButtonRight
                        }
                        type="submit"
                        value="Send"
                      >
                        Send
                      </Button>
                    </div>
                  </form>
                  <script
                    data-cfasync="false"
                    type="text/javascript"
                    src="formSubmissionHandler.js"
                  ></script>
                </div>
              </div>
            </Fade>
          </Grid>
          {/* {this.state.messageMode ? (
            <></>
          ) : ( */}
          <Grid
            item
            className={classes.emptyRight}
            xs={12}
            sm={12}
            md={6}
            lg={6}
            xl={8}
          >
            <div></div>
          </Grid>
          {/* )} */}
          {this.state.toggleLogo ? (
            <></>
          ) : (
            <div>
              <Grid
                item
                className={classes.contentRight}
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
              >
                {/* <div> */}
                {/* <Fade> */}
                {this.state.darkMode ? (
                  <img
                    alt="Bruno Reyes Logo"
                    className={classes.logoPicture}
                    src="images/bruno_9452.jpg"
                    // src="https://tinyurl.com/y5aqqxzj"
                    onClick={this.toggleDarkMode}
                  ></img>
                ) : (
                  <img
                    alt="Bruno Reyes"
                    // src="images/bruno_9452.jpg"
                    src="https://tinyurl.com/y5aqqxzj"
                    className={classes.logoPicture}
                    onClick={this.toggleDarkMode}
                  ></img>
                )}{' '}
                {/* </Fade> */}
                {/* </div> */}
                {/* <h1
                className={
                  this.state.darkMode
                    ? classes.projectsHeaderLight
                    : classes.projectsHeader
                }
              >
                Projects{' '}
              </h1> */}
                <div className={classes.GridListRoot}>
                  <GridList
                    cols={2}
                    cellHeight={'10%'}
                    className={
                      this.state.darkMode
                        ? classes.gridListLight
                        : classes.gridList
                    }
                  >
                    {/* <GridListTile className={classes.gridListTile}>
                    <div className={classes.projectContainerOne}>
                      <Fade up when={this.state.show1}>
                        <h3
                          className={
                            this.state.darkMode
                              ? classes.projectTitleLight
                              : classes.projectTitle
                          }
                        >
                          {/* UNiQUE */}
                    {/* </h3>
                      </Fade>

                      <img
                        alt="unique mobile app"
                        className={
                          this.state.darkMode
                            ? classes.projectPictureLightMobile
                            : classes.projectPictureMobile
                        }
                        onClick={this.toggleProjectText1}
                        src="https://tinyurl.com/y2fr999y"
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
                          users to engage with content and admins to download
                          data and continuously modify content.
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
                          color="primary"
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
                        </Button>
                      </a>
                    </div>
                  </GridListTile> */}{' '}
                    {/* /
/
                    /
                    /
                    /BELOW ARE THE REAL ONES
                    /
                    / */}
                    <GridListTile className={classes.gridListTile}>
                      <div className={classes.testTile}>
                        {' '}
                        <img
                          alt="TODO app"
                          className={
                            this.state.darkMode
                              ? classes.projectPictureLight
                              : classes.projectPictureTest
                          }
                          onClick={this.toggleProjectText2}
                          src="https://tinyurl.com/y2mq5jwu"
                        ></img>
                        <div className={classes.imageTextContainer}>
                          {' '}
                          <div className={classes.imageText}>
                            <AllInclusiveIcon
                              className={classes.imageTextContainerIcon}
                            ></AllInclusiveIcon>
                            <span className={classes.imageTextContainerTitle}>
                              {' '}
                              TODO
                            </span>
                          </div>
                          <div
                            className={classes.imageTextContainerDescription}
                          >
                            In Spanish meaning "all", manages all of a user's
                            tasks, reminders, ideas & memories.
                          </div>
                        </div>
                      </div>
                      <div className={classes.projectButtonContainerTest}>
                        <a
                          href="https://github.com/brunoreyes/TODO-app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classes.hrefLink}
                        >
                          <button
                            variant="contained"
                            color="primary"
                            className={
                              this.state.darkMode
                                ? classes.buttonLight
                                : classes.buttonTest
                            }
                          >
                            <span className={classes.buttonText}>
                              View Demo{' '}
                            </span>
                          </button>
                        </a>
                        <a
                          href="https://github.com/brunoreyes/TODO-app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classes.hrefLink}
                        >
                          <button
                            variant="contained"
                            color="primary"
                            className={
                              this.state.darkMode
                                ? classes.buttonLight
                                : classes.buttonTest
                            }
                          >
                            <span className={classes.buttonText}>
                              View Code
                            </span>
                          </button>
                        </a>
                      </div>
                    </GridListTile>
                    <GridListTile className={classes.gridListTile}>
                      <div className={classes.testTile}>
                        {' '}
                        <img
                          alt="TODO app"
                          className={
                            this.state.darkMode
                              ? classes.projectPictureLight
                              : classes.projectPictureTest
                          }
                          onClick={this.toggleProjectText2}
                          src="https://tinyurl.com/y2mq5jwu"
                        ></img>
                        <div className={classes.imageTextContainer}>
                          {' '}
                          <div className={classes.imageText}>
                            <AllInclusiveIcon
                              className={classes.imageTextContainerIcon}
                            ></AllInclusiveIcon>
                            <span className={classes.imageTextContainerTitle}>
                              {' '}
                              TODO
                            </span>
                          </div>
                          <div
                            className={classes.imageTextContainerDescription}
                          >
                            In Spanish meaning "all", manages all of a user's
                            tasks, reminders, ideas & memories.
                          </div>
                        </div>
                      </div>
                      <div className={classes.projectButtonContainerTest}>
                        <a
                          href="https://github.com/brunoreyes/TODO-app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classes.hrefLink}
                        >
                          <button
                            variant="contained"
                            color="primary"
                            className={
                              this.state.darkMode
                                ? classes.buttonLight
                                : classes.buttonTest
                            }
                          >
                            <span className={classes.buttonText}>
                              View Demo{' '}
                            </span>
                          </button>
                        </a>
                        <a
                          href="https://github.com/brunoreyes/TODO-app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classes.hrefLink}
                        >
                          <button
                            variant="contained"
                            color="primary"
                            className={
                              this.state.darkMode
                                ? classes.buttonLight
                                : classes.buttonTest
                            }
                          >
                            <span className={classes.buttonText}>
                              View Code
                            </span>
                          </button>
                        </a>
                      </div>
                    </GridListTile>
                  </GridList>
                </div>
              </Grid>
            </div>
          )}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
