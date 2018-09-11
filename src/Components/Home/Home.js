import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import axios from 'axios'
import service from '../Service'

import MediaCard from '../Card/MediaCard'
import SingleLineGridList from '../Grid/SingleLineGridList'
import MediaCardHorizontal from '../Card/MediaCardHorizontal'

const styles = theme => ({
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3
  },
  cardGrid: {
    marginTop: theme.spacing.unit * 3,
    paddingBottom: theme.spacing.unit * 3
  }
});

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    }
  }

  addNewBlog() {
    var headers = {
            'Content-Type': 'application/json'
          }

    var data = {
        Title: 'Test Title 2',
        Body: 'Test Body 2',
        Tags: 'Adventure,Science',
        ImageUrl: 'https://techcrunch.com/wp-content/uploads/2017/06/gettyimages-494545485.jpg?w=730&crop=1'
      }

    axios.post('https://z1nfuue2tk.execute-api.us-west-2.amazonaws.com/prod/blogs', data, headers)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }

  componentDidMount() {

    service.posts().getAll()
      .then(response => this.setState({blogs: response.data.Items}))
      .then(response => console.log(this.state.blogs))
      .catch(error => console.log(error));;

      this.addNewBlog();
  }

  render() {

    const { classes } = this.props;

    if(!this.state.blogs.length)
          return null;

    return (
      <React.Fragment>
          <MediaCard post={this.state.blogs[0]} invertColor largeContent></MediaCard>
          <Grid container spacing={16} className={classes.cardGrid}>
            {this.state.blogs.map(post => (
              <Grid item key={post.BlogId} xs={12} md={6}>
                <MediaCardHorizontal post={post}></MediaCardHorizontal>
              </Grid>
            ))}
          </Grid>
          <SingleLineGridList></SingleLineGridList>
      </React.Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
