import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import MediaCard from '../Card/MediaCard'
import MediaControlCard from '../Card/MediaControlCard'
import AdvancedCard from '../Card/AdvancedCard'

const styles = theme => ({
});

function Contact(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <Grid container spacing={16}>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <MediaControlCard></MediaControlCard>
          <br/>
          <MediaControlCard></MediaControlCard>
          <br/>
          <MediaControlCard></MediaControlCard>
          <br/>
          <MediaControlCard></MediaControlCard>
          <br/>
          <MediaControlCard></MediaControlCard>
          <br/>
          <MediaControlCard></MediaControlCard>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <MediaCard></MediaCard>
          <br/>
          <AdvancedCard></AdvancedCard>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
