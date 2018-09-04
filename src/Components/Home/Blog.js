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

const cards = [1, 2, 3, 4, 5, 6, 7, 8];

function Blog(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <h2>Blog Category 1</h2>
      <Grid container spacing={32}>
        {cards.map(card => (
          <Grid item key={card} sm={6} md={6} lg={4}>
            <MediaCard></MediaCard>
          </Grid>
        ))}
      </Grid>
      <h2>Blog Category 2</h2>
      <Grid container spacing={32}>
        {cards.map(card => (
          <Grid item key={card} sm={6} md={6} lg={4}>
            <MediaControlCard></MediaControlCard>
          </Grid>
        ))}
      </Grid>
      <h2>Blog Category 3</h2>
      <Grid container spacing={32}>
        {cards.map(card => (
          <Grid item key={card} sm={6} md={6} lg={4}>
            <AdvancedCard></AdvancedCard>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);
