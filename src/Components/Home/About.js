import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import MediaCardHorizontal from '../Card/MediaCardHorizontal'
import Iframe from 'react-iframe'

const styles = theme => ({
  mainImage: {
    display: 'flex',
    width: '100%'
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: '40%',
  }
});

function About(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
          position="relative"
          width="100%"
          id="myId"
          height="100%"
          allowFullScreen/>
    </React.Fragment>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
