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
import ImageGallery from 'react-image-gallery';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

class MyGallery extends Component {
  render() {
    return <ImageGallery items={images} />;
  }
}
export default withStyles(styles)(MyGallery);
