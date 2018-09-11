import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import service from '../Service'

import MediaCard from '../Card/MediaCard'
import MediaControlCard from '../Card/MediaControlCard'
import AdvancedCard from '../Card/AdvancedCard'

const styles = theme => ({
});

class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    }
  }

  componentDidMount() {
    service.posts().getAll()
      .then(response => this.setState({blogs: response.data.Items}))
      .then(response => console.log(this.state.blogs))
      .catch(error => console.log(error));;
  }

  render() {

    const { classes } = this.props;

    return (
      <React.Fragment>
        <h2>Blog Category 1</h2>
        <Grid container spacing={32}>
          {this.state.blogs.map(post => (
            <Grid item key={post.BlogId} sm={6} md={6} lg={4}>
              <MediaCard post={post}></MediaCard>
            </Grid>
          ))}
        </Grid>
        <h2>Blog Category 2</h2>
        <Grid container spacing={32}>
          {this.state.blogs.map(post => (
            <Grid item key={post.BlogId} sm={6} md={6} lg={4}>
              <MediaControlCard post={post}></MediaControlCard>
            </Grid>
          ))}
        </Grid>
        <h2>Blog Category 3</h2>
        <Grid container spacing={32}>
          {this.state.blogs.map(post => (
            <Grid item key={post.BlogId} sm={6} md={6} lg={4}>
              <AdvancedCard post={post}></AdvancedCard>
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    );
  }
}

Blog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Blog);
