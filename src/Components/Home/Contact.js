import React, {Component} from 'react';
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

class Contact extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { classes } = this.props;

    return (
      <React.Fragment>
        <Grid container spacing={32} alignContent="center" alignItems="center">
          <Grid item sm={6} md={6} lg={4}>
            <div className="LI-profile-badge"
              data-version="v1"
              data-size="large"
              data-locale="en_US"
              data-type="vertical"
              data-theme="dark"
              data-vanity="srivardhanjalan">
                <a className="LI-simple-link"
                  href='https://www.linkedin.com/in/srivardhanjalan?trk=profile-badge'>
                  Srivardhan Jalan
                </a>
            </div>
          </Grid>
          <Grid item sm={6} md={6} lg={4}>
            <div className="LI-profile-badge"
              data-version="v1"
              data-size="large"
              data-locale="en_US"
              data-type="vertical"
              data-theme="light"
              data-vanity="srivardhanjalan">
              <a className="LI-simple-link"
                href='https://www.linkedin.com/in/srivardhanjalan?trk=profile-badge'>
                Srivardhan Jalan
              </a>
            </div>
          </Grid>
        </Grid>
        <Grid container spacing={32}>
          <Grid item sm={6} md={6} lg={4}>
            <div className="LI-profile-badge"
              data-version="v1"
              data-size="large"
              data-locale="en_US"
              data-type="horizontal"
              data-theme="dark"
              data-vanity="srivardhanjalan">
              <a className="LI-simple-link"
                href='https://www.linkedin.com/in/srivardhanjalan?trk=profile-badge'>
                Srivardhan Jalan
              </a>
            </div>
          </Grid>
          <Grid item sm={6} md={6} lg={4}>
            <div className="LI-profile-badge"
              data-version="v1"
              data-size="large"
              data-locale="en_US"
              data-type="horizontal"
              data-theme="light"
              data-vanity="srivardhanjalan">
              <a className="LI-simple-link"
                href='https://www.linkedin.com/in/srivardhanjalan?trk=profile-badge'>
                Srivardhan Jalan
              </a>
            </div>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

Contact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Contact);
