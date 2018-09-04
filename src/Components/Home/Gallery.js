import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import ImageGridList from '../Grid/ImageGridList'

const styles = theme => ({
});

function Gallery(props) {
  const { classes } = props;

  return (
    <ImageGridList></ImageGridList>
  );
}

Gallery.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Gallery);
