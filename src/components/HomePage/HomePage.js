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
// import Flip from 'react-reveal/Flip';
// import Roll from 'react-reveal/Roll';
// import Zoom from 'react-reveal/Zoom';
// import LightSpeed from 'react-reveal/LightSpeed';
// import Spin from 'react-reveal/Spin';
// import Slide from 'react-reveal/Slide';

// import PersonIcon from '@material-ui/icons/Person';
// import { Container } from '../Container/Container';
import styles from '../themes/homeTheme';
// import Image from 'material-ui-image';

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
              Hola, I'm Bruno.{' '}
              <Fade top>
                <img
                  alt="Bruno Reyes profile"
                  src="images/bruno_9452.jpg"
                  className={classes.profilePicture}
                ></img>
              </Fade>
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
                  {' '}
                  <a
                    href="https://github.com/brunoreyes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.hrefLink}
                  >
                    <GitHubIcon className={classes.githubSocialIcons} />
                  </a>
                </div>

                <div className={classes.linkedinSocialIconContainer}>
                  {' '}
                  <a
                    href="https://www.linkedin.com/in/brunoreyes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.hrefLink}
                  >
                    <LinkedInIcon className={classes.linkedinSocialIcons} />{' '}
                  </a>
                </div>
                <div>
                  {' '}
                  <Brightness3Icon className={classes.darkMode} />
                  <WbSunnyIcon className={classes.darkMode} />
                </div>
              </div>
            </Fade>{' '}
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
                cellHeight={500}
                className={classes.gridList}
              >
                <GridListTile className={classes.gridListTile}>
                  <div className={classes.projectContainerOne}>
                    {' '}
                    <h3 className={classes.projectTitle}>TODO</h3>
                    {/* <div className={classes.imageTextContainer}> */}
                    <img
                      alt="TODO app"
                      className={classes.projectPicture}
                      src="https://tinyurl.com/yxdammdx"
                    ></img>
                    <div className={classes.overlay}></div>
                    <p className={classes.projectDescription}>
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
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(HomePage);
