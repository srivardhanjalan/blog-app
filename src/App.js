import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import 'typeface-roboto'
import { withStyles } from '@material-ui/core/styles';

import TopNavBar from './Components/Layout/TopNavBar'
import Main from './Components/Layout/Main'
import Footer from './Components/Layout/Footer'

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  }
});

function App(props){

  const { classes } = props;

    return (
      <div className={classes.root}>
        <TopNavBar></TopNavBar>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
