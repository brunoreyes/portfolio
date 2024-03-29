import React, { Component } from 'react';
import styles from '../themes/homeTheme';
import Fade from 'react-reveal/Fade';
import {
  withStyles,
  Button,
  Grid,
  GridList,
  GridListTile,
  IconButton,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  TextField,
} from '@material-ui/core';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
// import HomeIcon from '@material-ui/icons/Home';
// import EmailIcon from '@material-ui/icons/Email';

const projects = [
  {
    value: 1,
    title: 'UNiQUE',
    image: 'images/compressedRealmDesktopandMobile.png',
    description: `A mobile-friendly education app that allows users to engage with content, while admins
    download data and continuously modify content for users.`,
    demoLink: 'http://www.uniquerealmapp.com/',
    codeLink: 'https://github.com/brunoreyes/UNiQUE',
    tech:
      'React | Sagas | Redux | CSS | Express | Node | Passport | PostgreSQL',
  },
  {
    value: 2,
    title: 'MIVI',
    image: 'images/mivi.png',
    description: ` A movie app that allows users to view a list of movies and their associated genres, descriptions & trailers while Admins can edit and update all of the above! `,
    demoLink: 'https://guarded-meadow-81558.herokuapp.com/#/',
    codeLink: 'https://github.com/brunoreyes/movie-sagas-master',
    tech: 'React | Sagas | Redux | CSS | Express | Node  | PostgreSQL',
  },
  {
    value: 3,
    title: 'TODO',
    image: 'images/todoIdea.png',
    description: ` In Spanish meaning "all", manages all of a user's
    tasks, reminders, ideas & memories. Users can: add, delete, edit, remind, favorite, upload & check off! `,
    demoLink: '',
    codeLink: 'https://github.com/brunoreyes/TODO-app',
    tech:
      'AWS S3 | React | Sagas | Redux | CSS | Express | Node | Passport | PostgreSQL',
  },
  {
    value: 4,
    title: 'Calculator & Log',
    image: 'images/compressedCalculator.png',
    description: ` A calculator inspired by Casio, that handles the standard mathematical operators (*,/,-,+), clearing out inputs, and generating an updated log of calculations. `,
    demoLink: '',
    codeLink: 'https://github.com/brunoreyes/jQuery-server-side-calculator-',
    tech: 'jQuery | JavaScript | HTML | CSS | Express | Node ',
  },
  {
    value: 5,
    title: 'DATA METRIKA',
    image: 'images/compressedDataM.png',
    description:
      'A mobile-friendly website for a multidisciplinary consulting firm specializing in data analytics where users can contact DM or browse services and industries',
    demoLink: 'https://www.datametrikacg.com/',
    codeLink: '',
    tech: 'HTML | CSS | WordPress | DreamHost | WP Mailer ',
  },
  {
    value: 6,
    title: 'AMARE',
    image: ' images/compressedAmare.png',
    description:
      'A complete website redesign for Amare, a watch manufacturer that wanted to sell minimalistic luxury products at an affordable price.',
    demoLink: 'https://invis.io/5DNU9QWEX2U#/283373278_HOME',
    codeLink: '',
    tech: 'Sketch | Invision ',
  },
  {
    value: 7,
    title: 'Pi',
    image: ' images/pi.png',
    description:
      'Pi, a pizza store web app that allows users to spin, add, and delete pizzas from their cart, input customer info, place orders and place in a ticketing line until ready.',
    demoLink: '',
    codeLink: 'https://github.com/brunoreyes/Pi',
    tech: 'React | JavaScript | HTML | Sass | CSS | Express | Node ',
  },
  {
    value: 8,
    title: 'STATE',
    image: ' images/compressedState.png',
    description:
      'A budgeting tool that helps you keep track of income and expenses with a bar chart to compare the two, and pie charts to view your biggest transactions.',
    demoLink: 'http://nameless-meadow-96758.herokuapp.com/',
    codeLink: 'https://github.com/brunoreyes/react-budget-app',
    tech: 'React | JavaScript | HTML | CSS | Node ',
  },
  // {
  //   value: 8,
  //   title: 'STATE',
  //   image: ' images/unnamed.png', 1418 * 726
  //   description: 'Currently Under Maintenance',
  //   demoLink: '',
  //   codeLink: '',
  //    tech: 'React | JavaScript | HTML | Sass | CSS | Express | Node ',
  // },
];
const darkResult = window.matchMedia('(prefers-color-scheme: dark)');
class HomePage extends Component {
  state = {
    darkMode: false,
    messageMode: false,
    sentMode: false,
    projectMode: false,
  };

