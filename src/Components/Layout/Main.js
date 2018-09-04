import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Home from '../Home/Home'
import About from '../Home/About'
import Blog from '../Home/Blog'
import Contact from '../Home/Contact'
import Gallery from '../Home/Gallery'

const styles = theme => ({
  grid: {
    padding: theme.spacing.unit * 3,
  }
});

function Main(props) {
  const { classes } = props;

  return (
    <Grid container spacing={8} className={classes.grid}>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/blog' component={Blog}/>
        <Route path='/about' component={About}/>
        <Route path='/gallery' component={Gallery}/>
        <Route path='/contact' component={Contact}/>
      </Switch>
    </Grid>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Main);
