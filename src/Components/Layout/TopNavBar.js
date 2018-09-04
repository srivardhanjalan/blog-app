import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
};

function TopNavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>

          <Typography variant="title" color="inherit" className={classes.flex}>
            <Link to='/' className={classes.link}>SRJ</Link>
          </Typography>

          <div>
            <Button color="inherit"><Link to='/blog' className={classes.link}>Blog</Link></Button>
            <Button color="inherit"><Link to='/about' className={classes.link}>About</Link></Button>
            <Button color="inherit"><Link to='/contact' className={classes.link}>Contact</Link></Button>
            <Button color="inherit"><Link to='/gallery' className={classes.link}>Gallery</Link></Button>
            <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

TopNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopNavBar);
