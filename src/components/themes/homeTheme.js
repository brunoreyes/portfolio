const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  darkModeScreen: {
    backgroundColor: '#262a30',
  },
  lightMode: { backgroundColor: 'white' },
  contentRight: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    'text-align': 'center',
  },
  introduction: {
    'text-align': 'left',
    color: '#262a30',
    font: '500 300% Montserrat, sans-serif',
    padding: '0px 20px 10px 20px',
    marginTop: '10px',
  },
  introductionLight: {
    'text-align': 'left',
    color: 'white',
    font: '500 300% Montserrat, sans-serif',
    padding: '0px 20px 10px 20px',
    marginTop: '10px',
  },
  story: {
    color: '#262a30',
    font: '500 22px Hind, sans-serif',
    padding: '0px 20px 0px 20px',
    marginTop: '-80px',
    'text-align': 'left',
  },
  storyLight: {
    color: 'white',
    font: '500 22px Hind, sans-serif',
    padding: '0px 20px 0px 20px',
    marginTop: '-80px',
    'text-align': 'left',
  },
  socialIconsContainer: {
    color: '#252525',
    width: 'fit-content',
    height: '30px',
    margin: '-60px auto 10px auto',
    bottom: 10,
    display: 'flex',
    'text-align': 'center',
    '&:hover > div': {
      opacity: 0.5,
      transition: '.5s',
      position: 'relative',
    },
    '&:hover > div:hover': {
      opacity: 1,
      transition: '.5s',
      position: 'relative',
    },
  },
  socialIconsContainerLight: {
    color: 'white',
    width: 'fit-content',
    height: '30px',
    margin: '-60px auto 10px auto',
    bottom: 10,
    display: 'flex',
    'text-align': 'center',
    '&:hover > div': {
      opacity: 0.5,
      transition: '.5s',
      position: 'relative',
    },
    '&:hover > div:hover': {
      opacity: 1,
      transition: '.5s',
      position: 'relative',
    },
  },
  linkedinSocialIconContainer: { marginTop: '-4px' },
  githubSocialIcons: {
    'font-size': '30px',
    display: 'inline-block',
    margin: '0px 5px',
  },
  linkedinSocialIcons: {
    'font-size': '40px',
    display: 'inline-block',
  },
  mediumIcon: {
    width: '30px',
    display: 'inline-block',
    filter:
      'invert(0%) sepia(30%) saturate(60%) hue-rotate(100deg) brightness(100%) contrast(118%)',
  },
  darkMode: {
    'font-size': '35px',
    display: 'inline-block',
    transform: 'rotate(45deg)',
  },
  profilePicture: {
    width: '15%',
    'border-radius': 5,
    // 'text-align': 'left',
    // border: '#252525 solid 3px',
    // 'box-shadow': ' 5px 5px 5px -5px #252525',
    margin: '0px 0px 0px 0px',
  },
  logoPicture: {
    width: '15%',

    margin: '0px 0px 0px 0px',
    'border-radius': '5px',
  },
  projectsHeader: {
    color: '#262a30',
    padding: '0px 20px 0px 20px',
    font: '500 50px Montserrat, sans-serif',
    margin: '0px',
  },
  projectsHeaderLight: {
    color: 'white',
    padding: '0px 20px 0px 20px',
    font: '500 50px Montserrat, sans-serif',
    margin: '0px',
  },
  underline: {
    'text-decoration': 'underline',
    color: '#262a30',
    '&:hover': {
      color: '#34a1fd',
      transition: '.5s',
    },
  },
  underlineLight: {
    'text-decoration': 'underline',
    color: 'white',
    '&:hover': {
      color: '#34a1fd',
      transition: '.5s',
    },
  },

  projectContainerOne: {
    margin: '100px 0px 20px 0px',
    padding: '10px 20px 0px 20px',
  },
  projectContainerTwo: {
    margin: '40px 0px 20px 0px',
    padding: '10px 20px 0px 20px',
  },
  projectContainerThree: {
    margin: '-40px 0px 20px 0px',
    padding: '10px 20px 0px 20px',
  },

  projectPicture: {
    width: '100%',
    'box-shadow': '0px 4px 6px 0px',
  },
  projectPictureLight: {
    width: '100%',
    'box-shadow': '0px 1px 6px 0px #fff',
  },
  hrefLink: {
    'text-decoration': 'none',
    color: '#262a30',
  },
  hrefLinkLight: {
    'text-decoration': 'none',
    color: 'white',
  },
  projectSocialIcon: { 'font-size': '35px', padding: '1px 0px 1px 0px' },
  projectTitle: {
    font: '600 22px Montserrat, sans-serif',
    margin: '30px 0px 0px 0px',
    padding: '10px 20px 10px 20px',
    color: '#262a30',
  },
  projectDescription: {
    padding: '0px 10px 0px 10px',
    marginTop: '10px',
    font: '400 16px Hind, sans-serif',
    'text-align': 'center',
    color: '#262a30',
  },
  projectTitleLight: {
    font: '600 22px Montserrat, sans-serif',
    margin: '30px 0px 0px 0px',
    padding: '10px 20px 10px 20px',
    color: 'white',
  },
  projectDescriptionLight: {
    padding: '0px 10px 0px 10px',
    marginTop: '10px',
    font: '400 16px Hind, sans-serif',
    'text-align': 'center',
    color: 'white',
  },
  //   projectPaper: {
  //     'border-radius': '0px',
  //     '&:hover': {
  //       opacity: 1,
  //       backgroundColor: 'white',
  //     },
  //     'overflow-y': 'hidden',
  //     width: 'fit-content',
  //   },
  button: {
    'text-align': 'center',
    position: 'absolute',
    padding: '7px 12px 7px 12px',
    top: '93%',
    left: '50%',
    'border-radius': 3,
    transform: 'translate(-50%, -50%)',
    margin: 'auto',
    color: 'white',
    font: '500 16px Montserrat, sans-serif',
    'text-transform': 'capitalize',
    backgroundColor: '#262b2f',
    '&:hover': {
      transition: '.5s',
      // color: '#34a1fd',
      backgroundColor: '#34a1fd',
    },
  },
  buttonLight: {
    'text-align': 'center',
    position: 'absolute',
    padding: '7px 12px 7px 12px',
    top: '93%',
    left: '50%',
    'border-radius': 3,
    transform: 'translate(-50%, -50%)',
    margin: 'auto',
    color: '#262b2f',
    font: '500 16px Montserrat, sans-serif',
    'text-transform': 'capitalize',
    backgroundColor: 'white',
    '&:hover': {
      transition: '.5s',
      // color: '#34a1fd',
      backgroundColor: '#34a1fd',
    },
  },
  //   buttonText: { margin: '-10px' },

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
  gridListLight: {
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
      backgroundColor: '#000',
      // 'border-radius': '5px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'white',
      // 'border-radius': '5px',
    },
  },
  formContainer: {
    font: '400 15px Hind, sans-serif',
    'text-transform': 'lowercase',
  },
});
export default styles;
