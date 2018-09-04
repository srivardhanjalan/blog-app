import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';

const styles = {
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: '40%',
  }
};

function MediaCardHorizontal(props) {
  const { classes, post } = props;

  return (
    <Card className={classes.card}>
      <div className={classes.cardDetails}>
        <CardContent>
          <Typography variant="headline">{post.title}</Typography>
          <Typography variant="subheading" color="textSecondary">
            {post.date}
          </Typography>
          <Typography variant="subheading" paragraph>
            {post.description}
          </Typography>
          <Typography variant="subheading" color="primary">
            Continue reading...
          </Typography>
        </CardContent>
      </div>
      <Hidden xsDown>
        <CardMedia
          className={classes.cardMedia}
          image={post.image}
        />
      </Hidden>
    </Card>
  );
}

MediaCardHorizontal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCardHorizontal);
