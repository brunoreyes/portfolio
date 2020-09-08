const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    'text-align': 'center',
  },
  introduction: {
    'text-align': 'left',
    color: '#262a30',
    font: '500 55px Montserrat, sans-serif',
    padding: '0px 20px 20px 20px',
    marginTop: '10px',
  },
  profilePicture: {
    width: '20%',
    'border-radius': 120,
    // border: '#252525 solid 3px',
    'box-shadow': ' 5px 5px 5px -5px #252525',
    margin: '-10px 10px -50px 10px',
  },
  story: {
    color: '#262a30',
    font: '500 22px Hind, sans-serif',

    padding: '0px 20px 0px 20px',
    marginTop: '-80px',
    'text-align': 'left',
  },
  socialIconsContainer: {
    color: '#252525',
    width: 'fit-content',
    height: '30px',
    // margin: '-50px 00px 10px 20px',
    margin: '-60px auto 10px auto',
    bottom: 10,
    // left: '25%',

    // position: 'absolute',
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
  },
  linkedinSocialIcons: {
    'font-size': '40px',
    display: 'inline-block',
  },
  darkMode: {
    'font-size': '35px',
    display: 'inline-block',
    transform: 'rotate(45deg)',
  },
  projectsHeader: {
    color: '#262a30',

    padding: '70px 20px 0px 20px',
    font: '500 50px Montserrat, sans-serif',
  },
  logoPicture: {
    width: '35px',
    margin: '0px 10px 0px 0px',
    'border-radius': '3px',
  },
  underline: {
    'text-decoration': 'underline',
    color: '#262a30',
    '&:hover': {
      color: '#34a1fd',
      transition: '.5s',
    },
  },
  gridListTile: {
    color: '262a30',
    '&:hover': {
      //   backgroundColor: 'white',
    },
  },
  projectContainerOne: {
    margin: '100px 0px 20px 0px',
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
    margin: '40px 0px 20px 0px',
    padding: '10px 20px 0px 20px',
  },
  projectContainerThree: {
    margin: '-40px 0px 20px 0px',
    padding: '10px 20px 0px 20px',
  },
  //   imageTextContainer: {
  //     '&:hover > div': {
  //       opacity: 1,
  //     },
  // position: 'relative',
  // width: '50%',
  //   },
  projectPicture: {
    width: '100%',
    'box-shadow': '0px 4px 6px 0px',
  },
  //   overlay: {
  //     position: 'absolute',
  //     top: 0,
  //     bottom: 0,
  //     left: '0',
  //     right: '0',
  //     height: '100%',
  //     width: '100%',
  //     opacity: '0',
  //     transition: '.5s ease',
  //     // 'background-color': '#252525',
  //     'background-color': 'white',
  //     padding: '0px 0px 0px 0px',
  //   },
  //   imageText: {
  //     // color: 'white',
  //     color: '#252525',
  //     font: '500 22px Montserrat, sans-serif',
  //     position: 'absolute',
  //     top: '50%',
  //     left: '50%',
  //     transform: 'translate(-50%, -50%)',
  //     // 'text-align': 'center',
  //     marginTop: '-5px',
  //   },
  hrefLink: {
    'text-decoration': 'none',
    color: '#262a30',
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
  formContainer: {
    font: '400 15px Hind, sans-serif',
    'text-transform': 'lowercase',
  },
});
export default styles;