  componentDidMount() {
    // Checking user's dark/light theme preference using variable darkResult created above
    if (darkResult.matches === true) {
      this.setState({ darkMode: true });
    } else {
      this.setState({ darkMode: false });
    }
  }
  toggleDarkMode = () => {
    // console.log('You clicked the preview icon');
    this.setState({
      darkMode: !this.state.darkMode,
    });
  };
  handleMessageToggle = () => {
    this.setState({ messageMode: !this.state.messageMode });
  };
  handleProjectToggle = () => {
    this.setState({ projectMode: !this.state.projectMode });
  };
  handleClose = () => {
    this.setState({ messageMode: false });
  };
  handleSend = () => {
    this.setState({ sentMode: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <div
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
            item
            xs={12}
            sm={12}
            md={this.state.projectMode ? 12 : 6}
            lg={this.state.projectMode ? 12 : 6}
            xl={this.state.projectMode ? 12 : 4}
            alignItems="center"
            justify="center"
            align={this.state.projectMode ? 'center' : <></>}
          >
            {' '}
            <Fade>
              {' '}
              {this.state.messageMode || this.state.projectMode ? (
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
                        // src="images/brLogo.png"
                        src="images/compressedHeadshot.jpg"
                        className={classes.logoPictureLight}
                        onClick={this.toggleDarkMode}
                      ></img>
                    ) : (
                      <img
                        alt="Bruno Reyes"
                        className={classes.logoPicture}
                        src="images/compressedHeadshot.jpg"
                        onClick={this.toggleDarkMode}
                      ></img>
                    )}{' '}
                    {window.screen.width > 425 ? <></> : <br></br>}
                    Hola, {window.screen.width > 425 ? <></> : <br></br>}I'm
                    Bruno.{' '}
                  </h1>{' '}
                  <p
                    className={
                      this.state.darkMode ? classes.storyLight : classes.story
                    }
                  >
                    <br></br> <br></br>I am a full-stack software developer and
                    recent graduate of the University of Minnesota and Prime
                    Digital Academy. Prior to coding I held various roles within
                    UX for three years creating websites, strategy, and creative
                    content. I have developed projects using React, Redux,
                    Sagas, Node.js, Ajax, Express, Java, PostgreSQL, Python,
                    SQL, jQuery, AWS S3, and CSS. <br></br> <br></br>I enjoy
                    sketching out designs into apps that help engineers,
                    designers, stakeholders, and consumers. When I'm not
                    creating products, I like exploring and sharing ideas.{' '}
                    <br></br> <br></br>
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
                        onClick={this.handleMessageToggle}
                        title="Enter Messenger"
                      >
                        Say Hola
                      </Button>
                    )}
                    <Button
                      className={
                        this.state.darkMode
                          ? classes.projectsButtonLightRight
                          : classes.projectsButtonRight
                      }
                      onClick={this.handleProjectToggle}
                    >
                      Projects
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
                        <LinkedInIcon
                          className={classes.linkedinSocialIcons}
                          title="Bruno Reyes Linkedin Profile"
                        />
                      </a>
                    </div>
                    {/* Removed Medium */}
                    {/* <div>
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
                          title="Bruno Reyes Medium Profile"
                        ></img>
                      </a>
                    </div> */}
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
                        <GitHubIcon
                          className={classes.githubSocialIcons}
                          title="Bruno Reyes Github Profile"
                        />
                      </a>
                    </div>
                    <div>
                      {this.state.darkMode ? (
                        <WbSunnyIcon
                          onClick={this.toggleDarkMode}
                          className={classes.darkModeIcon}
                          title="Light Mode"
                        />
                      ) : (
                        <Brightness3Icon
                          onClick={this.toggleDarkMode}
                          className={classes.darkModeIcon}
                          title="Dark Mode"
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
                    </span>{' '}
                    <Button
                      onClick={this.handleClose}
                      className={
                        this.state.darkMode
                          ? classes.formButtonExitLight
                          : classes.formButtonExit
                      }
                      title="Exit Messenger"
                    >
                      X
                    </Button>
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
                        className="honeypot-field"
                        hidden
                      />
                    </div>
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
              <div style={this.state.projectMode ? {} : { display: 'none' }}>
                <div>
                  {' '}
                  <div>
                    {' '}
                    {/* <div className={classes.projectButtonsContainer}> */}
                    {/* <IconButton aria-label="demo">
                        <HomeIcon
                          className={
                            this.state.darkMode
                              ? classes.projectDemoIconLight
                              : classes.projectDemoIcon
                          }
                          title="Demo"
                        />
                      </IconButton>{' '}
                      <IconButton aria-label="demo">
                        <EmailIcon
                          className={
                            this.state.darkMode
                              ? classes.projectDemoIconLight
                              : classes.projectDemoIcon
                          }
                          title="Demo"
                        />
                      </IconButton>{' '}
                    </div> */}
                    <h1
                      className={
                        this.state.darkMode
                          ? classes.projectsHeaderLight
                          : classes.projectsHeader
                      }
                    >
                      Projects{' '}
                    </h1>
                    <GridList
                      cols={window.screen.width < 600 ? 1 : 2}
                      cellHeight={'12%'}
                      className={
                        this.state.darkMode
                          ? classes.gridListLight
                          : classes.gridList
                      }
                    >
                      {projects.map((project) => (
                        <GridListTile>
                          <div className={classes.tile}>
                            <Card
                              className={
                                this.state.darkMode
                                  ? classes.cardLight
                                  : classes.card
                              }
                            >
                              <CardActionArea
                                className={classes.actionArea}
                                classes={{
                                  root: classes.actionArea,
                                  focusHighlight: classes.focusHighlight,
                                }}
                              >
                                <CardMedia
                                  className={
                                    window.screen.width < 600
                                      ? classes.mediaMobile
                                      : classes.media
                                  }
                                  image={project.image}
                                  title={project.title}
                                />
                                <CardContent>
                                  <Typography
                                    className={
                                      this.state.darkMode
                                        ? classes.projectTitleLight
                                        : classes.projectTitle
                                    }
                                    gutterBottom
                                    variant="h5"
                                    component="h2"
                                  >
                                    {project.title}
                                  </Typography>
                                  <Typography
                                    className={
                                      this.state.darkMode
                                        ? classes.projectTechLight
                                        : classes.projectTech
                                    }
                                  >
                                    {project.tech}
                                  </Typography>
                                  <Typography
                                    component="p"
                                    className={
                                      this.state.darkMode
                                        ? classes.projectDescriptionLight
                                        : classes.projectDescription
                                    }
                                  >
                                    {project.description}
                                  </Typography>{' '}
                                  <br></br>
                                </CardContent>
                              </CardActionArea>
                              <CardActions>
                                {project.demoLink ? (
                                  <a
                                    href={project.demoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={
                                      this.state.darkMode
                                        ? classes.hrefLinkLight
                                        : classes.hrefLink
                                    }
                                  >
                                    <IconButton aria-label="demo">
                                      <PlayCircleFilledIcon
                                        className={
                                          this.state.darkMode
                                            ? classes.projectDemoIconLight
                                            : classes.projectDemoIcon
                                        }
                                        title="Demo"
                                      />
                                    </IconButton>{' '}
                                  </a>
                                ) : (
                                  <></>
                                )}
                                {project.codeLink ? (
                                  <a
                                    href={project.codeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={
                                      this.state.darkMode
                                        ? classes.hrefLinkLight
                                        : classes.hrefLink
                                    }
                                  >
                                    <IconButton aria-label="Share">
                                      <GitHubIcon
                                        className={
                                          this.state.darkMode
                                            ? classes.projectCodeIconLight
                                            : classes.projectCodeIcon
                                        }
                                        title="View Code"
                                      />
                                    </IconButton>{' '}
                                  </a>
                                ) : (
                                  <></>
                                )}
                              </CardActions>
                            </Card>
                          </div>
                        </GridListTile>
                      ))}
                    </GridList>
                  </div>{' '}
                </div>
                <div className={classes.projectButtonsContainer}>
                  <Button
                    className={
                      this.state.darkMode
                        ? classes.projectHomeButtonLight
                        : classes.projectHomeButton
                    }
                    onClick={this.handleProjectToggle}
                  >
                    Home
                  </Button>
                  <Button
                    className={
                      this.state.darkMode
                        ? classes.projectMessageButtonLight
                        : classes.projectMessageButton
                    }
                    onClick={() => {
                      this.handleMessageToggle();
                      this.handleProjectToggle();
                    }}
                  >
                    Say Hola
                  </Button>
                </div>
              </div>
            </Fade>
          </Grid>
          {this.state.messageMode || this.state.projectMode ? (
            <></>
          ) : (
            <Grid item xs={12} sm={12} md={6} lg={6} xl={8}></Grid>
          )}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
