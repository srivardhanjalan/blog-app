import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import axios from 'axios'

import SingleLineGridList from '../Grid/SingleLineGridList'
import MediaCardHorizontal from '../Card/MediaCardHorizontal'

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
  cardGrid: {
    paddingBottom: theme.spacing.unit * 3
  }
});

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    image: 'https://techcrunch.com/wp-content/uploads/2017/06/gettyimages-494545485.jpg?w=730&crop=1',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    image: 'https://techcrunch.com/wp-content/uploads/2017/06/gettyimages-494545485.jpg?w=730&crop=1',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
];


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    }
  }

  componentDidMount() {
    axios.get('https://z1nfuue2tk.execute-api.us-west-2.amazonaws.com/prod/blogs')
      .then(response => this.setState({blogs: response.data.Items}))
      .then(response => console.log(this.state.blogs))

  }

  render() {

    const { classes } = this.props;

    return (
      <React.Fragment>
          <img src="https://techcrunch.com/wp-content/uploads/2017/06/gettyimages-494545485.jpg?w=730&crop=1"
          className={classes.mainImage}/>
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography variant="display2" color="inherit" gutterBottom>
                    Title of a longer featured blog post
                  </Typography>
                  <Typography variant="headline" color="inherit" paragraph>
                    Multiple lines of text that form the lede, informing new readers quickly and
                    efficiently about what&apos;s most interesting in this post&apos;s contents.
                  </Typography>
                  <Typography variant="title" color="inherit">
                    Continue reading...
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Grid container spacing={16} className={classes.cardGrid}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <MediaCardHorizontal post={post}></MediaCardHorizontal>
              </Grid>
            ))}
          </Grid>
          <SingleLineGridList></SingleLineGridList>
          <ul>
            {this.state.blogs.map(blog => (
              <li key={blog.RideId}>{blog.RideId}</li>
            ))}
          </ul>


      </React.Fragment>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
